import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { importProvidersFrom } from '@angular/core';



bootstrapApplication(AppComponent, {
  ...appConfig,
  providers:[
    ...(appConfig.providers || []),
    importProvidersFrom(FontAwesomeModule)
  ]
}).catch((err) => console.error(err));
