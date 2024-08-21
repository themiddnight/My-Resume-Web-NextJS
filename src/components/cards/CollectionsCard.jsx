'use client';
import {
  Box,
  Card,
  CardContent,
  Tooltip,
  Typography,
  // Collapse,
} from "@mui/material";
// import { TransitionGroup } from "react-transition-group";
import { CategoryRounded } from "@mui/icons-material";
import { useState, useEffect } from "react";

// import { Image } from "../styled/Image";
import Image from "next/image";
import CardHeader from "../elements/CardHeader";
import MoreButtonSection from "../elements/MoreButton";

export default function CollectionsCard({ data }) {
  const activeData = data.data.filter(item => item.active);
  const [isLimit, setIsLimit] = useState(true);
  // const [activeData, setActiveData] = useState(data.data.filter(item => item.active));
  const [limitedData, setLimitedData] = useState(activeData.slice(0, data.display_limit));
  const groupData = [...new Set(activeData.map(item => item.group).filter(item => item))];
  // const [groupData, setGroupData] = useState(() => {
  //   const newGroup = data.data.map(item => item.group).filter(item => item);
  //   return [...new Set(newGroup)];
  // })

  const GroupSection = ({ title, moreCount, data }) => {
    return (
      <Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography component='h3' fontWeight={"bold"}>{title}:</Typography>
          {moreCount > 0 && (
            <Typography variant="body2" sx={{ opacity: 0.5 }}>
              {moreCount} more...
            </Typography>
          )}
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          gap={2.4}
          mt={1}
          px={1}
        >
          {data.map((item, index) => (
            <Tooltip
              key={index}
              placement="top"
              enterTouchDelay={0}
              leaveTouchDelay={5000}
              arrow
              title={
                <>
                  <Typography component='h4' fontSize={"small"} fontWeight={"bold"}>
                    {item.title}
                  </Typography>
                  <Typography fontSize={"small"}>
                    {item.description}
                  </Typography>
                </>
              }
            >
              {item.image_url ? (
                <Box
                  width={null}
                  height={null}
                  sx={{
                    transition: "transform 0.3s",
                    '&:hover': { transform: "scale(1.2)" },
                  }}
                >
                  <Image
                    src={`${item.image_url}`}
                    alt={item.title}
                    width={35}
                    height={35}
                    layout={null}
                    objectFit={null}
                    loading="lazy"
                    className={item.is_mono ? "svg-invert icon" : "icon"}
                  />
                </Box>
              ) : (
                <Typography component='h4'>{item.title}</Typography>
              )}
            </Tooltip>
          ))}
        </Box>
      </Box>
    );
  }

  // useEffect(() => {
  //   setActiveData(data.data.filter(item => item.active));
  //   setGroupData(() => {
  //     const newGroup = data.data.map(item => item.group).filter(item => item);
  //     return [...new Set([...newGroup])];
  //   });
  // }, [data.data]);

  // useEffect(() => {
  //   setLimitedData(activeData.slice(0, isLimit ? data.display_limit : activeData.length));
  // }, [isLimit, activeData, data.display_limit]);

  return (
    <Card>
      <CardContent>
        <CardHeader>
          <CategoryRounded fontSize="large" />
          {data.title}
        </CardHeader>
        <Typography fontStyle={"italic"} mb={ data.subtitle ? 2 : 0 }>
          {data.subtitle}
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >

          {groupData.map((group, index) => {
            const groupData = activeData.filter(item => item.group === group);
            const moreCount = groupData.length - limitedData.filter(item => item.group === group).length;
            return (
              <GroupSection
                key={index}
                title={group}
                moreCount={moreCount}
                data={limitedData.filter(item => item.group === group)}
              />
            );
          })}

          {activeData.filter(item => !item.group).length > 0 && (
            <GroupSection
              title={groupData.length > 0 ? "Others" : ""}
              moreCount={activeData.filter(item => !item.group).length - limitedData.filter(item => !item.group).length}
              data={limitedData.filter(item => !item.group)}
            />
          )}

        </Box>
        <MoreButtonSection
          isLimit={isLimit}
          setIsLimit={setIsLimit}
          data={activeData}
          limit={data.display_limit}
          setLimitedData={setLimitedData}
        />
      </CardContent>
    </Card>
  );
}
