import React, { useContext } from "react";
import * as Yup from "yup";
import SelectCity from "./SelectCity";
import { useFormik } from "formik";
import { Link as RouterLink, useHistory } from "react-router-dom";
import axios from "axios";
import NoteContext from "../../RootContext/NoteContext";
import SelectBranch from "./SelectBranch";
import SelectGender from "./SelectGender";
import SelectOfficer from "./SelectOfficer";
import SelectStatus from "./SelectStatus";
import "./Applicantfrom.css";
import SelectType from "./SelectType";
import ApplicationBuy from "./ApplicationBuy";

export const ApplicantForms = () => {
  const { authToken, setAuthToken } = useContext(NoteContext);
  const history = useHistory();

  const LoginSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    dob: Yup.string().required("Date Of Birth is required"),
    SelectCity: Yup.string().required("City is required"),
    date: Yup.string().required("Date is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    number: Yup.number().required("Number is required"),
    SelectBranch: Yup.string().required("Branch is required"),
    SelectGender: Yup.string().required("Gender is required"),
    SelectOfficer: Yup.string().required("Officer is required"),
    SelectStatus: Yup.string().required("Status is required"),
    applicationtype: Yup.string().required("Application Type is required"),
    applicationbuy: Yup.string().required("Application Buy is required"),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      dob: "",
      date: "",
      email: "",
      number: "",
      SelectCity: "",
      SelectBranch: "",
      SelectOfficer: "",
      SelectGender: "",
      SelectStatus: "",
      applicationtype: "",
      applicationbuy: "",
      addmission: "",
      gte: "",
      sop: "",
      visafilling: "",
      visalodgment: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      axios
        .post(
          "https://nexco-crm.herokuapp.com/api/students",
          {
            fname: values.fname,
            dob: values.dob,
            date: values.date,
            email: values.email,
            number: values.number,
            city: values.SelectCity,
            branch: values.SelectBranch,
            officer: values.SelectOfficer,
            gender: values.SelectGender,
            status: values.SelectStatus,
            type: values.applicationtype,
            addmission: values.addmission,
            gte: values.gte,
            sop: values.sop,
            visafilling: values.visafilling,
            visalodgment: values.visalodgment,
          },
          {
            headers: {
              authorization: authToken,
            },
          }
        )
        .then((response) => {
          if (response.status === 422 || !response) {
            alert("please fill correct data ");
          } else {
            alert("Successfully Registration");
            history.push("/insitutes");
          }
        });
    },
  });

  const optionsBranch = [
    { value: "Sydney", label: "Sydney" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Melbourne", label: "Melbourne" },
    { value: "Tasmania", label: "Tasmania" },
    { value: "Lahore", label: "Lahore" },
    { value: "India", label: "India" },
    { value: "Multan", label: "Multan" },
    { value: "Srilanka", label: "Srilanka" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Faiselabad", label: "Faiselabad" },
  ];

  const optionsGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    {
      value: "  Indeterminate/Unspecified/Intersex",
      label: "  Indeterminate/Unspecified/Intersex",
    },
  ];

  const optionsCity = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Åland Islands", label: "Åland Islands" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "American Samoa", label: "American Samoa" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Anguilla", label: "Anguilla" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    {
      value: "Bonaire, Sint Eustatius and Saba",
      label: "Bonaire, Sint Eustatius and Saba",
    },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Bouvet Island", label: "Bouvet Island" },
    { value: "Brazil", label: "Brazil" },
    {
      value: "British Indian Ocean Territory",
      label: "British Indian Ocean Territory",
    },

    { value: "Brunei Darussalam", label: "Brunei Darussalam" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cabo Verde", label: "Cabo Verde" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Cayman Islands", label: "Cayman Islands" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Christmas Island", label: "Christmas Island" },
    { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo", label: "Congo" },
    {
      value: "Congo (the Democratic Republic of the)",
      label: "Congo (the Democratic Republic of the)",
    },

    { value: "Cook Islands", label: "Cook Islands" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Côte d'Ivoire", label: "Côte d'Ivoire" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Curaçao", label: "Curaçao" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czechia", label: "Czechia" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Eswatini", label: "Eswatini" },
    { value: "Ethiopia", label: "Ethiopia" },
    {
      value: "Falkland Islands (the) [Malvinas]",
      label: "Falkland Islands (the) [Malvinas]",
    },

    { value: "Faroe Islands", label: "Faroe Islands" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "French Guiana", label: "French Guiana" },
    { value: "French Polynesia", label: "French Polynesia" },
    {
      value: "French Southern Territories",
      label: "French Southern Territories",
    },

    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Gibraltar", label: "Gibraltar" },
    { value: "Greece", label: "Greece" },
    { value: "Greenland", label: "Greenland" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guadeloupe", label: "Guadeloupe" },
    { value: "Guam", label: "Guam" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guernsey", label: "Guernsey" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    {
      value: "Heard Island and McDonald Islands",
      label: "Heard Island and McDonald Islands",
    },

    { value: "Holy See", label: "Holy See" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Isle of Man", label: "Isle of Man" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jersey", label: "Jersey" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    { value: "Korea (the Democratic)", label: "Korea (the Democratic)" },

    { value: "Korea", label: "Korea" },
    { value: "KOSOVO", label: "KOSOVO" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Lao People's Democratic", label: "Lao People's Democratic" },

    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libya", label: "Libya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Macao", label: "Macao" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Marshall Islands", label: "Marshall Islands" },
    { value: "Martinique", label: "Martinique" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Mayotte", label: "Mayotte" },
    { value: "Mexico", label: "Mexico" },
    { value: "Micronesia", label: "Micronesia" },
    { value: "Moldova", label: "Moldova" },
    { value: "Monaco", label: "Monaco" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Montserrat", label: "Montserrat" },
    { value: "Morocco", label: "Morocco" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Myanmar", label: "Myanmar" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Caledonia", label: "New Caledonia" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Niger", label: "Niger" },
    { value: "Niue", label: "Niue" },
    { value: "Norfolk Island", label: "Norfolk Island" },
    { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
    { value: "North Macedonia", label: "North Macedonia" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palau", label: "Palau" },
    { value: "Palestine", label: "Palestine" },
    { value: "Panama", label: "Panama" },
    { value: "Papua New Guinea", label: "Papua New Guinea" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Peru", label: "Peru" },
    { value: "Philippines", label: "Philippines" },
    { value: "Pitcairn", label: "Pitcairn" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Puerto Rico", label: "Puerto Rico" },
    { value: "Qatar", label: "Qatar" },
    { value: "Réunion", label: "Réunion" },
    { value: "Romania", label: "Romania" },
    { value: "Russian Federation", label: "Russian Federation" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Saint Barthélemy", label: "Saint Barthélemy" },
    {
      value: "Saint Helena, Ascension and Tristan da Cunha",
      label: "Saint Helena, Ascension and Tristan da Cunha",
    },

    { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    {
      value: "Saint Martin (French part)",
      label: "Saint Martin (French part)",
    },
    { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
    {
      value: "Saint Vincent and the Grenadines",
      label: "Saint Vincent and the Grenadines",
    },
    { value: "Samoa", label: "Samoa" },
    { value: "San Marino", label: "San Marino" },
    { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "Singapore", label: "Singapore" },
    { value: "Sint Maarten (Dutch part)", label: "Sint Maarten (Dutch part)" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "Somalia", label: "Somalia" },
    { value: "South Africa", label: "South Africa" },
    {
      value: "South Georgia and the South Sandwich Islands",
      label: "South Georgia and the South Sandwich Islands",
    },

    { value: "South Sudan", label: "South Sudan" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sudan", label: "Sudan" },
    { value: "Suriname", label: "Suriname" },
    { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syrian Arab", label: "Syrian Arab" },
    {
      value: "Taiwan (Province of China)",
      label: "Taiwan (Province of China)",
    },
    { value: "Tajikistan", label: "Tajikistan" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Thailand", label: "Thailand" },
    { value: "Timor-Leste", label: "Timor-Leste" },
    { value: "Togo", label: "Togo" },
    { value: "Tokelau", label: "Tokelau" },
    { value: "Tonga", label: "Tonga" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Uganda", label: "Uganda" },
    {
      value: "UK British - National (Overseas)",
      label: "UK British - National (Overseas)",
    },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    {
      value: "United Kingdom of Great Britain and Northern Ireland",
      label: "United Kingdom of Great Britain and Northern Ireland",
    },

    {
      value: "United States Minor Outlying Islands",
      label: "United States Minor Outlying Islands",
    },

    { value: "United States of America", label: "United States of America" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Venezuela", label: "Venezuela" },

    { value: "Viet Nam", label: "Viet Nam" },
    { value: "Virgin Islands (British)", label: "Virgin Islands (British)" },
    { value: "Virgin Islands (U.S.)", label: "Virgin Islands (U.S.)" },
    { value: "Wallis and Futuna", label: "Wallis and Futuna" },
    { value: "Western Sahara*", label: "Western Sahara*" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" },
  ];

  const optionsOfficer = [
    { value: "Ume Laila", label: "Ume Laila" },
    { value: "Ummara Afzal", label: "Ummara Afzal" },
    { value: "Khadija Butt", label: "Khadija Butt" },
    { value: "Haris Nadeem", label: "Haris Nadeem" },
    { value: "Fahad Manzoor", label: "Fahad Manzoor" },
  ];

  const optionsStatus = [
    { value: "Application Submitted", label: "Application Submitted" },
    { value: "Assessing", label: "Assessing" },
    { value: "Condional Offer Letter", label: "Condional Offer Letter" },
    { value: "Gte Requirements", label: "Gte Requirements" },
    { value: "Full Offer Letter", label: "Full Offer Letter" },
    { value: "Fee Payment Proof", label: "Fee Payment Proof" },
    { value: "CoE Issued", label: "CoE Issued" },
  ];
  const optionsType = [
    { value: "Student Visa", label: "Student Visa" },
    { value: " Immigration ", label: "Immigration" },
    { value: "Spouse Visa", label: "Spouse Visa" },
    { value: "Temporary Work Activity", label: "Temporary Work Activity" },
    { value: "2nd Passport", label: "2nd Passport" },
    { value: "Visa Application", label: "Visa Application" },
    { value: "Visa Lodgement", label: "Visa Lodgement" },
    {
      value: "Biometrics/Medical Requirement",
      label: "Biometrics/Medical Requirement",
    },
    { value: "Further Assessment", label: "Further Assessment" },
  ];

  const optionsbuy = [
    { value: "Nexco", label: "Nexco" },
    { value: " Sub-agents ", label: "Sub-agents " },
    { value: " Sub-agents 2 ", label: "Sub-agents 2 " },
    { value: " Sub-agents 3", label: "Sub-agents 3" },
  ];

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = 
    formik;

  return (
    <div
      className="card"
      style={{ width: "650px", margin: "auto", marginTop: "20px" }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h5 className="headingBg text-white p-2 mb-2 card-title ">
          Enter Applicant Details
        </h5>
        <div className="row paddingform">
          <div className="col-md-12">
            <div className="row g-3">
              <div className="col">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="First name"
                  name="fname"
                  value={formik.values.fname}
                  onChange={formik.handleChange}
                />

                {formik.errors.fname && (
                  <p className="handleerror">{formik.errors.fname}</p>
                )}
              </div>
              <div className="col">
                <label>Date Of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                />
                {formik.errors.dob && (
                  <p className="handleerror">{formik.errors.dob}</p>
                )}

                {/* <input
                  type="hidden"
                  className="form-control"
                  placeholder="Last name"
                  name="lname"
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row paddingform">
          <div className="col-md-12">
            <div className="row g-3">
              <div className="col">
                <label>Select Gender</label>
                <SelectGender
                  className="input"
                  onChange={(value) =>
                    formik.setFieldValue("SelectGender", value.value)
                  }
                  value={formik.values.SelectGender}
                  options={optionsGender}
                />
                {formik.errors.SelectGender && (
                  <p className="handleerror">{formik.errors.SelectGender}</p>
                )}
              </div>
              <div className="col">
                <label>Select Citizenship</label>
                <SelectCity
                  className="input"
                  onChange={(value) =>
                    formik.setFieldValue("SelectCity", value.value)
                  }
                  value={formik.values.SelectCity}
                  options={optionsCity}
                />
                {formik.errors.SelectCity && (
                  <p className="handleerror">{formik.errors.SelectCity}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row paddingform">
          <div className="col-md-12">
            <div className="row g-3">
              <div className="col">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="handleerror">{formik.errors.email}</p>
                )}
              </div>
              <div className="col">
                <label>Application Date</label>
                <input
                  type="date"
                  className="form-control"
                  aria-label=""
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.errors.date && (
                  <p className="handleerror">{formik.errors.date}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <h5 className="headingBg text-white p-2 mt-3  card-title ">
          Enter Contact Details
        </h5>
        <div className="row paddingform">
          <div className="col-md-12">
            <div className="row g-3">
              <div className="col">
                <label>Select Branch</label>
                <SelectBranch
                  className="input"
                  onChange={(value) =>
                    formik.setFieldValue("SelectBranch", value.value)
                  }
                  value={formik.values.SelectBranch}
                  options={optionsBranch}
                />
                {formik.errors.SelectBranch && (
                  <p className="handleerror">{formik.errors.SelectBranch}</p>
                )}
              </div>
              <div className="col">
                <label>Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                />
                {formik.errors.number && (
                  <p className="handleerror">{formik.errors.number}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row paddingform">
          <div className="col-md-12">
            <div className="row g-3">
              <div className="col">
                <label>Select Officer</label>
                <SelectOfficer
                  className="input"
                  onChange={(value) =>
                    formik.setFieldValue("SelectOfficer", value.value)
                  }
                  value={formik.values.SelectOfficer}
                  options={optionsOfficer}
                />
                {formik.errors.SelectOfficer && (
                  <p className="handleerror">{formik.errors.SelectOfficer}</p>
                )}
              </div>
              <div className="col">
                <label>Select Status</label>
                <SelectStatus
                  className="input"
                  onChange={(value) =>
                    formik.setFieldValue("SelectStatus", value.value)
                  }
                  value={formik.values.SelectStatus}
                  options={optionsStatus}
                />
                {formik.errors.SelectStatus && (
                  <p className="handleerror">{formik.errors.SelectStatus}</p>
                )}
              </div>
            </div>
            <div className="row g-3 pt-3">
              <div className="col">
                <label>Application Type</label>
                <SelectType
                  className="input"
                  onChange={(value) =>
                    formik.setFieldValue("applicationtype", value.value)
                  }
                  value={formik.values.applicationtype}
                  options={optionsType}
                />
                {formik.errors.applicationtype && (
                  <p className="handleerror">{formik.errors.applicationtype}</p>
                )}
              </div>
              <div className="col">
                <label>Application Launched</label>
                <ApplicationBuy
                  className="input"
                  onChange={(value) =>
                    formik.setFieldValue("applicationbuy", value.value)
                  }
                  value={formik.values.applicationtype}
                  options={optionsbuy}
                />
                {formik.errors.applicationbuy && (
                  <p className="handleerror">{formik.errors.applicationbuy}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <input
          type="hidden"
          className="form-control"
          aria-label=""
          name="addmission"
          value={formik.values.addmission}
          onChange={formik.handleChange}
        />
        <input
          type="hidden"
          className="form-control"
          aria-label="First name"
          name="gte"
          value={formik.values.gte}
          onChange={formik.handleChange}
        />
        <input
          type="hidden"
          className="form-control"
          aria-label="First name"
          name="sop"
          value={formik.values.sop}
          onChange={formik.handleChange}
        />
        <input
          type="hidden"
          className="form-control"
          aria-label="First name"
          name="visafilling"
          value={formik.values.visafilling}
          onChange={formik.handleChange}
        />
        <input
          type="hidden"
          className="form-control"
          aria-label=""
          name="visalodgment"
          value={formik.values.visalodgment}
          onChange={formik.handleChange}
        />
        <button
          type="submit"
          style={{ background: "#7f3762", margin: "5px 0px 6px 8px" }}
          className="btn  text-white "
        >
          Save
        </button>
      </form>
    </div>
  );
};
