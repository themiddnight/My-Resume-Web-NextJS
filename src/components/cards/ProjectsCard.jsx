'use client';
import { Box, Card, CardContent, Link, Typography, Chip, Divider, Collapse } from "@mui/material";
import { OpenInNew, AppsRounded } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { TransitionGroup } from "react-transition-group";
import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

import { NextImage } from "../styled/Image";
import CardHeader from "../elements/CardHeader";
import { convertDate } from "../../utils/utils";
import MoreButtonSection from "../elements/MoreButton";

export default function ProjectsCard({ data }) {
  const theme = useTheme();
  const activeData = data.data.filter(item => item.active);
  const [isLimit, setIsLimit] = useState(true);
  // const [activeData, setActiveData] = useState(data.data.filter(item => item.active));
  const [limitedData, setLimitedData] = useState(activeData.slice(0, data.display_limit));
  
  const sliderRef = useRef(null);
  const [isMouseUsed, setIsMouseUsed] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function handleMouseDown(e) {
      setIsDown(true);
      setIsMouseUsed(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    }

    function handleMouseLeave() {
      setIsDown(false);
      setIsMouseUsed(false);
    }

    function handleMouseUp() {
      setIsDown(false);
    }

    function handleMouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX);
      slider.scrollLeft = scrollLeft - walk;
    }

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isDown, startX, scrollLeft]); 

  // useEffect(() => {
  //   setActiveData(data.data.filter(item => item.active));
  // }, [data.data]);

  // useEffect(() => {
  //   setLimitedData(activeData.slice(0, isLimit ? data.display_limit : activeData.length));
  // }, [isLimit, activeData, data.display_limit]);

  return (
    <Card component={'section'}>
      <CardContent>
        <CardHeader>
          <AppsRounded fontSize="large" />
          {data.title}
        </CardHeader>

        <Typography fontStyle={"italic"} mb={ data.subtitle ? 2 : 0 }>
          {data.subtitle}
        </Typography>

        {/* List mode */}
        {data.display_mode === 0 && 
        <TransitionGroup
          component={Box}
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: 2, lg: 0 }}
          mx={{ xs: -1, md: 0 }}
        >
          {limitedData.map((project, index) => (
            <Collapse key={index}>
              {index != 0 && <Divider sx={{ borderColor: { xs: "transparent", lg: "divider" } }}/>}
              <Box
                // flexShrink={0}
                display={"flex"}
                alignItems={"center"}
                flexDirection={{ xs: "column", lg: "row" }}
                borderRadius={"10px"}
                overflow={"hidden"}
                boxShadow={{ xs: 1, lg: 0 }}
                bgcolor={ theme.palette.mode === "dark" ? { xs: "#44444466", lg: 'transparent' } : { xs: "#cccccc88", lg: "transparent" } }
                // border={"1px solid #00000011"}
              >
                <ProjectContent data={project} display_mode={data.display_mode} />
              </Box>
            </Collapse>
          ))}
          <MoreButtonSection
            isLimit={isLimit}
            setIsLimit={setIsLimit}
            data={activeData}
            limit={data.display_limit}
            setLimitedData={setLimitedData}
          />
        </TransitionGroup>
        }

        {/* Scroll mode */}
        {data.display_mode === 1 && 
        <Box
          display={"flex"}
          gap={2}
          px={3}
          py={0}
          mx={-3.3}
          sx={{
            overflowX: "scroll",
            overflowY: "visible",
            scrollSnapType: isMouseUsed ? "none" : "x mandatory",
            cursor: isDown ? "grabbing" : "default",
            // userSelect: isDown ? "none" : "auto",
            maskImage: { 
              xs: "none",
              sm: `
                linear-gradient(
                  to right, 
                  transparent, 
                  black 20px, 
                  black calc(100% - 20px), 
                  transparent
                )`,
            },
          }}
          ref={sliderRef}
        >
          {data.data.map((project, index) => (
            <Box
              key={index}
              flexBasis={{ xs: "98%", lg: 540 }}
              flexShrink={0}
              display={"flex"}
              flexDirection={{ xs: "column", lg: "row" }}
              my={"1px"}
              borderRadius={"10px"}
              overflow={"hidden"}
              boxShadow={1}
              bgcolor={ theme.palette.mode === "dark" ? "#44444488" : "#cccccc88" }
              // border={"1px solid #00000011"}
              sx={{
                display: project.active ? "flex" : "none",
                scrollSnapAlign: { xs: "center", md: "start" },
                scrollSnapStop: "always",
                scrollMarginInlineStart: { xs: 0, md: 26 },
              }}
            >
              <ProjectContent data={project} display_mode={data.display_mode} />
            </Box>
          ))}
        </Box>}

      </CardContent>
    </Card>
  );
}

const ProjectContent = ({ data, display_mode }) => {
  function fromToString(from, to, current) {
    return `${convertDate(from)} ${from && to ? " - " : "" } ${current ? "Present" : convertDate(to)}`;
  }
  
  return (
    <>
      {data.image_url && (
        <Box
          width={{ xs: "100%", lg: display_mode === 0 ? 150 : 180 }}
          height={{ xs: 130, lg: display_mode === 0 ? 100 : "auto" }}
          flexShrink={0}
          position={"relative"}
          overflow={"hidden"}
        >
          <Link
            href={
              data.public_link === "" ? null : data.public_link
            }
            target="_blank"
          >
            <Box
              position={'absolute'}
              width={"100%"}
              height={"100%"}
            >
              <NextImage
                src={`${data.image_url}`}
                width={"100%"}
                height={"100%"}
                alt={data.title}
                zoomed={data.public_link ? true : false}
              />
            </Box>
          </Link>
        </Box>
      )}

      <Box p={2} width={"100%"}>
        <Typography
          fontSize={"small"}
          fontStyle={"italic"}
          fontWeight={"light"}
        >
          {data.tags.join(", ")}
        </Typography>
        
        <Typography 
          component={data.public_link ? Link : "span"}
          href={data.public_link}
          target={"_blank"}
          fontSize={20}
          fontWeight={"bold"}
          noWrap
        >
          {data.title}
        </Typography>

        <Typography fontSize={"small"}>
          {fromToString(data.from, data.to, data.current)}
        </Typography>

        <Box display={"flex"} flexWrap={"wrap"} gap={1} my={1}>
          {data.links.map((link, index) => (
            <Chip
              key={index}
              component={"a"}
              clickable
              label={link.title}
              href={link.url}
              target={"_blank"}
              size="small"
              icon={<OpenInNew fontSize="small" />}
              sx={{ px: 0.5, ml: -0.5 }}
            />
          ))}
        </Box>

        <Typography>{data.description}</Typography>
      </Box>
    </>
  )
}
