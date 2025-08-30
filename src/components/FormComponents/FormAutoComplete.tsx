import {
  Autocomplete,
  Grid,
  TextField,
  type AutocompleteProps,
  type GridSize,
} from "@mui/material";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";
type FormAutocompleteProp<T> = {
  props?: AutocompleteProps<T, false, false, false>; // single-select, clearable, not freeSolo
  control: Control<any>;
  label: string;
  name: string;
  rules: RegisterOptions;
  options: T[];
  size?: GridSize | { xs?: GridSize; sm?: GridSize; md?: GridSize; lg?: GridSize; xl?: GridSize };
};

function FormAutoComplete<T>({
  props,
  control,
  name,
  label,
  rules,
  options,
  size
}: FormAutocompleteProp<T>) {
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
            <Autocomplete
              {...props}
              {...field}
              options={options}
              fullWidth
              value={value}
              onChange={(_, data) => {
                onChange(data);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // required={Boolean(rules.required)}
                  label={Boolean(rules.required) ? `${label} *`:label}
                  error={!!error}
                  helperText={error?.message || ""}
                />
              )}
            />
          );
        }}
      />
    </Grid>
  );
}

export default FormAutoComplete;
