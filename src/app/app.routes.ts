import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DesignsComponent } from './designs/designs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },          
  { path: 'about', component: AboutMeComponent },    
  { path: 'projects', component: ProjectsComponent }, 
  { path: 'contact', component: ContactComponent },  
  { path: 'designs', component: DesignsComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];
