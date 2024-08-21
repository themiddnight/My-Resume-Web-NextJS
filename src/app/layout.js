import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import "./globals.css";
import Themes from '@/utils/themes';

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
