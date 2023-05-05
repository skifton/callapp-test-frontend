import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "../views/Users";
import RootWrapper from "../components/RootWrapper";
import Statistics from "../views/Statistics";
import UserModal from "../views/Users/UserModal";
import { ROUTES } from "./routes";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<Navigate to={ROUTES.users} />} />
      <Route path={ROUTES.root} element={<RootWrapper />}>
        <Route path={ROUTES.users} element={<Users />}>
          <Route path={ROUTES.editNewUser} element={<UserModal />} />
          <Route path={ROUTES.editUser} element={<UserModal />} />
        </Route>
        <Route path={ROUTES.statistics} element={<Statistics />} />
      </Route>
      <Route path={ROUTES.default} element={<Navigate to={ROUTES.users} />}/>
    </Routes>
  );
};

export default RoutesWrapper;
