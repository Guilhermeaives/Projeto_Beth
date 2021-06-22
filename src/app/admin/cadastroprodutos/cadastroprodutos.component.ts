import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosdbService } from 'src/app/services/produtosdb.service';

@Component({
  selector: 'app-cadastroprodutos',
  templateUrl: './cadastroprodutos.component.html',
  styleUrls: ['./cadastroprodutos.component.css']
})
export class CadastroprodutosComponent implements OnInit {

  titlePage = "Formulário de Cadastro";

  form: FormGroup;
  
  constructor(
    private fb:FormBuilder,
    private produtosDb: ProdutosdbService

  ) { }


  ngOnInit(): void {
    this.validaForm();
  }

  validaForm() {
    this.form = this.fb.group({
      titulo: ['',[Validators.required, Validators.minLength(3)]],
      categoria: ['',[Validators.required, Validators.minLength(3)]],
      sabor: ['',[Validators.required, Validators.minLength(3)]],
      tamanho: ['',[Validators.required, Validators.minLength(3), ]],
      endereco: ['',[Validators.required, Validators.minLength(3), ]],
      descricao: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
    });
  }

  cadastrar(){
    this.produtosDb.addProduto(this.form.value);
    
  }
}
