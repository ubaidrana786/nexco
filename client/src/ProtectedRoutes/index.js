import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import NoteContext from "../RootContext/NoteContext";

const ProtectedRoute = ({ children, ...restProps }) => {
  const {authToken,} = useContext(NoteContext);
    return (
    <Route
      {...restProps}
      render={() => {
        if (authToken && authToken !==null) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
