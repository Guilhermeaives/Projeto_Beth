import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelcontrolComponent } from './admin/panelcontrol/panelcontrol.component';
import { ContatosComponent } from './contatos/contatos.component';

import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'formulario', component:FormComponent
  },
 
 {
   path: 'produtos', component:ProdutosComponent
 },

 {
  path: 'contato', component:ContatosComponent
},
{
  path: 'admin', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
