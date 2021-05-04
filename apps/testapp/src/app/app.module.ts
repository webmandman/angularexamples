import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RelateddataComponent } from './relateddata/relateddata.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

@NgModule({
  declarations: [AppComponent, RelateddataComponent, TestcomponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
