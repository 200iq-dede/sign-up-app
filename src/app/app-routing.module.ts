import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { userCreateComponent } from './components/user-create/user-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-user' },
  { path: 'create-user', component: userCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
