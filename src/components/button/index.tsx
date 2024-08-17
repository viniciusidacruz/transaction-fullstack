import { Wrapper } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  variant = "default",
  children,
  disabled,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <Wrapper disabled={disabled || isLoading} variant={variant} {...props}>
      {isLoading ? "Carregando..." : children}
    </Wrapper>
  );
}
