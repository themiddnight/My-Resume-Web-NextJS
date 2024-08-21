import { Box } from "@mui/material";

export default function EditPage() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100dvh"}
    >
      <span className="loader"/>
      <h1>Create page</h1>
      <a href="/">Back home</a>
    </Box>
  );
}