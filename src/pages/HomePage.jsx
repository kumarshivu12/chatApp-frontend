import React from "react";
import Sidebar from "../components/sidebar";
import Chatbar from "../components/chatbar";
import Messagebar from "../components/messagebar";
import Profilebar from "../components/profilebar";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Stack direction="row">
        <Sidebar></Sidebar>
        <Chatbar></Chatbar>
        {/* <Messagebar></Messagebar> */}
        {/* <Profilebar></Profilebar> */}
      </Stack>
    </>
  );
};

export default HomePage;
