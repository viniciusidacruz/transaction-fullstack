"use client";

import { Search } from "lucide-react";
import { FormEvent, useEffect, useRef } from "react";

import { Wrapper } from "./styles";
import { FieldSearchProps } from "./types";

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

      <button title="Botão para pesquisar o que você digitou">
        <Search />
      </button>
    </Wrapper>
  );
}
