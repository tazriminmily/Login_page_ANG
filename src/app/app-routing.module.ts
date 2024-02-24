import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { StartPageComponent } from './start-page/start-page.component';


// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'pages/login',
//     pathMatch: 'full',
    
//   },
// ];

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LogInComponent }, 

  { path: 'startpage', component: StartPageComponent }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
