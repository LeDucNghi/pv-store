import { Control, FieldValues, Path, useController } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

import { SelectParams } from "@/models";

export type ISelecFieldProps<T extends FieldValues> = SelectProps & {
  name: Path<T>;
  control: Control<T>;

  options: SelectParams[];

  label?: string;
};

export function SelectField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  options,
  label,
  ...rest
}: ISelecFieldProps<T>) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl fullWidth sx={{ m: 1 }} size="small">
      <InputLabel id="demo-select-small-label"> {label} </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label={label}
        onChange={onChange}
        value={value}
      >
        {options.map((x, key) => {
          return (
            <MenuItem key={key} value={x.value}>
              {" "}
              {x.name}{" "}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
