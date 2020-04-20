/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";

/**
 * The media container.
 *
 * @param {Object} { classes, mediaPath, mediaTitle, mediaHeight, mediaWidth, ...other }
 */
const Media = ({
  classes,
  mediaPath,
  mediaTitle,
  mediaHeight,
  mediaWidth,
  ...other
}) => {
  const styleObj = {};
  if (mediaHeight) styleObj.height = `${mediaHeight}px`;
  if (mediaWidth) styleObj.width = `${mediaWidth}px`;
  return (
    <div className={classes.mediaContainer}>
      <CardMedia
        className={classes.media}
        image={mediaPath}
        style={styleObj}
        title={mediaTitle}
        {...other}
      />
    </div>
  );
};

Media.propTypes = {
  /**
   * A Jss Object used to override or extend the styles applied to the component.
   */
  classes: PropTypes.shape({
    /**
     * Styles applied to the root of the element.
     */
    mediaContainer: PropTypes.string,
    /**
     * Styles applied to the root element if component="video, audio, picture, iframe, or img".
     */
    media: PropTypes.string
  }).isRequired,
  /**
   *  The title of the media.
   */
  mediaTitle: PropTypes.string,
  /**
   *  The path to the image to show in the media slot.
   */
  mediaPath: PropTypes.string,
  /**
   *  The height necessary to adjust the media container to the image.
   */
  mediaHeight: PropTypes.number,
  /**
   *  The width necessary to adjust the media container to the image.
   */
  mediaWidth: PropTypes.number
};

Media.defaultProps = {
  mediaTitle: "",
  mediaPath: "",
  mediaHeight: undefined,
  mediaWidth: undefined
};

export default Media;