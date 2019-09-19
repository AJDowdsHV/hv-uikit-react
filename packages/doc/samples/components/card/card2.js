import React from "react";
import HvCard from "@hv/uikit-react-core/dist/Card";
import FailureIcon from "@hv/uikit-react-icons/dist/DawnTheme/Level3.sema4.S";
import Upload from "@hv/uikit-react-icons/dist/DawnTheme/Upload.S";
import HvButton from "@hv/uikit-react-core/dist/Button";
import MoreOptionsIcon from "@hv/uikit-react-icons/dist/DawnTheme/MoreOptionsVertical.S";
import Grid from "@material-ui/core/Grid";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import leaf from "./resources/leaf.png";
import withStyles from "@material-ui/core/styles/withStyles";

const configuration = {
  title: "Leaves Appear wilted and scorched",
  subtitleLeft: "Just now",
  subtitleRight: "L20"
};

const subtitleLeftStyle = {
  borderRight: "1px solid #dedede",
  paddingRight: "10px",
  marginRight: "10px"
};

const strings = {
  cellATitle: "Priority",
  cellAContent: "High",
  cellCTitle: "Probability score",
  cellCContent: "98%",
  cellBTitle: "Main Asset",
  cellBContent: "California wonder grain of wonderfullness",
  cellDTitle: "Est. date of failure",
  cellDContent: "30-60 days"
};

const MultipleActionsWithMediaStyles = theme => ({
  content: {
    padding: `0 ${theme.hv.spacing.sm}px 0 ${theme.hv.spacing.sm}px`
  },
  item: {
    padding: `0 0 ${theme.hv.spacing.sm}px 0`
  },
  bottomItem: {
    padding: "0"
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

const MultipleActionsWithMedia = ({classes}) => {
  const {
    cellATitle,
    cellAContent,
    cellBTitle,
    cellBContent,
    cellCTitle,
    cellCContent,
    cellDTitle,
    cellDContent
  } = strings;

  return (
    <>
      <Grid container>
        <Grid item xs={5} className={classes.item}>
          <HvTypography variant="labelText">{cellATitle}</HvTypography>
          <HvTypography
            variant="normalText"
            className={classes.text}
          >
            {cellAContent}
          </HvTypography>
        </Grid>
        <Grid item xs={7} className={classes.item}>
          <HvTypography variant="labelText">{cellBTitle}</HvTypography>
          <HvTypography
            variant="normalText"
            className={classes.text}
          >
            {cellBContent}
          </HvTypography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5} className={classes.bottomItem}>
          <HvTypography variant="labelText">{cellCTitle}</HvTypography>
          <HvTypography
            variant="normalText"
            className={classes.text}
          >
            {cellCContent}
          </HvTypography>
        </Grid>
        <Grid item xs={7} className={classes.bottomItem}>
          <HvTypography variant="labelText">{cellDTitle}</HvTypography>
          <HvTypography
            variant="normalText"
            className={classes.text}
          >
            {cellDContent}
          </HvTypography>
        </Grid>
      </Grid>
    </>
  );
};

const MultipleActionsWithMediaWithStyles = withStyles(MultipleActionsWithMediaStyles, {
  withTheme: true
})(MultipleActionsWithMedia);

const ActionStyles = theme => ({
  button: {
    color: theme.palette.grey.inspire,
    "& span": {
      color: theme.palette.grey.inspire
    }
  },
  smallButton: {
    width: "32px",
    minWidth: "32px",
    padding: 0,
    color: theme.palette.grey.inspire,
    "& span": {
      color: theme.palette.grey.inspire
    }
  }
});

const MultipleActionsWithMediaButtons = ({classes}) => (
  <>
    <HvButton className={classes.button} category="ghostSecondary">
      <Upload />
      Update
    </HvButton>
    <HvButton className={classes.smallButton} category="ghostSecondary">
      <MoreOptionsIcon />
    </HvButton>
  </>
);

const MultipleActionsWithMediaButtonsWithStyle = withStyles(ActionStyles, {
  withTheme: true
})(MultipleActionsWithMediaButtons);

export default (
  <div style={{ width: "360px" }}>
    <HvCard
      icon={<FailureIcon />}
      headerTitle={configuration.title}
      subheader={
        <div>
          <span style={subtitleLeftStyle}>{configuration.subtitleLeft}</span>
          <span>{configuration.subtitleRight}</span>
        </div>
      }
      innerCardContent={<MultipleActionsWithMediaWithStyles />}
      actions={<MultipleActionsWithMediaButtonsWithStyle />}
      semantic="sema4"
      isSelectable
      checkboxValue="value"
      mediaPath={leaf}
      mediaHeight={160}
      onChange={event => console.log(`my value is ${event.target.value}`)}
    />
  </div>
);