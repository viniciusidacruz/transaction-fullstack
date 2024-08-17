import { forwardRef } from "react";

import { InputProps } from "./types";
import { Wrapper } from "./styles";

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
