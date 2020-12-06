import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserLComponent } from './components/user-l/user-l.component';
const routes: Routes = [
  {path: '',redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UserLComponent},
  {path: 'create',component:UserCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
