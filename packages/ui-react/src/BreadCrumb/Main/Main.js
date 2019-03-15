/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import PropTypes from "prop-types";
import Separator from "@hv-ui/icons/core/XS-icons/AngleForwards12";
import Typography from "@material-ui/core/Typography";
import startCase from "lodash/startCase";
import isNil from "lodash/isNil";
import SubMenu from "../SubMenu";
import Link from "../../Link";

/**
 * Removes the extension of the label.
 *
 * @param label
 * @returns {string | *}
 */
const removeExtension = label =>
  label.includes(".") ? label.substring(0, label.lastIndexOf(".")) : label;

/**
 * Representation of last path element. This element doesn't have a link.
 *
 * @param label
 * @returns {*}
 * @constructor
 */
const LastPathElement = ({ label }) => (
  <Typography variant="body2">{startCase(removeExtension(label))}</Typography>
);

/**
 * Representation of an path element. This element contains a link.
 *
 * @param useRouter
 * @param elem
 * @param classes
 * @returns {*}
 * @constructor
 */
const Page = ({ useRouter, elem, classes }) => (
  <Link route={elem.path} params={elem.params} useRouter={useRouter}>
    <div className={classes.centerContainer}>
      {/* {elem.icon && <div className={classes.iconContainer}>{elem.icon}</div>} */}
      <Typography className={classes.link}>{startCase(elem.label)}</Typography>
    </div>
  </Link>
);

/**
 * Container of the intermediates path elements with the separator.
 *
 * @param classes
 * @param children
 * @returns {*}
 * @constructor
 */
const PathElement = ({ classes, children }) => (
  <div className={classes.centerContainer}>
    {children}
    <div className={classes.separator}>
      <Separator />
    </div>
  </div>
);

/**
 * Helper function to build a new path list with one element with the list for the submenu.
 *
 * @param classes
 * @param useRouter
 * @param listRoute
 * @param maxVisible
 * @returns {*}
 */
const pathWithSubMenu = (classes, useRouter, listRoute, maxVisible) => {
  const nbrElemToSubMenu = listRoute.length - maxVisible;
  const subMenuList = listRoute.slice(1, nbrElemToSubMenu + 1);
  listRoute.splice(
    1,
    nbrElemToSubMenu,
    <SubMenu subMenuList={subMenuList} useRouter={useRouter} />
  );

  return listRoute;
};

/**
 * Breadcrumb element.
 *
 * @param classes
 * @param useRouter
 * @param listRoute
 * @param maxVisible
 * @returns {*}
 * @constructor
 */
const BreadCrumb = ({ classes, useRouter, listRoute, maxVisible, url }) => {
  const maxVisibleElem = maxVisible < 2 ? 2 : maxVisible;
  let listPath = listRoute;

  // build the listPath object list
  if (!isNil(url)) {
    listPath = [];

    // get the domain
    const baseUrl = !useRouter ? url.match(/^.*\/\/[^/]+/, "") : "";

    // get url without domain
    const urlWithoutDomain = url.replace(/^.*\/\/[^/]+/, "");

    const pathNames = urlWithoutDomain.split("/").filter(x => x);

    pathNames.map((elem, index) =>
      listPath.push({
        label: decodeURI(elem),
        path: `${baseUrl}/${pathNames.slice(0, index + 1).join("/")}`
      })
    );
  }

  const breadcrumbPath =
    listPath.length > maxVisibleElem
      ? pathWithSubMenu(classes, useRouter, listPath, maxVisibleElem)
      : listPath;

  const lastIndex = breadcrumbPath.length - 1;

  return (
    <div className={classes.root}>
      {listPath.map((elem, index) => {
        const key = `key_${index}`;

        return index === lastIndex ? (
          <LastPathElement label={elem.label} key={key} />
        ) : (
          <PathElement classes={classes} key={key}>
            {typeof elem.type === "function" ? (
              <>{elem}</>
            ) : (
              <Page
                key={key}
                useRouter={useRouter}
                elem={elem}
                classes={classes}
              />
            )}
          </PathElement>
        );
      })}
    </div>
  );
};
BreadCrumb.propTypes = {
  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.shape({
    /**
     * styles applied to the component root class.
     */
    root: PropTypes.instanceOf(Object),
    /**
     * styles applied to the links.
     */
    link: PropTypes.instanceOf(Object),
    /**
     *  styles applied to the separator.
     */
    separator: PropTypes.instanceOf(Object)
  }).isRequired,
  /**
   * Should use the router.
   */
  useRouter: PropTypes.bool,
  /**
   * List of breadcrumb.
   */
  listRoute: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string
    })
  ),
  /**
   * URL to build the breadcrumb.
   */
  url: PropTypes.string,
  /**
   * Number of pages visible.
   */
  maxVisible: PropTypes.number
};

BreadCrumb.defaultProps = {
  useRouter: false,
  maxVisible: 9999,
  listRoute: [],
  url: null
};

export default BreadCrumb;