import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormCheckbox, FormRadio } from '../../components/FormComponents'

function AddWork() {
  const {control,handleSubmit} = useForm()
const onsubmit = (e:any)=>{
    console.log(e)
}
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
       <FormCheckbox
        control={control}
        name='isCheck'
        label='Check box'
        rules={{required:"Field required",onChange:(value)=>{console.log(value)}}}
       />
       <FormRadio 
        control={control}
        name="gender"
        label='Gender'
        rules={{required:"Required"}}
        radios={[{label:"Male",value:"Male"},{label:"Female",value:"Female"}]}
       />
       <Button type='submit'>submit</Button>
    </form>
  )
}

export default AddWork