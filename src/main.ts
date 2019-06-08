<<<<<<< HEAD
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
=======
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
>>>>>>> 86737a996bc38f6dedf8b1ccf754d2dbcbdc7630

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
bootstrap(AppComponent, []);

=======
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
>>>>>>> 86737a996bc38f6dedf8b1ccf754d2dbcbdc7630
