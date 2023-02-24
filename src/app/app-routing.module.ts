import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {TrainingComponent} from "./training/training.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'training', component: TrainingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //forRoot() return RouterModule but modified with our routes
  exports: [RouterModule]                   //export for app.module, will take our routes config into account
})
export class AppRoutingModule {}
