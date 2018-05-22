import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnotationComponent } from './annotation/annotation.component';
import { UiComponent } from './annotation/ui/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnotationComponent,
    UiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
