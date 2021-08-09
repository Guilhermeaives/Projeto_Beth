import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ProdutosdbService } from '../services/produtosdb.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titlePage = "Solicite seu Orçamento:";

  form:FormGroup;
  produtos = [];

  constructor(
    private fb:FormBuilder,
    private clienteDb: ClienteService,
    private produtoDb: ProdutosdbService
    
  ) { }


  ngOnInit(): void {
    this.validaForm();
    this.produtoDb.getAllProduto().subscribe(carrinho => this.produtos = carrinho);
  }
  validaForm() {
    this.form = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      telefone: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(3)]],
      descricao: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }
  cadastrar(){
    this.clienteDb.addPCliente(this.form.value);
  }
 
}

