import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //entry point 
  { path: '', component: MainpageComponent },
  { path: 'user/register', component: RegisteruserComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/list', component: ListuserComponent },
  { path: 'user/about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
