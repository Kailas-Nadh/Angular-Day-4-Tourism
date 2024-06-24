import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DistrictDetailedComponent } from './pages/district-detailed/district-detailed.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'district-detailed/:id',
    component: DistrictDetailedComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path:'**',component:NotFoundComponent
}
];
