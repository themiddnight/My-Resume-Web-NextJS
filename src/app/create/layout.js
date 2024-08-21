import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import "@/app/globals.css";
import Themes from '@/utils/themes';

export default function CreateLayout({ children }) {
  return (
    <AppRouterCacheProvider>
      <Themes bg={{ mode: 2 }}>
        {children}
      </Themes>
    </AppRouterCacheProvider>
  );
}
