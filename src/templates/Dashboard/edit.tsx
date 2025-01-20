"use client";

import * as React from "react";
import {
  DataGrid,
  GridRowModel,
  GridColDef,
  GridRowId,
  GridRowsProp,
} from "@mui/x-data-grid";

import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Alert, { AlertProps } from "@mui/material/Alert";
import { Loading } from "@/components/Loading";
import { useUserProducts } from "@/hooks/products";

interface User {
  name: string;
  age: number;
  id: GridRowId;
  dateCreated: Date;
  lastLogin: Date;
}

const useFakeMutation = () => {
  return React.useCallback(
    (user: Partial<User>) =>
      new Promise<Partial<User>>((resolve, reject) => {
        setTimeout(() => {
          if (user.name?.trim() === "") {
            reject();
          } else {
            resolve(user);
          }
        }, 200);
      }),
    []
  );
};

function computeMutation(newRow: GridRowModel, oldRow: GridRowModel) {
  if (newRow.name !== oldRow.name) {
    return `Name from '${oldRow.name}' to '${newRow.name}'`;
  }
  if (newRow.age !== oldRow.age) {
    return `Age from '${oldRow.age || ""}' to '${newRow.age || ""}'`;
  }
  return null;
}

export default function AskConfirmationBeforeSave() {
  const mutateRow = useFakeMutation();
  const noButtonRef = React.useRef<HTMLButtonElement>(null);
  const [promiseArguments, setPromiseArguments] = React.useState<any>(null);

  const [snackbar, setSnackbar] = React.useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = React.useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) =>
      new Promise<GridRowModel>((resolve, reject) => {
        const mutation = computeMutation(newRow, oldRow);
        if (mutation) {
          // Save the arguments to resolve or reject the promise later
          setPromiseArguments({ resolve, reject, newRow, oldRow });
        } else {
          resolve(oldRow); // Nothing was changed
        }
      }),
    []
  );

  const handleNo = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow); // Resolve with the old row to not update the internal state
    setPromiseArguments(null);
  };

  const handleYes = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

    try {
      // Make the HTTP request to save in the backend
      const response = await mutateRow(newRow);
      setSnackbar({ children: "User successfully saved", severity: "success" });
      resolve(response);
      setPromiseArguments(null);
    } catch (error) {
      setSnackbar({ children: "Name cannot be empty", severity: "error" });
      reject(oldRow);
      setPromiseArguments(null);
    }
  };

  const handleEntered = () => {
    // The `autoFocus` is not used because, if used, the same Enter that saves
    // the cell triggers "No". Instead, we manually focus the "No" button once
    // the dialog is fully open.
    // noButtonRef.current?.focus();
  };

  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }

    const { newRow, oldRow } = promiseArguments;
    const mutation = computeMutation(newRow, oldRow);

    return (
      <Dialog
        maxWidth="xs"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!promiseArguments}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent dividers>
          {`Pressing 'Yes' will change ${mutation}.`}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} onClick={handleNo}>
            No
          </Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const { error, isLoading, products } = useUserProducts();

  const mappedRows: GridRowsProp = React.useMemo(() => {
    if (Array.isArray(products) && products?.length) {
      return products?.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        createdAt: new Date(product.createdAt),
        updatedAt: new Date(product.updatedAt),
        productImage: product.image,
      }));
    }
    return [];
  }, [products]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <p className="text-red-500">Somenthing went wrong</p>
      </div>
    );
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      {renderConfirmDialog()}
      <DataGrid
        rows={mappedRows}
        columns={columns}
        processRowUpdate={processRowUpdate}
      />
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  );
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 180, editable: false },
  {
    field: "productImage",
    headerName: "Image",
    width: 180,
    editable: true,
    renderCell: (params) => {
      return (
        <div className="flex flex-col justify-center justify-items-center  w-full h-full">
          <div className="flex h-8 place-items-center   w-8 ">
            <img
              className="w-full h-full object-cover "
              src={params.row.productImage}
              alt={params.row.name}
            />
          </div>
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    editable: true,
    maxWidth: 320,
    minWidth: 180,
  },
  { field: "price", headerName: "Price", type: "number", editable: true },
  {
    field: "createdAt",
    headerName: "Date Created",
    type: "date",

    editable: false,
  },
  {
    field: "updatedAt",
    headerName: "Edited At",
    type: "date",

    editable: false,
  },
];
