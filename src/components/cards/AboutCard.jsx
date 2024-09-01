import { Card, CardContent, Typography } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";

import CardHeader from "../elements/CardHeader";

export default function AboutCard({ data = {} }) {
  return (
    <Card component={'section'}>
      <CardContent>
        <CardHeader>
          <PersonRounded fontSize="large" />
          {data.title}
        </CardHeader>
        
        <Typography fontStyle={'italic'} mb={2}>
          {data.subtitle}
        </Typography>
        
        {data.data.map((item, index) => (
          <Typography 
            key={index} 
            variant='body1'
            component='p'
            pb={index !== data.data.length - 1 ? 2 : 0}
          >
            {item.content}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}