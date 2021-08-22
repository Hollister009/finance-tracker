import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import ViteFonts from 'vite-plugin-fonts';

const fontsConfig = ViteFonts({
  google: {
    families: ['Inter'],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths(), fontsConfig],
});
