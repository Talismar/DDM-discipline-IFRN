import React from "react";
import { StackNavigatorAuth, AppRoutesTab } from "./app.routes";
import { AuthContext } from "../context/auth";
import Camera_Study from "@screens/Camera";

const Routes: React.FC = () => {
  const { user } = React.useContext(AuthContext);

  if (user.status !== "Logged") {
    return <StackNavigatorAuth />;
  } else {
    return <AppRoutesTab />;
  }
};

export default Routes;
