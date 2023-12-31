import React, { useState } from "react";
import { Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

//hooks
import useSettings from "../../hooks/useSettings";

//components
import Logo from "../../assets/images/logo.ico";
import { Nav_Buttons, Nav_Setting } from "../../data";
import ProfileMenu from "./ProfileMenu";

//styles
const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = (index) => {
    setSelectedTab(index);
  };
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: 100,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          py={3}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                height: 64,
                width: 64,
                borderRadius: 1.5,
                backgroundColor: theme.palette.primary.main,
                overflow: "hidden",
              }}
              p={1}
            >
              <img
                src={Logo}
                alt="Tawk"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((el) => {
                return el.index === selectedTab ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    p={1}
                  >
                    <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#080707"
                          : theme.palette.text.primary,
                    }}
                  >
                    {el.icon}
                  </IconButton>
                );
              })}
              <Divider sx={{ width: 48 }} />
              {Nav_Setting.map((el) => {
                return el.index === selectedTab ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    p={1}
                  >
                    <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#080707"
                          : theme.palette.text.primary,
                    }}
                  >
                    {el.icon}
                  </IconButton>
                );
              })}
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <StyledSwitch onChange={onToggleMode} />
            <ProfileMenu />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
