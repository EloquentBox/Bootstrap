import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './index/about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { PortfolioComponent } from './index/portfolio/portfolio.component';
import { ContactComponent } from './index/contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: IndexComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
