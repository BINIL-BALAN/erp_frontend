import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, type GridSize, type SelectProps } from "@mui/material";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";
type FormSelectProp = {
  props?: SelectProps; // single-select, clearable, not freeSolo
  control: Control<any>;
  label: string;
  name: string;
  rules: RegisterOptions;
  options:(number | string)[];
  size?:GridSize
      | {
          xs?: GridSize;
          sm?: GridSize;
          md?: GridSize;
          lg?: GridSize;
          xl?: GridSize;
        };
};

function FormSelect({
  props,
  control,
  name,
  label,
  rules,
  options,
  size
}: FormSelectProp) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { ref, onChange, value = null, ...field },
        fieldState: { error },
      }) => {
        return (
          <Grid size={size}>
          <FormControl fullWidth>
            <InputLabel id={`idforselect${name}`}>{Boolean(rules.required) ? `${label} *`:label}</InputLabel>
            <Select
              {...props}
              {...field}
              labelId={`idforselect${name}`}
              id={`idforselect${name}`}
              defaultValue={value}
              value={value}
              onChange={e=>{onChange(e.target.value)}}
              error={!!error}
              
            >
              {
                options.map(option=><MenuItem value={option}>{option}</MenuItem>)
              }
            </Select>
            <FormHelperText>{error?.message || ""}</FormHelperText>
          </FormControl>
          </Grid>
        );
      }}
    />
  );
}

export default FormSelect;
