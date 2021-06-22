import { Component, OnInit } from '@angular/core';
import { ProdutosdbService } from '../services/produtosdb.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  titlePage = "Nossos Produtos!";
  produtosArray = [];

  constructor(
    private produtosDb: ProdutosdbService
  ) { }

  ngOnInit(): void {
    this.produtosDb.getAllProduto().subscribe(carrinho => {this.produtosArray = carrinho})
   
  }

}
 