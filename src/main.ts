import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // ce fichier va servir a declancher l'app dans un navigateur web.
  // Il est utile de préciser cela car nous pouvons faire du natif web, nous pouvons faire de l'appplication mobile etc... 