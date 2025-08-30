import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DatePicker,
  type DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {
  Grid,
  TextField,
  type GridSize,
  type TextFieldProps,
} from "@mui/material";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";
type FormTextProp = {
  props?: DatePickerProps;
  control: Control<any>;
  label: string;
  name: string;
  rules: RegisterOptions;
  size?:
    | GridSize
    | {
        xs?: GridSize;
        sm?: GridSize;
        md?: GridSize;
        lg?: GridSize;
        xl?: GridSize;
      };
};
function FormDatePicker({
  props,
  control,
  name,
  label,
  rules,
  size,
}: FormTextProp) {
  return (
    <Grid size={size}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { ref, onChange, value = null, ...field },
          fieldState: { error },
        }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...(props ?? {})}
                  format={props?.format || "DD-MM-YYYY"}
                  value={value ? dayjs(value,"DD-MM-YYYY") : dayjs(dayjs().format("DD-MM-YYYY"), "DD-MM-YYYY")}
                  onChange={e=>{onChange(dayjs(e).format("DD-MM-YYYY"))}}
                  slotProps={{
                    textField: {...field, fullWidth:true,size: "small",error:!!error,helperText:error?.message || ""},
                
                    openPickerButton: {
                      sx: {
                        border: 0,
                        padding: 0,
                        color: "primary.main",
                        "&:hover": {
                          backgroundColor: "rgba(25, 118, 210, 0.1)",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: "1.2rem",
                        },
                      },
                    },
                  }}
                  label={label}
                />
            </LocalizationProvider>
          );
        }}
      />
    </Grid>
  );
}

export default FormDatePicker;
