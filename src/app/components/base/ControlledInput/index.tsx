import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ITextAreaProps, TextArea } from "../TextArea";
import { IInputProps, Input } from "../Input";
import { HelperText } from "./styles";

interface ControlledInputProps extends IInputProps, ITextAreaProps {
  control: Control<any>;
  name: string;
  error?: string;
  textArea?: boolean;
}

export function ControlledInput({
  name,
  label,
  control,
  placeholder,
  textArea,
  minRows,
  error,
  ...rest
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <div>
            {textArea ? (
              <TextArea
                label={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                minRows={minRows}
                {...rest}
              />
            ) : (
              <Input
                label={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
              />
            )}
            {error ? (
              <HelperText size={14} bold="medium">
                {error}
              </HelperText>
            ) : null}
          </div>
        );
      }}
    />
  );
}
