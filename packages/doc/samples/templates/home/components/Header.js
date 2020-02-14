import React, { useContext } from "react";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import {
  Alert,
  Menu,
  Settings,
  User
} from "@hv/uikit-react-icons/dist/Generic";
import { HvBadge, HvButton } from "@hv/uikit-react-core/dist";
import HvHeader, {
  HvHeaderActions,
  HvHeaderBrand,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/NewHeader";
import withStyles from "@material-ui/core/styles/withStyles";
import HitachiLogo from "../../home/components/HitachiLogo";
import styles from "../views/detail/styles";
import NavContext from "../hoc/NavContext";

const boxStyles = { width: 32, height: 32 };

const NavigationTemplate = ({ theme }) => {
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const {
    headerNav,
    headerSelection,
    onHeaderSelection,
    shouldBeOpen
  } = useContext(NavContext);

  const handleChange = (evt, selectedItem) => {
    console.log("selectedItem: ", selectedItem);
    onHeaderSelection(selectedItem.id);
  };

  const toggleExpanded = () => {
    shouldBeOpen();
  };

  const handleClick = evt => console.log(evt);

  return (
    <HvHeader position="fixed">
      {!isMdUp && (
        <HvButton category="icon" onClick={toggleExpanded}>
          <Menu />
        </HvButton>
      )}
      <HvHeaderBrand
        logo={<HitachiLogo />}
        name={!isXs ? "Maintenance Insights" : undefined}
      />
      {isMdUp && (
        <HvHeaderNavigation
          data={headerNav}
          selected={headerSelection}
          onClick={handleChange}
        />
      )}
      <HvHeaderActions>
        {isMdUp && (
          <>
            <HvButton category="icon" onClick={handleClick}>
              <Settings boxStyles={boxStyles} />
            </HvButton>
            <HvButton category="icon" onClick={handleClick}>
              <User boxStyles={boxStyles} />
            </HvButton>
          </>
        )}
        <HvButton category="icon" onClick={handleClick}>
          <HvBadge count={1} icon={<Alert boxStyles={boxStyles} />} />
        </HvButton>
      </HvHeaderActions>
    </HvHeader>
  );
};

export default withStyles(styles, { withTheme: true })(NavigationTemplate);
