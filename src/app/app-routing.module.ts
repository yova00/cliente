import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [
  {
    path: '', component: ListarProductosComponent //home listar productos
  },{
    path: 'crear-producto', component: CrearProductoComponent //crear producto
  },{
    path: 'editar-producto/:id', component: CrearProductoComponent  //editar producto
  },{
    path: '**', redirectTo: '', pathMatch: 'full' //redirigir al home si se ingresa una ruta que no existe
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
