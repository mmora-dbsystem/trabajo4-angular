import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CHeadComponent } from './components/c-head/c-head.component';
import { CFooterComponent } from './components/c-footer/c-footer.component';
import { CLoguinComponent } from './components/c-loguin/c-loguin.component';
import { CNavComponent } from './components/c-nav/c-nav.component';
import { CContentComponent } from './components/c-content/c-content.component';
import { CPageComponent } from './components/c-page/c-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CHeadComponent,
    CFooterComponent,
    CLoguinComponent,
    CNavComponent,
    CContentComponent,
    CPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
