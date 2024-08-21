import {
  Box,
  Avatar,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import {
  LocationOnRounded,
  EmailRounded,
  PhoneRounded,
  LinkedIn,
  GitHub,
  Twitter,
  Facebook,
  Instagram,
  YouTube,
  LanguageRounded,
} from "@mui/icons-material";
import Image from "next/image";

const LinkIcon = (title) => {
  switch (title) {
    case "LinkedIn": return <LinkedIn color={"primary"} />;
    case "GitHub": return <GitHub color={"primary"} />;
    case "Twitter": return <Twitter color={"primary"} />;
    case "Facebook": return <Facebook color={"primary"} />;
    case "Instagram": return <Instagram color={"primary"} />;
    case "YouTube": return <YouTube color={"primary"} />;
    default: return <LanguageRounded color={"primary"} />;
  }
}

export default function ProfileCard({ data = {} }) {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 2,
            mt: { xs: 2, md: 1 },
            mb: 2,
            mx: { xs: 2, md: 1 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            width={140}
            height={140}
            sx={{ 
              position: 'relative', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              boxShadow: 3 
            }}
          >
            <Image
              src={`${data.image_url}`}
              alt={`${data.title}'s profile picture`}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexBasis: 0,
              flexGrow: 1,
              textAlign: { xs: "center", md: "left" },
              zIndex: 1,
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              fontWeight={"bold"}
              style={{
                fontSize: 36,
                padding: 0,
                marginBlockStart: 0,
                marginBlockEnd: 10,
                lineHeight: 1.2,
              }}
            >
              {data.title}
            </Typography>
            <Typography fontStyle={'italic'}>
              {data.subtitle}
            </Typography>
          </Box>
        </Box>
        <List disablePadding>

          {data.contact.location && <ListItem>
            <ListItemIcon>
              <LocationOnRounded />
            </ListItemIcon>
            <ListItemText>{data.contact.location}</ListItemText>
          </ListItem>}

          {data.contact.phone && <ListItem>
            <ListItemIcon>
              <PhoneRounded color={"primary"} />
            </ListItemIcon>
            <Link href={`tel:${data.contact.phone}`} sx={{ paddingBlock: "5px" }}>
              {data.contact.phone}
            </Link>
          </ListItem>}

          {data.contact.email && <ListItem>
            <ListItemIcon>
              <EmailRounded color={"primary"} />
            </ListItemIcon>
            <Link href={`mailto:${data.contact.email}`} sx={{ paddingBlock: "5px" }}>
              {data.contact.email}
            </Link>
          </ListItem>}

          {data.links.map((link, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {LinkIcon(link.title)}
              </ListItemIcon>
              <Link href={link.url} target={"_blank"} sx={{ paddingBlock: "5px" }}>
                {link.title}
              </Link>
            </ListItem>
          ))}

        </List>
      </CardContent>
    </Card>
  );
}