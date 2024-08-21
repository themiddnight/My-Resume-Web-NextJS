import { Box, Container } from "@mui/material";

import Themes from "@/utils/themes";
import { fetchResumeData } from "@/utils/fetch";

import IntroScreen from "@/components/cards/IntroScreen";
import ProfileCard from "@/components/cards/ProfileCard";
import AboutCard from "@/components/cards/AboutCard";
import EducationCard from "@/components/cards/EducationCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import ProjectsCard from "@/components/cards/ProjectsCard";
import CollectionsCard from "@/components/cards/CollectionsCard";
import SkillsCard from "@/components/cards/SkillsCard";
import CertificationsCard from "@/components/cards/CertificationsCard";
import LanguagesCard from "@/components/cards/LanguagesCard";
import OtherProfileCard from "@/components/cards/OtherProfileCard";
import PublicNotesCard from "@/components/cards/PublicNotesCard";
// import ImageModal from "@/components/modals/ImageModal";

export async function generateMetadata({ params }) {
  const resumeId = params.id || 'themiddnight-dev'
  const data = await fetchResumeData(resumeId);
  const image_url = "https://firebasestorage.googleapis.com/v0/b/my-resume-website-ddda8.appspot.com/o/public%2Fthumbnail.jpg?alt=media&token=0231f8a1-43e5-4b37-a2b3-17c934b8a36f";
  const url = `https://themiddnight-resume.vercel.app/resumes/${resumeId}`;

  return {
    title: `${data.profile.title}'s Resume`,
    description: data.about.data[0].content || `Check out ${data.profile.title}'s resume!`,
    openGraph: {
      title: `${data.profile.title}'s Resume`,
      description: data.about.data[0].content || `Check out ${data.profile.title}'s resume!`,
      url,
      images: image_url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@themiddnight",
      images: image_url,
    },
  };
}

export default async function HomePage({ params }) {
  const resumeId = params.id || 'themiddnight-dev'
  const data = await fetchResumeData(resumeId, "data");

  if (data.settings.layout === 0) {
    return (
      <Themes bg={data.settings.background}>
        <Box>
          <Container maxWidth="xl" sx={{ py: {xs: 2, sm: 3, xl: 8} }}>
            <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2.5}>
              <Box
                gridColumn={{ xs: "span 10", sm: "span 5", lg: "span 4" }}
                display="flex"
                flexDirection="column"
                gap={2.5}
              >
                <Box className={'card1'}><ProfileCard data={data.profile} /></Box>
                {data.about.active && <Box className={'card2'}><AboutCard data={data.about} /></Box>}
                {data.experiences.active && <Box className={'card3'}><ExperienceCard data={data.experiences} /></Box>}
                {data.education.active && <Box className={'card4'}><EducationCard data={data.education} /></Box>}
                {data.languages.active && <Box className={'card5'} display={{ xs:'none', sm: 'block'}}><LanguagesCard data={data.languages} /></Box>}
                {data.public_notes.active && <Box className={'card7'} display={{ xs:'none', sm: 'block'}}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
              </Box>
              <Box
                gridColumn={{ xs: "span 10", sm: "span 5", lg: "span 6" }}
                display="flex"
                flexDirection="column"
                gap={2.5}
                >
                {data.projects.active && <Box className={'card2'}><ProjectsCard data={data.projects} /></Box>}
                {data.skills.active && <Box className={'card3'}><SkillsCard data={data.skills} /></Box>}
                {data.collections.active && <Box className={'card4'}><CollectionsCard data={data.collections} /></Box>}
                {data.languages.active && <Box className={'card5'} display={{ xs:'blodk', sm: 'none'}}><LanguagesCard data={data.languages} /></Box>}
                {data.certifications.active && <Box className={'card6'}><CertificationsCard data={data.certifications} /></Box>}
                {data.other_links.active && <Box className={'card7'}><OtherProfileCard data={data.other_links} /></Box>}
                {data.public_notes.active && <Box className={'card7'} display={{ xs:'blodk', sm: 'none'}}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
              </Box>
            </Box>
          </Container>
        </Box>
        {/* <ImageModal /> */}
      </Themes>
    )
  } 

  return (
    <Themes bg={data.settings.background}>
      <Box>
        <Container maxWidth="xl" sx={{ py: {xs: 2, sm: 3, xl: 8} }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2.5}>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", lg: "span 4" }}
              display="flex"
              flexDirection="column"
              gap={2.5}
            >
              <Box className={'card1'}><ProfileCard data={data.profile} /></Box>
              {data.about.active && <Box className={'card2'}><AboutCard data={data.about} /></Box>}
              {data.experiences.active && <Box className={'card3'}><ExperienceCard data={data.experiences} /></Box>}
              {data.education.active && <Box className={'card4'}><EducationCard data={data.education} /></Box>}
              {data.languages.active && <Box className={'card5'} display={{ xs:'none', sm: 'block', lg: 'none' }}><LanguagesCard data={data.languages} /></Box>}
              {data.other_links.active && <Box className={'card7'} display={{ xs: 'none', sm: 'block', lg: 'none' }}><OtherProfileCard data={data.other_links} /></Box>}
              {data.public_notes.active && <Box className={'card7'} display={{ xs: 'none', sm: 'block', lg: 'block' }}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
            </Box>

            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", lg: "span 8" }}
              display="flex"
              flexDirection="column"
              gap={2.5}
            >
              {data.projects.active && <Box className={'card2'}><ProjectsCard data={data.projects} /></Box>}

              <Box display="grid" gridTemplateColumns={{ sm: '1fr', md: '1fr 1fr'}} gap={2.5}>
                <Box
                  gridColumn={{ xs: "span 2", lg: "span 1" }}
                  display="flex"
                  flexDirection="column"
                  gap={2.5}
                >
                  {data.skills.active && <Box className={'card3'}><SkillsCard data={data.skills} /></Box>}
                  {data.languages.active && <Box className={'card4'} display={{ xs: 'none', sm: 'none', lg: 'block' }}><LanguagesCard data={data.languages} /></Box>}
                </Box>

                <Box
                  gridColumn={{ xs: "span 2", lg: "span 1" }}
                  display="flex"
                  flexDirection="column"
                  gap={2.5}
                >
                  {data.collections.active && <Box className={'card4'}><CollectionsCard data={data.collections} /></Box>}
                  {data.languages.active && <Box className={'card4'} display={{ xs: 'block', sm: 'none', lg: 'none' }}><LanguagesCard data={data.languages} /></Box>}
                  {data.certifications.active && <Box className={'card6'}><CertificationsCard data={data.certifications} /></Box>}
                  {data.other_links.active && <Box className={'card7'} display={{ xs: 'block', sm: 'none', lg: 'block' }}><OtherProfileCard data={data.other_links} /></Box>}
                  {data.public_notes.active && <Box className={'card7'} display={{ xs: 'block', sm: 'none', lg: 'none' }}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
                </Box>
                
              </Box>
              
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <ImageModal /> */}
    </Themes>
  );
}
