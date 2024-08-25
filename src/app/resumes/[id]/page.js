// import { getServerSideProps } from 'next/server';
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

// export async function getServerSideProps({ params }) {
//   const resumeId = params.id || 'themiddnight-dev'
//   console.log(`Resume ID (server side props): ${resumeId}`);
//   const data = await fetchResumeData(resumeId);
//   return data;
// }

export async function generateMetadata({ params }) {
  const resumeId = params.id || 'themiddnight-dev'
  console.log(`Resume ID (metadata): ${resumeId}`);
  const data = await fetchResumeData(resumeId);
  // const data = await getServerSideProps({ params });

  const title = `${data.profile.title}'s ${data.summary.resume_name} - My Resume`;
  const description = data.about.data[0].content || `Check out ${data.profile.title}'s resume!`;
  const url = `https://themiddnight-resume.vercel.app/resumes/${resumeId}`;
  const image_url = `/api/ogimage?title=${data.profile.title}&subtitle=${data.summary.resume_name}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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

export default async function ResumePage({ params }) {
  const resumeId = params.id || 'themiddnight-dev'
  console.log(`Resume ID (main page): ${resumeId}`);
  const data = await fetchResumeData(resumeId);
  // const data = await getServerSideProps({ params });

  if (data.settings.layout === 0) {
    return (
      <Themes bg={data.settings.background}>
        <main>
        <IntroScreen data={data.settings}>
          <Container maxWidth="xl" sx={{ py: {xs: 2, sm: 3, xl: 8} }}>
            <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2.5}>
              <Box
                gridColumn={{ xs: "span 10", sm: "span 5", lg: "span 4" }}
                display="flex"
                flexDirection="column"
                gap={2.5}
              >
                <Box><ProfileCard data={data.profile} /></Box>
                {data.about.active && <Box><AboutCard data={data.about} /></Box>}
                {data.experiences.active && <Box><ExperienceCard data={data.experiences} /></Box>}
                {data.education.active && <Box><EducationCard data={data.education} /></Box>}
                {data.languages.active && <Box display={{ xs:'none', sm: 'block'}}><LanguagesCard data={data.languages} /></Box>}
                {data.public_notes.active && <Box display={{ xs:'none', sm: 'block'}}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
              </Box>
              <Box
                gridColumn={{ xs: "span 10", sm: "span 5", lg: "span 6" }}
                display="flex"
                flexDirection="column"
                gap={2.5}
                >
                {data.projects.active && <Box><ProjectsCard data={data.projects} /></Box>}
                {data.skills.active && <Box><SkillsCard data={data.skills} /></Box>}
                {data.collections.active && <Box><CollectionsCard data={data.collections} /></Box>}
                {data.languages.active && <Box display={{ xs:'blodk', sm: 'none'}}><LanguagesCard data={data.languages} /></Box>}
                {data.certifications.active && <Box><CertificationsCard data={data.certifications} /></Box>}
                {data.other_links.active && <Box><OtherProfileCard data={data.other_links} /></Box>}
                {data.public_notes.active && <Box display={{ xs:'blodk', sm: 'none'}}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
              </Box>
            </Box>
          </Container>
        </IntroScreen>
        </main>
        {/* <ImageModal /> */}
      </Themes>
    )
  } 

  return (
    <Themes bg={data.settings.background}>
      <main>
      <IntroScreen data={data.settings}>
        <Container maxWidth="xl" sx={{ py: {xs: 2, sm: 3, xl: 8} }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2.5}>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", lg: "span 4" }}
              display="flex"
              flexDirection="column"
              gap={2.5}
            >
              <Box><ProfileCard data={data.profile} /></Box>
              {data.about.active && <Box><AboutCard data={data.about} /></Box>}
              {data.experiences.active && <Box><ExperienceCard data={data.experiences} /></Box>}
              {data.education.active && <Box><EducationCard data={data.education} /></Box>}
              {data.languages.active && <Box display={{ xs:'none', sm: 'block', lg: 'none' }}><LanguagesCard data={data.languages} /></Box>}
              {data.other_links.active && <Box display={{ xs: 'none', sm: 'block', lg: 'none' }}><OtherProfileCard data={data.other_links} /></Box>}
              {data.public_notes.active && <Box display={{ xs: 'none', sm: 'block', lg: 'block' }}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
            </Box>

            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", lg: "span 8" }}
              display="flex"
              flexDirection="column"
              gap={2.5}
            >
              {data.projects.active && <Box><ProjectsCard data={data.projects} /></Box>}

              <Box display="grid" gridTemplateColumns={{ sm: '1fr', md: '1fr 1fr'}} gap={2.5}>
                <Box
                  gridColumn={{ xs: "span 2", lg: "span 1" }}
                  display="flex"
                  flexDirection="column"
                  gap={2.5}
                >
                  {data.skills.active && <Box><SkillsCard data={data.skills} /></Box>}
                  {data.languages.active && <Box display={{ xs: 'none', sm: 'none', lg: 'block' }}><LanguagesCard data={data.languages} /></Box>}
                </Box>

                <Box
                  gridColumn={{ xs: "span 2", lg: "span 1" }}
                  display="flex"
                  flexDirection="column"
                  gap={2.5}
                >
                  {data.collections.active && <Box><CollectionsCard data={data.collections} /></Box>}
                  {data.languages.active && <Box display={{ xs: 'block', sm: 'none', lg: 'none' }}><LanguagesCard data={data.languages} /></Box>}
                  {data.certifications.active && <Box><CertificationsCard data={data.certifications} /></Box>}
                  {data.other_links.active && <Box display={{ xs: 'block', sm: 'none', lg: 'block' }}><OtherProfileCard data={data.other_links} /></Box>}
                  {data.public_notes.active && <Box display={{ xs: 'block', sm: 'none', lg: 'none' }}><PublicNotesCard resumeId={resumeId} data={data.public_notes} /></Box>}
                </Box>
                
              </Box>
              
            </Box>
          </Box>
        </Container>
      </IntroScreen>
      </main>
      {/* <ImageModal /> */}
    </Themes>
  );
}
