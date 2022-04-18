import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertHoverDirective } from './alerts/alert-hover.directive';
import { NumberToLetterPipe } from './alerts/number-to-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    AlertHoverDirective,
    NumberToLetterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
