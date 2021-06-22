import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelcontrolComponent } from './panelcontrol/panelcontrol.component';


import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';

import { CadastroprodutosComponent } from './cadastroprodutos/cadastroprodutos.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PanelcontrolComponent,   
    PedidosComponent,
    ProdutosComponent,
    ClientesComponent,
    CadastroprodutosComponent,
    HeaderadminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    PanelcontrolComponent,
  ]
})
export class AdminModule { }
