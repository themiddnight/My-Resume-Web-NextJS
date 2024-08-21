'use client';
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Link,
  Collapse,
  Typography,
  Box,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { LinkRounded, OpenInNewRounded } from "@mui/icons-material";
import { useState, useEffect } from "react";

import CardHeader from "../elements/CardHeader";
import MoreButtonSection from "../elements/MoreButton";

export default function OtherProfileCard({ data }) {
  const [isLimit, setIsLimit] = useState(true);
  const [limitedData, setLimitedData] = useState(data.data.slice(0, data.display_limit));

  // useEffect(() => {
  //   setLimitedData(data.data.slice(0, isLimit ? data.display_limit : data.data.length));
  // }, [isLimit, data.data, data.display_limit]);

  return (
    <Card>
      <CardContent>
        <CardHeader>
          <LinkRounded fontSize="large" />
          {data.title}
        </CardHeader>
        <Typography fontStyle={"italic"} mb={ data.subtitle ? 2 : 0 }>
          {data.subtitle}
        </Typography>

        <TransitionGroup component={List}>
          {limitedData.map((item, index) => (
            <Collapse component={ListItem} key={index} sx={{ py: 0.5 }}>
              <Box display="flex" alignItems="center">
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </Link>
                <ListItemIcon sx={{ mx: 1 }}>
                  <OpenInNewRounded fontSize="small" color="primary" />
                </ListItemIcon>
              </Box>
            </Collapse>
          ))}
        </TransitionGroup>
        <MoreButtonSection
          isLimit={isLimit}
          setIsLimit={setIsLimit}
          setLimitedData={setLimitedData}
          data={data.data}
          limit={data.display_limit}
          mt={1}
        />
      </CardContent>
    </Card>
  );
}
