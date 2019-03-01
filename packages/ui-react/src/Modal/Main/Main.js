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
import classNames from "classnames";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";

import Close16 from "@hv-ui/icons/core/S-icons/Close16";
import Button from "../../Button";

const style = {
  width: "32px"
};

/**
 * Modal component.
 *
 * @param classes
 * @param children
 * @param open
 * @param onClose
 * @param others
 * @returns {*}
 * @constructor
 */
const Main = ({ classes, children, open, onClose, ...others }) => (
  <Dialog
    className={classNames(classes.root)}
    open={open}
    PaperProps={{
      classes: {
        root: classes.paper
      }
    }}
    BackdropProps={{
      classes: {
        root: classes.background
      }
    }}
    onClose={(event, reason) => onClose(event, reason)}
    {...others}
  >
    <Button
      className={classes.closeButton}
      colorType="link"
      onClick={event => onClose(event)}
    >
      <Close16 style={style} />
    </Button>
    {children}
  </Dialog>
);

Main.propTypes = {
  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.instanceOf(Object).isRequired,
  /**
   * Components of the modal.
   */
  children: PropTypes.node.isRequired,
  /**
   * Current state of the modal.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Function executed on close.
   */
  onClose: PropTypes.func.isRequired
};

export default Main;
