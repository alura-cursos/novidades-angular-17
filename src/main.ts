import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, withViewTransitions } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes, withViewTransitions()),
    ]
  });
