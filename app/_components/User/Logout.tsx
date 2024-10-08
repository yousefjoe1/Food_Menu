"use client";
import React from "react";

import { CiLogout } from "react-icons/ci";
import { logout } from "@/app/actions/logout";

const Logout = () => {
  const logoutFunc = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <button onClick={logoutFunc}>
      <CiLogout className="lg:text-2xl" />
    </button>
  );
};

export default Logout;