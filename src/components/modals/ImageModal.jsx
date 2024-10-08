'use client';
import { Box, Modal, Fade } from "@mui/material";
import { useContext } from "react";
import { ModalContext } from "@/utils/contexts";
// import Image from "next/image";

export default function ImageModal() {
  const { isImageModalOpen, setIsImageModalOpen, imageModalSrc } = useContext(ModalContext);
  
  return (
    <Modal
      open={isImageModalOpen}
      onClose={() => setIsImageModalOpen(false)}
      aria-labelledby="image-modal"
      aria-describedby="image-modal"
      disableAutoFocus
      disableRestoreFocus
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={isImageModalOpen}>
        <Box
          width={{ sm: "100%", md: "80%", lg: "70%", xl: "60%" }}
          borderRadius={{ sm: 0, md: 1 }}
          overflow={"hidden"}
          boxShadow={10}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src={imageModalSrc} alt="modal" width={"100%"} height={"100%"} />
          {/* <Image src={imageModalSrc} alt="modal" fill style={{ objectFit: 'contain' }} /> */}
        </Box>
      </Fade>
    </Modal>
  );
}
