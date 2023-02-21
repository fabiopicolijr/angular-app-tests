import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { successAlertComponent } from './section2/challenge1/success-alert/success-alert.component';
// import { WarningAlertComponent } from './section2/challenge1/warning-alert/warning-alert.component';
import { ServerComponent } from './section1/server/server.component';
import { ServersComponent } from './section1/servers/servers.component';

@NgModule({
  declarations: [AppComponent, ServersComponent, ServerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
