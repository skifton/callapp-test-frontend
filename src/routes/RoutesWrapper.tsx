import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "../views/Users";
import RootWrapper from "../components/RootWrapper";
import Statistics from "../views/Statistics";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="/" element={<RootWrapper />}>
        <Route path="users" element={<Users />} >
          <Route path="users/new" element={<Users />} />
          <Route path="users/:id" element={<Users />} />
        </Route>
        <Route path="statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;
