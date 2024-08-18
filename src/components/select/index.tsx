"use client";

import { useEffect, useRef, useState } from "react";

import * as S from "./styles";
import { SelectProps } from "./types";

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
