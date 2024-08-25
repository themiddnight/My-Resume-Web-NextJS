import { styled } from "@mui/system";
import Image from "next/image";
import { Box } from "@mui/material";
import React from "react";

// export const Image = styled("img")(({ zoomed = false }) => ({
//   objectFit: "cover",
//   transition: "transform 0.3s",
//   "&:hover": {
//     transform: zoomed ? "scale(1.2)" : "none",
//   },
// }));

// Image.defaultProps = {
//   loading: "lazy",
// };

export function NextImage({ src, alt, width, height, zoomed = false, className }) {
  return (
    <Box
      position={'relative'}
      width={width}
      height={height}
      sx={{
        transition: "transform 0.3s",
        "&:hover": {
          transform: zoomed ? "scale(1.1)" : "none",
        },
      }}
    >
      <Image 
        src={src} 
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className={className}
      />
    </Box>
  );
}