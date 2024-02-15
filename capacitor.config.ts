import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor',
  webDir: 'dist/capacitor/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
