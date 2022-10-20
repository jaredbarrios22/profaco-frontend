import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { OverviewComponent } from './overview/overview.component';
import { calls } from './calls/calls.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetallesPedidoComponent } from './detalles-pedido/detalles-pedido.component';
import { DetallesVentaComponent } from './detalles-venta/detalles-venta.component';
import { ModalModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';


  const routes: Routes = [
    {   
      path: 'inicio-sesion', component: InicioSesionComponent  
     },
    {
      path: 'principal', component: PrincipalComponent
    },
    {
      path: 'overview', component: OverviewComponent
    },
    {
      path: 'productos', component: ProductosComponent
    },
    {
      path: 'ventas', component: VentasComponent
    },
    {
      path: 'detalles-pedido', component: DetallesPedidoComponent
    },
    {
      path: 'catalogo', component: CatalogoComponent
    }
  ];
@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    OverviewComponent,
    ProductosComponent,
    VentasComponent,
    DetallesPedidoComponent,
    DetallesVentaComponent,
    CatalogoComponent,
    EditarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ModalModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule

  ],
  providers: [
    calls
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
