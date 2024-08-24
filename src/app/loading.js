import { Box, Typography } from "@mui/material";
import Themes from '@/utils/themes';

export default function EditPage() {
  return (
    <Themes bg={{ mode: 2 }}>
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100dvh"}
      gap={2}
    >
      <span className="loader"/>
      <Typography variant='body1' sx={{ opacity: 0.5 }}>
        Chop chop! server!!
      </Typography>
    </Box>
    </Themes>
  );
}