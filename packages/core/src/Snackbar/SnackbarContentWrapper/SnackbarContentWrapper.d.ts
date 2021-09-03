import { StandardProps, SnackbarContentProps } from "@material-ui/core";
import { ActionGeneric } from "../../ActionsGeneric";
import { SemanticVariantTypes } from "../../Banner";

export type HvSnackbarContentWrapperClassKey =
  | "root"
  | "success"
  | "error"
  | "default"
  | "message"
  | "messageSpan"
  | "messageText"
  | "action";

export interface HvSnackbarContentWrapperProps
  extends StandardProps<
    SnackbarContentProps,
    HvSnackbarContentWrapperClassKey,
    "action" | "variant"
  > {
  /**
   * The message to display.
   */
  label?: string;
  /**
   * Variant of the snackbar.
   */
  variant?: SemanticVariantTypes;
  /**
   * Custom icon to replace the variant default.
   */
  customIcon?: React.ReactNode;
  /**
   * Controls if the associated icon to the variant should be shown.
   */
  showIcon?: boolean;
  /**
   * Action to display.
   */
  action?: React.ReactNode | ActionGeneric;
  /**
   * The callback function ran when an action is triggered, receiving `action` as param
   */
  actionCallback?: (id: string, action: ActionGeneric) => void;
}

export default function HvSnackbarContentWrapper(
  props: HvSnackbarContentWrapperProps
): JSX.Element | null;