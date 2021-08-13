import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

import { ProdutosComponent } from './produtos/produtos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FotosComponent } from './fotos/fotos.component';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './footer/footer.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormComponent,
    ProdutosComponent,
    ContatosComponent,
    FotosComponent,
    FooterComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AdminModule,
    NgxImageZoomModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
