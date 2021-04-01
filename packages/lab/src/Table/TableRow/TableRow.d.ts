import { StandardProps } from "@material-ui/core";

export type HvTableRowClassKey = "root" | "head" | "body" | "footer" | "hover" | "selected";

export interface HvTableRowProps
  extends StandardProps<React.HTMLAttributes<HTMLTableRowElement>, HvTableRowClassKey> {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * Defaults to `tr`.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * Whether the table row will shade on hover.
   */
  hover?: boolean;
  /**
   * Whether the table row will have the selected shading.
   */
  selected?: boolean;
}

export default function HvTableRow(props: HvTableRowProps): JSX.Element | null;
