import { Button, Grid, Box,Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  FormAutoComplete,
  FormDatePicker,
  FormText,
} from "../../components/FormComponents";
const gridSpace = { md: 4, sm: 1 };
function AddWork() {
  const { control, handleSubmit } = useForm();
  const onsubmit = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <Box sx={{ justifyContent: "space-between" }}>
        <Typography>Add Project</Typography>
        <Button color="success" size="small" variant="contained">
          Add
        </Button>
      </Box>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Grid spacing={2} container sx={{ flex: 1 }}>
          <FormText
            size={gridSpace}
            control={control}
            name="projectName"
            label="Project name"
            rules={{ required: "Project name required" }}
          />
          <FormDatePicker
            size={gridSpace}
            control={control}
            name="startDate"
            label="Start date"
            rules={{ required: "Start date required" }}
          />
          <FormDatePicker
            size={gridSpace}
            control={control}
            name="endDate"
            label="End date"
            rules={{ required: "End date required" }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="projectCategory"
            label={"Project category"}
            rules={{ required: "Project category required" }}
            options={categories}
            props={{
              getOptionLabel: (option) => option.category,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="projectCategory"
            label={"Project category"}
            rules={{ required: "Department required" }}
            options={categories}
            props={{
              getOptionLabel: (option) => option.category,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="clinet"
            label={"Client"}
            rules={{ required: "Client required" }}
            options={categories}
            props={{
              getOptionLabel: (option) => option.category,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="integrityEngineer"
            label={"Integrity Engineer"}
            rules={{ required: "Integrity Engineer required" }}
            options={categories}
            props={{
              getOptionLabel: (option) => option.category,
            }}
          />
    
        </Grid>
      </form>
    </>
  );
}

export default AddWork;
const categories = [
  {
    id: 1,
    category: "Inspection",
  },
  {
    id: 2,
    category: "Quality control",
  },
  {
    id: 3,
    category: "Risk based inspection",
  },
];
