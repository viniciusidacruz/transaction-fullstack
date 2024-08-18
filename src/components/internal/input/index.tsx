import { forwardRef } from "react";

import { InputProps } from "./types";
import { Wrapper } from "./styles";

/**
 * Componente de input reutilizável com suporte para rótulo e texto de ajuda.
 *
 * @param label - O rótulo associado ao campo de entrada. Se não fornecido, o rótulo não será exibido.
 * @param id - O identificador único para o campo de entrada. Associado ao rótulo.
 * @param helperText - Texto auxiliar exibido abaixo do campo de entrada. Usado para mensagens de erro ou dicas.
 * @param props - Qualquer outra propriedade adicional que será passada para o elemento `input`.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label = "", id, helperText = "", ...props }, ref) => {
    const hasLabel = !!label.length;
    const hasHelperText = !!helperText.length;

    return (
      <Wrapper hasError={hasHelperText}>
        {hasLabel && <label htmlFor={id}>{label}</label>}

        <input id={id} ref={ref} {...props} />

        {hasHelperText && <small>{helperText}</small>}
      </Wrapper>
    );
  }
);

Input.displayName = "Input";
