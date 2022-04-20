import React, { useEffect, useContext, useState } from "react"
import "./table.scss";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import NoteContext from "../../RootContext/NoteContext";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Loading } from "../../pages/Spinners/Loading";
import { Select, MenuItem, InputLabel, FormControl, Button, TextField, Grid } from '@mui/material';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


const Test = ()=>{

    const { authToken, totalData, totalLahoreData, totalIslamabadData } = useContext(NoteContext);
  const [studentData, setstudentData] = useState([]);
  const [updateStatus, setupdateStatus] = useState("");
  const [ControlLoading, setControlLoading] = useState(true);
  const [addmission, setaddmission] = useState("");
  const [gte, setgte] = useState("");
  const [sop, setsop] = useState("");
  const [visafilling, setvisafilling] = useState("");
  const [visalodgment, setvisalodgment] = useState("");
  const [GetSubmittedData, setGetSubmittedData] = useState("");
  const [nextPage, setNextPage] = useState(0);
  const [TotalPages, setTotalPages] = useState("");
  const [filterofficer, setFilterOfficer] = useState("");

  const [Id, setId] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openAllForm, setAllFormOpen] = React.useState(false);
  useEffect(() => {
    FetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


      const updateOnlyStatus = () => {

      axios.put('https://nexco-crm.herokuapp.com/api/students/' + Id, {
        status: updateStatus,
      }).then((res) => {
        console.log(res.data)
        alert('Student successfully updated');
        setAllFormOpen(false);
        FetchStudents();
      }).catch((error) => {
        console.log(error)
      })
    }

  

  const FetchStudents = () => {
    axios.get(`https://nexco-crm.herokuapp.com/api/students/page?page=${nextPage}`, {
      headers: {
        authorization: authToken
      }
    })
      .then((response) => {
        setTotalPages(response.data.totalPages)
        setControlLoading(false)
        setstudentData(response.data.posts)

      })
  }

  const FetchFilteredStudents = (filter) => {

    axios.get(`https://nexco-crm.herokuapp.com/api/students/filter?branch=${filter}`, {
      headers: {
        authorization: authToken
      }
    })
      .then((response) => {
        setstudentData(response.data.posts)

      })
  }

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id._id);
    setaddmission(id.addmission);
    setgte(id.gte);
    setsop(id.sop);
    setvisafilling(id.visafilling);
    setvisalodgment(id.visalodgment)

  };

  const handleClickOpenForm = (list) => {
    setAllFormOpen(true);
    setGetSubmittedData(list)
    setupdateStatus(list.status)
    setId(list._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseForm = () => {
    setAllFormOpen(false);
  };

  const updatedata = () => {
    axios.put('https://nexco-crm.herokuapp.com/api/students/' + Id, {
      addmission: addmission,
      gte: gte,
      sop: sop,
      visafilling: visafilling,
      visalodgment: visalodgment
    }).then((res) => {
      console.log(res.data)
      alert('Student successfully updated');
      setOpen(false);
      FetchStudents();
    }).catch((error) => {
      console.log(error)
    })
  }

  const handlePreviousButton = () => {
    axios.get(`https://nexco-crm.herokuapp.com/api/students/page?page=${nextPage - 1}`, {
      headers: {
        authorization: authToken
      }
    })
      .then((response) => {
        setControlLoading(false)
        setstudentData(response.data.posts)
      })
    setNextPage(nextPage - 1)
  }
  
  const OfficerFilter = () => {
    alert();
  
    axios.get(`https://nexco-crm.herokuapp.com/api/students/officerfilter?officer=${filterofficer}`, {
      headers: {
        authorization: authToken
      }
    })
      .then((response) => {
  
  
      })
  }



    return (
        <>
         <div>

<Dialog open={openAllForm} onClose={handleCloseForm}>
  {/* <DialogTitle>All Data</DialogTitle> */}
  <DialogContent>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Full Name"
          type="text"
          fullWidth

          value={GetSubmittedData.fname}

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
          name=""
          value={GetSubmittedData.dob}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Selected Gender"
          type="text"
          fullWidth
          name=""
          value={GetSubmittedData.gender}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Selected City"
          type="text"
          fullWidth
          name=""
          value={GetSubmittedData.city}
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
          value={GetSubmittedData.email}
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
          value={GetSubmittedData.date}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Selected Branch"
          type="text"
          fullWidth
          name=""
          value={GetSubmittedData.branch}
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
          value={GetSubmittedData.number}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Selected Officer"
          type="text"
          fullWidth
          name=""
          value={GetSubmittedData.officer}
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
          value={GetSubmittedData.type}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Application Launched"
          type="text"
          fullWidth
          name=""
          value={GetSubmittedData.buy}
        />

      </Grid>
    </Grid>

    <Grid item xs={12}>
      <FormControl sx={{ my: 2, minWidth: 545 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Status</InputLabel>
        <Select
          style={{ border: "2px solid green" }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={updateStatus}
          onChange={(e) => setupdateStatus(e.target.value)}
          label="Addmission"
        >

          <MenuItem value={"Application Submitted"}>Application Submitted</MenuItem>
          <MenuItem value={"Assessing"}>Assessing</MenuItem>
          <MenuItem value={"Condional Offer Letter"}>Condional Offer Letter</MenuItem>
          <MenuItem value={"Gte Requirements"}>Gte Requirements</MenuItem>
          <MenuItem value={"Full Offer Letter"}>Full Offer Letter</MenuItem>
          <MenuItem value={"Fee Payment Proof"}>Fee Payment Proof</MenuItem>
          <MenuItem value={"CoE Issued"}>CoE Issued</MenuItem>
        </Select>
      </FormControl>
      {/* <TextField
        style={{border:"2px dashes green"}}
          autoFocus
          margin="dense"
          id="name"
          label="Status"
          type="text"
          fullWidth
          name="SelectStatus"
          value={updateStatus}
          onChange={(e) => setupdateStatus(e.target.value)}
        /> */}
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button variant="outlined" onClick={updateOnlyStatus} >Update</Button>

  </DialogActions>
</Dialog>

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Update Data</DialogTitle>
  <DialogContent>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Addmission</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={addmission}
            onChange={(e) => setaddmission(e.target.value)}
            autoWidth
            label="Addmission"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Ummara Afzal"}>Ummara Afzal</MenuItem>
            <MenuItem value={"Khadija Butt"}>Khadija Butt</MenuItem>
            <MenuItem value={"Ume Laila"}>Ume Laila</MenuItem>
            <MenuItem value={"Haris Nadeem"}>Haris Nadeem</MenuItem>
            <MenuItem value={"Naila Mehboob"}>Naila Mehboob</MenuItem>
            <MenuItem value={"Hira Fatima"}>Hira Fatima</MenuItem>
            <MenuItem value={"Mehreen Fatima"}>Mehreen Fatima</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-autowidth-label">SOP</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={sop}
            onChange={(e) => setsop(e.target.value)}
            autoWidth
            label="Sop"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Ummara Afzal"}>Ummara Afzal</MenuItem>
            <MenuItem value={"Khadija Butt"}>Khadija Butt</MenuItem>
            <MenuItem value={"Ume Laila"}>Ume Laila</MenuItem>
            <MenuItem value={"Haris Nadeem"}>Haris Nadeem</MenuItem>
            <MenuItem value={"Naila Mehboob"}>Naila Mehboob</MenuItem>
            <MenuItem value={"Hira Fatima"}>Hira Fatima</MenuItem>
            <MenuItem value={"Mehreen Fatima"}>Mehreen Fatima</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-autowidth-label">GTE</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={gte}
            onChange={(e) => setgte(e.target.value)}
            autoWidth
            label="GTE"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Ummara Afzal"}>Ummara Afzal</MenuItem>
            <MenuItem value={"Khadija Butt"}>Khadija Butt</MenuItem>
            <MenuItem value={"Ume Laila"}>Ume Laila</MenuItem>
            <MenuItem value={"Haris Nadeem"}>Haris Nadeem</MenuItem>
            <MenuItem value={"Naila Mehboob"}>Naila Mehboob</MenuItem>
            <MenuItem value={"Hira Fatima"}>Hira Fatima</MenuItem>
            <MenuItem value={"Mehreen Fatima"}>Mehreen Fatima</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Visa Filing</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={visafilling}
            onChange={(e) => setvisafilling(e.target.value)}
            autoWidth
            label="Visa Filing"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Ummara Afzal"}>Ummara Afzal</MenuItem>
            <MenuItem value={"Khadija Butt"}>Khadija Butt</MenuItem>
            <MenuItem value={"Ume Laila"}>Ume Laila</MenuItem>
            <MenuItem value={"Haris Nadeem"}>Haris Nadeem</MenuItem>
            <MenuItem value={"Naila Mehboob"}>Naila Mehboob</MenuItem>
            <MenuItem value={"Hira Fatima"}>Hira Fatima</MenuItem>
            <MenuItem value={"Mehreen Fatima"}>Mehreen Fatima</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ m: 1, minWidth: 535 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Visa Lodgment</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={visalodgment}
            onChange={(e) => setvisalodgment(e.target.value)}
            autoWidth
            label="Visa Lodgment"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Ummara Afzal"}>Ummara Afzal</MenuItem>
            <MenuItem value={"Khadija Butt"}>Khadija Butt</MenuItem>
            <MenuItem value={"Ume Laila"}>Ume Laila</MenuItem>
            <MenuItem value={"Haris Nadeem"}>Haris Nadeem</MenuItem>
            <MenuItem value={"Naila Mehboob"}>Naila Mehboob</MenuItem>
            <MenuItem value={"Hira Fatima"}>Hira Fatima</MenuItem>
            <MenuItem value={"Mehreen Fatima"}>Mehreen Fatima</MenuItem>
          </Select>
        </FormControl>
      </Grid>


    </Grid>

  </DialogContent>
  <DialogActions>
    <Button variant="outlined" onClick={updatedata} >Update</Button>

  </DialogActions>
</Dialog>
</div>

<div className="widgets" >
<div className="widget" onClick={FetchStudents}>
  <div className="left">
    <span className="title" >TOTAL APPLICATION</span>
    <span className="counter">
      {totalData}
    </span>
    {/* <span className="link">{data.link}</span> */}
  </div>
  <div className="right">
    <div className="percentage positive">
      <KeyboardArrowUpIcon />
    </div>
    <PersonOutlinedIcon
      className="icon"
      style={{
        color: "crimson",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
      }}
    />
  </div>
</div>
<div className="widget" onClick={() => FetchFilteredStudents("Lahore")}>
  <div className="left">
    <span className="title" >LAHORE</span>
    <span className="counter">
      {totalLahoreData}
    </span>
    {/* <span className="link">{data.link}</span> */}
  </div>
  <div className="right">
    <div className="percentage positive">
      <KeyboardArrowUpIcon />
    </div>
    <ShoppingCartOutlinedIcon
      className="icon"
      style={{
        backgroundColor: "rgba(218, 165, 32, 0.2)",
        color: "goldenrod",
      }}
    />
  </div>
</div>
<div className="widget" onClick={() => FetchFilteredStudents("Islamabad")}>
  <div className="left">
    <span className="title" >ISLAMABAD</span>
    <span className="counter">
      {totalIslamabadData}
    </span>
    {/* <span className="link">{data.link}</span> */}
  </div>
  <div className="right">
    <div className="percentage positive">
      <KeyboardArrowUpIcon />
    </div>
    <MonetizationOnOutlinedIcon
      className="icon"
      style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
    />
  </div>
</div>
<div className="widget" onClick={() => FetchFilteredStudents("Gujarat")}>
  <div className="left">
    <span className="title" >GUJARAT</span>
    <span className="counter">
      0
    </span>
    {/* <span className="link">{data.link}</span> */}
  </div>
  <div className="right">
    <div className="percentage positive">
      <KeyboardArrowUpIcon />
    </div>
    <AccountBalanceWalletOutlinedIcon
      className="icon"
      style={{
        backgroundColor: "rgba(128, 0, 128, 0.2)",
        color: "purple",
      }}
    />
  </div>
</div>

</div>
<div className="listContainer">
<div className="listTitle">Latest Applications</div>
<TableContainer component={Paper} className="table">
  {ControlLoading && <Loading />}

  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className="tableCell">Name</TableCell>

        <TableCell className="tableCell">Date</TableCell>
        <TableCell className="tableCell">Citizenship</TableCell>
        <TableCell className="tableCell">Number</TableCell>
        <TableCell className="tableCell">Branch</TableCell>
        <TableCell className="tableCell">Officer
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filterofficer}
            onChange={(e) => setFilterOfficer(e.target.value)}
            onClick={OfficerFilter}
            style={{ width: "30px", overflow: "hidden" }}
            label="Sop"
          >
            <MenuItem value={"Ummara Afzal"}>Ummara Afzal</MenuItem>
            <MenuItem value={"Khadija Butt"}>Khadija Butt</MenuItem>
            <MenuItem value={"Ume Laila"}>Ume Laila</MenuItem>
            <MenuItem value={"Haris Nadeem"}>Haris Nadeem</MenuItem>
            <MenuItem value={"Naila Mehboob"}>Naila Mehboob</MenuItem>
            <MenuItem value={"Hira Fatima"}>Hira Fatima</MenuItem>
            <MenuItem value={"Mehreen Fatima"}>Mehreen Fatima</MenuItem>
          </Select>
        </TableCell>



        <TableCell className="tableCell">Application Type</TableCell>
        <TableCell className="tableCell">Application Buy</TableCell>
        <TableCell className="tableCell">Status</TableCell>
        <TableCell className="tableCell">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>

      {studentData.map((list) => {
        return (

          <TableRow key={list.id}>
            <TableCell className="tableCell">{list.fname}</TableCell>


            <TableCell className="tableCell">{list.date}</TableCell>
            <TableCell className="tableCell">{list.city}</TableCell>
            <TableCell className="tableCell">{list.number}</TableCell>

            <TableCell className="tableCell">{list.branch}</TableCell>
            <TableCell className="tableCell">{list.officer}</TableCell>
            <TableCell className="tableCell">{list.type}</TableCell>

            <TableCell className="tableCell">{list.buy}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${list.status}`}>{list.status}</span>
            </TableCell>
            <TableCell className="tableCell"><EditIcon
              variant="outlined" onClick={() => { handleClickOpen(list) }}
              className="icon"
              style={{
                color: "#121212",
              }}
            />
            </TableCell>
            <TableCell className="tableCell"><RemoveRedEyeIcon
              variant="outlined"
              onClick={() => { handleClickOpenForm(list) }}
              className="icon"
              style={{
                color: "#121212",
              }}
            />
            </TableCell>
          </TableRow>
        )
      })}


    </TableBody>
  </Table>
</TableContainer>
<div class="d-flex justify-content-between">
  <button className="btn text-white" disabled={nextPage <= 0} style={{ background: "#7f3762", }} onClick={handlePreviousButton}>Previous</button>
  <button className="btn text-white" disabled={nextPage >= TotalPages} style={{ background: "#7f3762", }} onClick={handleNextButton}>Next</button>
</div>

</div>
        
        
        </>
    )
}

export default Test;