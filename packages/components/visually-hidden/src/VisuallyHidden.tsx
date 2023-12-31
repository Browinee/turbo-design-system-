import React, { PropsWithChildren, JSXElementConstructor } from "react";

type VisuallyHiddenProps = {
  /**
   * The element type to render as.
   * @default 'div'
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | JSXElementConstructor<any>;
};
const style = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
};
export const VisuallyHidden = React.forwardRef<
  any,
  PropsWithChildren<VisuallyHiddenProps>
>((props, ref) => {
  const { as: ElementType = "div", children, ...restProps } = props;
  return (
    <ElementType style={style} {...restProps} ref={ref}>
      {children}
    </ElementType>
  );
});
VisuallyHidden.displayName = "VisuallyHidden";

export type { VisuallyHiddenProps };
