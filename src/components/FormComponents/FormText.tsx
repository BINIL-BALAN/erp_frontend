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
  props?: TextFieldProps;
  control: Control<any>;
  label: string;
  name: string;
  rules: RegisterOptions;
  size?:GridSize
      | {
          xs?: GridSize;
          sm?: GridSize;
          md?: GridSize;
          lg?: GridSize;
          xl?: GridSize;
        };
};

function FormText({ props, control, name, label, rules,size }: FormTextProp) {
  return <Grid size={size}>
     <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { ref, onChange, value = null, ...field },
      fieldState: { error },
    }) => {
      return (
        <TextField
         {...(props ?? {})}
          {...field}
          // required={Boolean(rules.required)}
          fullWidth
          label={Boolean(rules.required) ? `${label} *`:label}
          error={!!error}
          value={value}
          helperText={error?.message || ""}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      );
    }}
  />
  </Grid>
}

export default FormText;
