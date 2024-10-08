import { Box, CircularProgress } from "@mui/material";

export default function CircularProgressWithLabel({ children, value }) {
  return (
    <Box display={"flex"} position={"relative"} my={1}>
      <Box
        position={"absolute"}
        top={0} left={0} bottom={0} right={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {children}
      </Box>

      <Box position={"absolute"}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={60}
          thickness={5}
          aria-label={`Language level ${value}%`}
          sx={{ opacity: 0.2 }}
        />
      </Box>

      <CircularProgress
        position={"absolute"}
        top={0} left={0} bottom={0} right={0}
        variant="determinate"
        value={value}
        size={60}
        thickness={5}
      />
    </Box>
  );
}
