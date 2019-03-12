/**
 * Copyright (c) 2018 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

const styles = theme => ({
  container: {
    minWidth: "150px",
    maxWidth: "610px"
  },
  inputRoot: {
    margin: "0",
    width: "100%",
    borderStyle: "solid",
    borderWidth: "1px",
    background: theme.palette.common.white,
    borderColor: theme.palette.grey.plain,
    "&:hover": {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: theme.palette.grey.inspire,
      background: theme.palette.common.white
    }
  },
  inputRootDisabled: {
    borderColor: theme.palette.grey.plain,
    background: theme.palette.grey.smokey,
    "&:hover": {
      borderColor: theme.palette.grey.plain,
      background: theme.palette.grey.smokey,
      cursor: "not-allowed"
    },
    cursor: "not-allowed"
  },
  inputRootFocused: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.palette.grey.inspire,
    background: theme.palette.common.white,
    "&:hover": {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: theme.palette.grey.inspire,
      background: theme.palette.common.white
    }
  },
  input: {
    height: 20,
    marginLeft: "10px",
    marginRight: "10px",
    padding: "5px 0 5px",
    fontWeight: theme.typography.body1.fontWeight,
    letterSpacing: theme.typography.body1.letterSpacing,
    color: theme.typography.body1.color,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&::placeholder": {
      fontWeight: theme.typography.disabled.fontWeight,
      letterSpacing: theme.typography.disabled.letterSpacing,
      color: theme.typography.disabled.color,
      fontSize: theme.typography.disabled.fontSize,
      lineHeight: theme.typography.disabled.lineHeight
    }
  },
  inputDisabled: {
    cursor: "not-allowed"
  },
  multiLine: {
    padding: 0
  },
  label: {
    paddingTop: "30px",
    paddingBottom: "10px",
    display: "block",
    fontWeight: theme.typography.subtitle2.fontWeight,
    letterSpacing: theme.typography.subtitle2.letterSpacing,
    color: theme.typography.subtitle2.color,
    fontSize: theme.typography.subtitle2.fontSize,
    lineHeight: theme.typography.subtitle2.lineHeight
  },
  text: {
    paddingTop: "10px",
    paddingBottom: "30px",
    display: "block",
    fontWeight: theme.typography.disabled.fontWeight,
    letterSpacing: theme.typography.disabled.letterSpacing,
    fontSize: theme.typography.disabled.fontSize,
    lineHeight: theme.typography.disabled.lineHeight
  },
  textInfo: {
    color: theme.typography.disabled.color
  },
  textWarning: {
    color: theme.palette.status.error
  },
  icon: {
    width: "30px",
    height: "30px"
  },
  iconContainer: {
    width: "30px",
    height: "30px"
  },
  iconClear: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer"
  },
  "@global": {
    "input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0px 1000px white inset"
    }
  }
});

export default styles;