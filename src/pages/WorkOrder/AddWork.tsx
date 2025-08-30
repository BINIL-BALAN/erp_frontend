import { Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  FormAutoComplete,
  FormCheckbox,
  FormRadio,
  FormSelect,
  FormText,
} from "../../components/FormComponents";

function AddWork() {
  const { control, handleSubmit } = useForm();
  const onsubmit = (e: any) => {
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Grid direction={"row"} container spacing={0}>
          <FormCheckbox
            size={{md:2,lg:2}}
            control={control}
            name="isCheck"
            label="Check box"
            rules={{
              required: "Field required",
              onChange: (value) => {
                console.log(value);
              },
            }}
          />
          <FormRadio
           size={{md:2,lg:3}}
            control={control}
            name="gender"
            label="Gender"
            rules={{ required: "Required" }}
            props={{row:true}}
            radios={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
          />
        <FormText
        size={{md:2,lg:3}}
          control={control}
          label="User name"
          name="username"
          rules={{ required: "User name required" }}
        />

        <FormAutoComplete
          control={control}
          label="Select"
          name="movie"
          options={["A", "B"]}
          rules={{ required: "Required" }}
        />
        <FormSelect
          control={control}
          name="testselect"
          label="Select"
          options={["D1", "D2"]}
          rules={{ required: "Required" }}
        />
        <Button type="submit">submit</Button>
      </Grid>
    </form>
  );
}

export default AddWork;
