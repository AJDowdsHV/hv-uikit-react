import * as React from "react";
import { StandardProps } from "@material-ui/core";

type ToggleLabels = {
  /**
   * Description for selected.
   */
  selectedTitle?: string;
  /**
   * Description for not selected.
   */
  notSelectedTitle?: string;
};

export interface HvToggleButtonProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HvToggleButtonClassKey> {
  /**
   * Defines if it is a animated SVG.
   */
  animated?: boolean;
  /**
   * Denotes if component is active or not.
   */
  disabled?: boolean;
  /**
   * Defines if the button is selected.
   */
  selected?: boolean;
  /**
   * Labels.
   */
  labels?: ToggleLabels;
  /**
   * Icon for when selected.
   */
  selectedIcon?: React.ComponentType<any>;
  /**
   * Icon for when not selected.
   */
  notSelectedIcon: React.ComponentType<any>;
}

export type HvToggleButtonClassKey = "root" | "icon" | "disabled";

export default function HvToggleButton(props: HvToggleButtonProps): JSX.Element | null;