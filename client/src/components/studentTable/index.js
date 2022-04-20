import React, { useContext } from "react";
import "../studentTable";
import { TextField, Grid, Box } from "@mui/material";
import NoteContext from "../../RootContext/NoteContext";

export const StudentTable = () => {
  const { loggedInStudent, setLoggedInStudent } = useContext(NoteContext);
 
  return (
    <>
      <Box width="700px" style={{ margin: "auto", marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              type="text"
              fullWidth
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].fname}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              type="text"
              id=""
              label="Date Of Birth"
              fullWidth
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].dob}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Gender"
              type="text"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].gender}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=" City"
              type="text"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].city}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Application Date"
              type="text"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].date}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Branch"
              type="text"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].branch}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Moblie Number"
              type="text"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].number}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Officer"
              type="text"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].officer}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Application Type"
              type="text"
              fullWidth
              name=""
              inputProps={{ readOnly: true }}
              value={loggedInStudent[1].type}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <TextField
            style={{ border: "2px dashes green" }}
            autoFocus
            margin="dense"
            id="name"
            label="Status"
            type="text"
            fullWidth
            name="SelectStatus"
            inputProps={{ readOnly: true }}
            value={loggedInStudent[1].status}
          />
        </Grid>
      </Box>
    </>
  );
};
