import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { NewpetComponent } from './newpet/newpet.component';
import { EditpetComponent } from './editpet/editpet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: NewpetComponent},
  {path: 'edit/:id', component: EditpetComponent},
  {path: ':id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
