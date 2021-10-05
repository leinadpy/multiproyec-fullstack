import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function SizePaginationGrid() {
  const [pageSize, setPageSize] = React.useState(5);

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "Material-UI", col2: "is Amazing" },
    { id: 4, col1: "Material-UI", col2: "is Amazing" },
    { id: 5, col1: "Material-UI", col2: "is Amazing" },
    { id: 6, col1: "Material-UI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
}
