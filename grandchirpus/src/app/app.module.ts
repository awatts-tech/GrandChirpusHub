import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { AppRoutingModule } from './app-routing.module';
import { GrandCircusComponent } from './grand-circus/grand-circus.component';
import { CompaniesComponent } from './companies/companies.component';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';
import { NetworkingComponent } from './networking/networking.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    GrandCircusComponent,
    CompaniesComponent,
    InterviewPrepComponent,
    NetworkingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
