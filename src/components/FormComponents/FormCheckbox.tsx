import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  type CheckboxProps,
} from "@mui/material";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";
type FormCheckboxProp = {
  props?: CheckboxProps;
  control: Control;
  label: string;
  name: string;
  rules: RegisterOptions;
};
function FormCheckbox({
  props,
  control,
  name,
  label,
  rules,

}: FormCheckboxProp) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { ref, onChange,value = null, ...field },
        fieldState: { error },
      }) => {
        return (
          <FormControl
            required={Boolean(rules.required)}
            error={!!error}
          >
            <FormControlLabel
              sx={{ width: "fit-content" }}
              label={Boolean(rules.required) ? `${label} *`:label}
              control={
                  <Checkbox
                    {...props}
                    {...field}
                    name={name}
                    size="small"
                    checked={Boolean(value)}
                    onChange={(e) => {
                      onChange(e.target.checked);
                    }}
                  />
              }
              />
              <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
}

export default FormCheckbox;
