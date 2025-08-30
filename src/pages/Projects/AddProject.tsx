import { Button, Grid, Stack, Typography, Divider, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  FileDropZone,
  FormAutoComplete,
  FormDatePicker,
  FormText,
} from "../../components/FormComponents";
import useAddWorkHook from "./useAddWorkhook";
import { useEffect, useState } from "react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const gridSpace = { md: 4, sm: 12 };
function AddProject() {
  const { control, handleSubmit, reset, getValues } = useForm();
  const onsubmit = (e: any) => {
    console.log(e);
  };

  const [files, setFile] = useState<File[]>([]);

  const {
    category,
    client,
    department,
    integrityEngineer,
    country,
    state,
    city,
  } = useAddWorkHook();
  const handleCountryChange = (e: any) => {
    reset({
      ...getValues(),
      state: null,
      city: null,
    });
    state.mutate(e.target.value.country);
  };
  const handleStateChange = (e: any) => {
    reset({
      ...getValues(),
      city: null,
    });
    city.mutate({
      country: getValues("country")?.country || "",
      state: String(e.target.value.name),
    });
  };
  useEffect(() => {
    console.log(state.data);
  }, [state.data]);
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography variant="body2" fontWeight={600}>Add project</Typography>
        <IconButton>
          <FormatListBulletedIcon/>
        </IconButton>
      </Stack>
      <Divider sx={{ my: 2 }} />
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
            options={category.data?.response || []}
            props={{
              getOptionLabel: (option) => option.name,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="department"
            label={"Department"}
            rules={{ required: "Department required" }}
            options={department.data?.response || []}
            props={{
              getOptionLabel: (option) => option.name,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="clinet"
            label={"Client"}
            rules={{ required: "Client required" }}
            options={client.data?.response || []}
            props={{
              getOptionLabel: (option) => option.name,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="integrityEngineer"
            label={"Integrity Engineer"}
            rules={{ required: "Integrity Engineer required" }}
            options={integrityEngineer?.data?.response || []}
            props={{
              getOptionLabel: (option) => option.name,
            }}
          />
          <FormText
            size={gridSpace}
            control={control}
            name="projectBudget"
            label="Project budget"
            rules={{ required: false }}
            props={{type:"number"}}
          />
          <FormText
            size={gridSpace}
            control={control}
            name="estimatedHours"
            label="Estimated hours"
            rules={{ required: false }}
            props={{type:"number"}}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="country"
            label={"Country"}
            rules={{
              required: "Country required",
              onChange: handleCountryChange,
            }}
            options={country?.data || []}
            loading={country.isLoading}
            props={{
              getOptionLabel: (option) => option.country,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="state"
            label={"State"}
            rules={{ required: false, onChange: handleStateChange }}
            options={state?.data?.response || []}
            props={{
              getOptionLabel: (option) => option.name,
            }}
          />
          <FormAutoComplete
            size={gridSpace}
            control={control}
            name="city"
            label={"City"}
            rules={{ required: false }}
            options={city?.data?.response || []}
            props={{
              getOptionLabel: (option) => option,
            }}
          />
          <FormText
            size={{ md: 6, sm: 12 }}
            control={control}
            name="projectSummary"
            label="Project summary"
            rules={{ required: false }}
            props={{ multiline: true, rows: 4 }}
          />
          <FormText
            size={{ md: 6, sm: 12 }}
            control={control}
            name="projectNote"
            label="Project note"
            rules={{ required: false }}
            props={{ multiline: true, rows: 4 }}
          />
          <Grid size={12} gap={2}>
            <FormAutoComplete
              control={control}
              name="technicians"
              label={"Select technicians"}
              rules={{ required: false }}
              options={categories}
              props={{
                multiple: true,
                getOptionLabel: (option) => option.category,
              }}
            />
          </Grid>
          <FileDropZone files={files} setFiles={setFile} />
        </Grid>
        <Stack
          direction="row"
          justifyContent="end"
          alignItems={"center"}
          pt={2}
        >
          <Button color="success" size="small" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default AddProject;
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
