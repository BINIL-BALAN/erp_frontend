import {
  TableContainer,
} from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
const paginationModel = { page: 0, pageSize: 5 };

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex:1},
  { field: "firstName", headerName: "First name",flex:1 },
  { field: "lastName", headerName: "Last name", flex:1},
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex:1
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function ListWork() {
  return (
    <TableContainer sx={{width:"100%",display:"flex"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: .5}}
        disableColumnResize
      />
    </TableContainer>
  );
}

export default ListWork;
