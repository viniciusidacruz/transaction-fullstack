"use client";

import { useEffect, useRef, useState } from "react";

import * as S from "./styles";
import { SelectProps } from "./types";

/**
 * Componente de seleção customizada com opções de menu dropdown, ícone, e funcionalidade de limpar filtros.
 *
 * @param icon - Um ícone opcional a ser exibido ao lado do valor selecionado.
 * @param label - O rótulo exibido quando nenhum valor é selecionado.
 * @param options - Array de objetos que representam as opções disponíveis para seleção. Cada objeto deve ter uma chave `value` e `label`.
 * @param className - Classe CSS opcional para estilização adicional do botão de rótulo.
 * @param defaultValue - Valor padrão que será exibido ao inicializar o componente.
 * @param onChangeValue - Função chamada quando o usuário seleciona uma nova opção. Recebe o `value` da opção selecionada como argumento.
 * @param onClearFilter - Função chamada quando o usuário clica no botão de limpar filtros.
 */
export const Select = ({
  icon,
  label,
  options,
  className = "",
  defaultValue,
  onChangeValue,
  onClearFilter,
}: SelectProps) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleVisibilityMenu = () =>
    setIsVisibleMenu((prevState) => !prevState);

  const handleValueChange = (value: string) => {
    setCurrentValue(value);
  };

  const handleSelectValue = (value: string, label: string) => {
    handleValueChange(label);
    onChangeValue(value);
    handleVisibilityMenu();
  };

  const handleClearFilter = () => {
    onClearFilter();
    setCurrentValue(defaultValue);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsVisibleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.SelectContainer ref={containerRef}>
      <S.SelectLabelButton
        type="button"
        onClick={handleVisibilityMenu}
        className={className}
      >
        {currentValue?.length ? currentValue : label}

        {icon && icon}
      </S.SelectLabelButton>
      <S.DropdownStyle data-testid="select_menu" isVisible={isVisibleMenu}>
        {options.map((option, index) => (
          <S.DropdownItem
            onClick={() => handleSelectValue(option.value, option.label)}
            active={option.label === currentValue}
            key={index}
          >
            {option.label}
          </S.DropdownItem>
        ))}
        <S.ClearFilter
          type="button"
          data-testid="button_clear_state"
          title="Limpar os filtros"
          onClick={handleClearFilter}
        >
          Limpar Filtros
        </S.ClearFilter>
      </S.DropdownStyle>
    </S.SelectContainer>
  );
};
