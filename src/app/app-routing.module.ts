import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EditComponent} from "./edit/edit.component";
import {DetailComponent} from "./detail/detail.component";
import {AddComponent} from "./add/add.component";
import {DeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

