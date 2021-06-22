import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Clientes } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  collectionCliente: AngularFirestoreCollection<Clientes>;

  constructor(
    private af: AngularFirestore
  ) { 
    this.collectionCliente = this.af.collection('Clientes');
  }


//Metodo consulta um unico produto
getCliente(id: string){
  return this.collectionCliente.doc(id).valueChanges();
}

//metodo de cadastro
addPCliente(cliente: Clientes){
  return this.collectionCliente.add(cliente);
}

//Metodo que apaga um produto
delCliente(id: string){
  return this.collectionCliente.doc(id).delete();

}

//Metodo que atualiza um produto
upCliente(id: string, cliente: Clientes){
  return this.collectionCliente.doc(id).update(cliente)
}
}
