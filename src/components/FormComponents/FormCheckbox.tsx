import { Checkbox,FormControlLabel,type RadioGroupProps, } from "@mui/material"
import { Controller,type Control } from "react-hook-form"
type FormCheckboxProp = {
   props:RadioGroupProps,
   control:Control,
   label:string,
   name:string
}
function FormCheckbox({props,control,name,label}:FormCheckboxProp) {
  return (
    <Controller
    name={name}
    control={control}
      render={({
        field: { ref, onChange, value = null, ...field },
        fieldState: { error },
      })=>{
         return     <FormControlLabel
              sx={{ width: "fit-content" }}
              {...props}
              label={label}
              control={
                <Checkbox
                  onChange={e=>{onChange(e)}}
                  checked={value || false}
                  {...props}
                  {...field}
                />
              }
            />
      }}
    />
  )
}

export default FormCheckbox
