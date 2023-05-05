import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "../views/Users";
import RootWrapper from "../components/RootWrapper";
import Statistics from "../views/Statistics";
import UserModal from "../components/UserModal";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="/" element={<RootWrapper />}>
        <Route path="/users" element={<Users />}>
          <Route path="/users/new" element={<UserModal />} />
          <Route path="/users/:id" element={<UserModal />} />
        </Route>
        <Route path="/statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;
