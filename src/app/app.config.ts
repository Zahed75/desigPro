import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    SvgIconRegistryService, // Provide the service globally
    importProvidersFrom(AngularSvgIconModule.forRoot()) // Import the SVG module globally
  ]
};
