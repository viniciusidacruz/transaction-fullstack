"use client";

import { useEffect, useRef, useState } from "react";

import * as S from "./styles";
import { SelectProps } from "./types";

export const Select = ({
  options,
  onChangeValue,
  label,
  icon,
}: SelectProps) => {
  const [currentValue, setCurrentValue] = useState("");
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
      <S.SelectLabelButton onClick={handleVisibilityMenu}>
        {currentValue !== "" ? currentValue : label}

        {icon && icon}
      </S.SelectLabelButton>
      <S.DropdownStyle isVisible={isVisibleMenu}>
        {options.map((option, index) => (
          <S.DropdownItem
            onClick={() => handleSelectValue(option.value, option.label)}
            active={option.label === currentValue}
            key={index}
          >
            {option.label}
          </S.DropdownItem>
        ))}
      </S.DropdownStyle>
    </S.SelectContainer>
  );
};
