import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import "./globals.css";
import Themes from '@/utils/themes';

export async function generateMetadata() {
  const title = "Middnight-Resume Website";
  const description = "This is a website where you can create your own resume website. And my personal project to study fullstack development.";
  const url = "https://themiddnight-resume.vercel.app/";
  const image_url = `/api/ogimage`;

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
    verification: {
      google: 'JZvGAackfa_KIrMmkf0uFmBYnU1XWEE0VBSkJYNhsJw',
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Themes bg={{ mode: 1 }}>
            {children}
          </Themes>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
