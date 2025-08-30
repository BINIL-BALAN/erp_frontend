import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  type GridSize,
  type RadioGroupProps,
} from "@mui/material";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";
type FormRadioProp = {
  props?: RadioGroupProps;
  control: Control<any>;
  label: string;
  name: string;
  rules: RegisterOptions;
  radios: { label: string; value: string | number | null | undefined }[];
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
function FormRadio({
  props,
  control,
  name,
  label,
  rules,
  radios,
  size,
}: FormRadioProp) {
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
            <FormControl
              // required={Boolean(rules.required)}
              error={!!error}
            >
              <FormLabel id={`idof${name}`}>{label}</FormLabel>
              <RadioGroup
                {...(props ?? {})}
                {...field}
                aria-labelledby={`idof${name}`}
                name={name}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
              >
                {radios.map((radio) => (
                  <FormControlLabel
                    key={`${radio.label}${radio.value}`}
                    value={radio.value}
                    control={<Radio size="small" />}
                    label={radio.label}
                  />
                ))}
              </RadioGroup>
              <FormHelperText>{error?.message || ""}</FormHelperText>
            </FormControl>
          );
        }}
      />
    </Grid>
  );
}

export default FormRadio;
