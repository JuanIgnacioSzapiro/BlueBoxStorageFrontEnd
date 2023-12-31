import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideAnimations()
]
}).catch(err=>console.error(err))

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
