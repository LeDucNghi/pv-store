import * as React from "react";

import { Control, FieldValues, Path, useController } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

export type InputFieldProps<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control: Control<T>;
};

export default function InputField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  ...rest
}: InputFieldProps<T>) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      name={name}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        externalOnChange?.(event);
      }}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...rest}
    />
  );
}
