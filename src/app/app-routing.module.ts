import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-user' },
  { path: 'create-user', component: UserCreateComponent },
  { path: 'thank-you', component: ThankYouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
