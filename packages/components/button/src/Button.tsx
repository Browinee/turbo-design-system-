import React from "react";

type ButtonProps = {
  /** Add a description comment for each prop. */
};

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>(({}, ref) => {
  return <div>Hello World</div>;
});

Button.displayName = "Button";

export type { ButtonProps };