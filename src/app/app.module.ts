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
import { PIndexComponent } from './pages/p-index/p-index.component';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CListComponent } from './components/c-list/c-list.component';
import { CConstructionComponent } from './components/c-construction/c-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    CHeadComponent,
    CFooterComponent,
    CLoguinComponent,
    CNavComponent,
    CContentComponent,
    CPageComponent,
    PIndexComponent,
    PDashboardComponent,
    CListComponent,
    CConstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
