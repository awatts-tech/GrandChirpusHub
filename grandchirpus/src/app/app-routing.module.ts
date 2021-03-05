import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobSearchComponent } from './job-search/job-search.component';
import { GrandCircusComponent } from './grand-circus/grand-circus.component';
import { CompaniesComponent } from './companies/companies.component';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';
import { NetworkingComponent } from './networking/networking.component';
//import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  //blank path is the default or home
  {path: '', component: JobSearchComponent},
  {path: 'grand-circus', component: GrandCircusComponent},
  {path: 'companies', component: CompaniesComponent },
  {path: 'interview-prep', component: InterviewPrepComponent},
  {path: 'networking', component: NetworkingComponent },
  // {path: 'navbar', component: NavbarComponent}
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

