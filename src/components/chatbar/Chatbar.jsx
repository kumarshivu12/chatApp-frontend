import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Button,
  Divider,
} from "@mui/material";
import { useTheme, styled, alpha } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "../../data";
import ChatElement from "./ChatElement";

//styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Chatbar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        // width: isDesktop ? 320 : "100vw",
        backgroundColor:
          theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,

        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack
          alignItems={"center"}
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton sx={{ width: "max-content" }}>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={1.5} alignItems="center">
            <ArchiveBox size={24} />
            <Button variant="text">Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack sx={{ flexGrow: 1, overflowY: "auto", height: "100%" }}>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676667" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el, idx) => {
              return <ChatElement {...el} />;
            })}
            <Typography variant="subtitle2" sx={{ color: "#676667" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el, idx) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chatbar;
