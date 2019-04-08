'use strict'

/**
 * Replace sizes in the svg
 * @param  string fileData
 * @return Object
 */
module.exports = function ReplaceSize(fileData, sizeObject) {
  const viewBoxRegexp = /viewBox="(\d*?) (\d*?) (\d*?) (\d*?)"/;
  const widthRegexp = /width={(\d*?)}/;
  const heightRegexp = /height={(\d*?)}/;

  return fileData
    .replace(widthRegexp, `width={${sizeObject.width}}`)
    .replace(heightRegexp, `height={${sizeObject.height}}`)
    .replace(viewBoxRegexp, `viewBox="${sizeObject.viewBoxRegexp.join(" ")} "`);
};