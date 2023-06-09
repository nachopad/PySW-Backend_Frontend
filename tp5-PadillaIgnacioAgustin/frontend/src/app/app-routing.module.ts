import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ConverterListComponent } from './components/converter-list/converter-list.component';
import { ConverterFormComponent } from './components/converter-form/converter-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path:'producto-list', component: ProductoListComponent},
  {path: 'producto-form/:id', component: ProductoFormComponent},
  {path:'converter-list', component: ConverterListComponent},
  {path: 'converter-form/:id', component: ConverterFormComponent},
  {path:'ticket-list', component: TicketListComponent},
  {path: 'ticket-form/:id', component: TicketFormComponent},
  {path:"", redirectTo:"producto-list", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

