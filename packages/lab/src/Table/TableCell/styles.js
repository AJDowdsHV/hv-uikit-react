const styles = (theme) => ({
  root: {
    verticalAlign: "inherit",
    textAlign: "left",
    padding: theme.hvSpacing(0, "xs"),

    borderBottom: `1px solid ${theme.palette.atmo4}`,
  },

  head: {
    height: 52,
    paddingTop: 8,
    verticalAlign: "top",

    backgroundColor: theme.palette.atmo1,
    borderTop: `1px solid ${theme.palette.atmo4}`,
    borderBottom: `1px solid ${theme.palette.atmo4}`,
    ...theme.hv.typography.highlightText,
  },
  body: {
    height: 32,
    backgroundColor: "inherit",
    ...theme.hv.typography.normalText,
  },
  footer: {},

  alignLeft: {
    textAlign: "left",
  },
  alignCenter: {
    textAlign: "center",
  },
  alignRight: {
    textAlign: "right",
    flexDirection: "row-reverse",
  },
  alignJustify: {
    textAlign: "justify",
  },

  paddingNone: {
    padding: 0,
  },
  paddingCheckbox: {
    padding: 0,
    width: 32,
  },

  stickyColumn: {
    position: "sticky",
    zIndex: 2,
  },

  stickyColumnMostLeft: {
    borderRight: `solid 1px ${theme.hv.palette.atmosphere.atmo4}`,
  },

  stickyColumnLeastRight: {
    borderLeft: `solid 1px ${theme.hv.palette.atmosphere.atmo4}`,
  },
});

export default styles;