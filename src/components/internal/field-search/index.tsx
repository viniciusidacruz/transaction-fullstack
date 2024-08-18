"use client";

import { Search } from "lucide-react";
import { FormEvent, useEffect, useRef } from "react";

import { Wrapper } from "./styles";
import { FieldSearchProps } from "./types";

/**
 * Componente de campo de pesquisa com um botão de submit.
 *
 * @param onSearch - Função de callback que é chamada quando o usuário envia o formulário de pesquisa. Recebe o valor do campo de entrada como argumento.
 * @param defaultValue - Valor padrão que será preenchido no campo de entrada quando o componente for montado.
 * @param props - Qualquer outra propriedade adicional que será passada para o campo de entrada (`input`).
 */
export function FieldSearch({
  onSearch,
  defaultValue,
  ...props
}: FieldSearchProps) {
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  const onSubmitSearch = (event: FormEvent) => {
    event.preventDefault();

    if (inputFieldRef.current && onSearch) {
      onSearch(inputFieldRef.current.value);
    }
  };

  useEffect(() => {
    if (!inputFieldRef.current) return;

    inputFieldRef.current.value = defaultValue;
  }, [defaultValue]);

  return (
    <Wrapper onSubmit={onSubmitSearch}>
      <input ref={inputFieldRef} {...props} />

      <button
        data-testid="submit_search"
        title="Botão para pesquisar o que você digitou"
      >
        <Search />
      </button>
    </Wrapper>
  );
}
