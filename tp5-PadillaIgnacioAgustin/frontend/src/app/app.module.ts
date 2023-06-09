import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { HeaderComponent } from './components/header/header.component';
import { ValidacionPrecioDirective } from './directivas/validacion-precio.directive';
import { ValidacionDniDirective } from './directivas/validacion-dni.directive';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConverterListComponent } from './components/converter-list/converter-list.component';
import { ConverterFormComponent } from './components/converter-form/converter-form.component';
import { FormatoEspectadorPipe } from './pipes/formato-espectador.pipe';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductoFormComponent,
    HeaderComponent,
    ValidacionPrecioDirective,
    ValidacionDniDirective,
    ConverterListComponent,
    ConverterFormComponent,
    FormatoEspectadorPipe,
    TicketListComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
