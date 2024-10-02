import * as React from "react";

import { Control, FieldValues, Path, useController } from "react-hook-form";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickerValidDate } from "@mui/x-date-pickers/models";

// export interface IDatePickerFieldProps {
//   fullWidth?: boolean;
// }

export type InputFieldProps<T extends FieldValues> = DatePickerProps<Dayjs> & {
  name: Path<T>;
  control: Control<T>;
};

export default function DatePickerField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange,
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          name={name}
          //   sx={{ width: fullWidth ? "100%" : "auto" }}

          value={value}
          onChange={(newValue: Dayjs | null) => {
            onChange(newValue);
          }}
          slotProps={{
            textField: {
              helperText: error?.message,
            },
          }}
          {...rest}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
