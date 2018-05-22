import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import {AppModule} from './app/app.module';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [AppModule]
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
