import { Wrapper } from "./styles";
import { ButtonProps } from "./types";

/**
 * Componente de botão reutilizável com suporte para diferentes variantes, estados de carregamento e desabilitação.
 *
 * @param variant - Define o estilo visual do botão. Pode ser "default" ou outro estilo definido.
 * @param children - Conteúdo a ser exibido dentro do botão.
 * @param disabled - Define se o botão está desabilitado. O botão desabilitado não responde a interações do usuário.
 * @param isLoading - Define se o botão está em estado de carregamento. Se verdadeiro, exibe "Carregando..." em vez do conteúdo padrão.
 * @param props - Qualquer outra propriedade adicional que será passada para o componente `Wrapper`.
 */
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
