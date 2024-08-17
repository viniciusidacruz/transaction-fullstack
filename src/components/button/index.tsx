import { Wrapper } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <Wrapper variant={variant} {...props}>
      {children}
    </Wrapper>
  );
}
