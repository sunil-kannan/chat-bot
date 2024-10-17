import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppConfigService } from './service/app-config.service';
import { HttpClientModule } from '@angular/common/http';

// const appInitialization = (appConfig: AppConfigService) => {
//   return () => {
//     return appConfig.loadAppConfig();
//   }
// }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), AppConfigService,HttpClientModule,
  ]
};
