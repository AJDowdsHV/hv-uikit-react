import { StandardProps } from "@material-ui/core";
import { ColumnInstance } from "react-table";

export type HvTableCellClassKey =
  | "root"
  | "head"
  | "body"
  | "footer"
  | "sortable"
  | "sorted"
  | "sortIcon"
  | "stickyColumn"
  | "stickyColumnMostLeft"
  | "stickyColumnLeastRight";

export interface HvTableCellProps
  extends StandardProps<React.HTMLAttributes<HTMLTableCellElement>, HvTableCellClassKey> {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * Defaults to th.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * The scope of cells that the header element relates to.
   */
  scope: "col" | "row" | "colgroup" | "rowgroup";

  /**
   * Set the text-align on the table cell content.
   */
  align?: "center" | "inherit" | "justify" | "left" | "right";
  /**
   * Sets the padding applied to the cell.
   * By default, the Table parent component set the value, which is the default padding specified by Design System.
   */
  padding?: "checkbox" | "default" | "none";

  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant?: "body" | "footer" | "head";

  /**
   * The cell is part of a sticky column.
   */
  stickyColumn?: boolean;
  /**
   * The cell is part of the last sticky to the left column.
   */
  stickyColumnMostLeft?: boolean;
  /**
   * The cell is part of the first sticky to the right column.
   */
  stickyColumnLeastRight?: boolean;

  /**
   * Whether or not the cell is sorted
   */
  sorted?: boolean;
  /**
   * Whether or not the cell is sortable
   */
  sortable?: boolean;
  /**
   * Set sort direction icon and aria-sort.
   */
  sortDirection?: "ascending" | "descending" | false;

  /**
   * React Table column instance. Also contains other props passed as `data`
   * https://react-table.tanstack.com/docs/api/useTable#column-options
   */
  rtCol: ColumnInstance;
}

export default function HvTableCell(props: HvTableCellProps): JSX.Element | null;
