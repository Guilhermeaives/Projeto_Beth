import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';

import { PanelcontrolComponent } from './panelcontrol/panelcontrol.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CadastroprodutosComponent } from './cadastroprodutos/cadastroprodutos.component';

const routes: Routes = [
  {
    path: '', component: PanelcontrolComponent
  },
  {
    path: 'cliente', component: ClientesComponent
  },
  {
    path: 'produtoadmin', component: ProdutosComponent
  },
  {
    path: 'pedidos', component: PedidosComponent
  },
  {
    path: 'cadastroprodutos', component: CadastroprodutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
