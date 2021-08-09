import { Component, OnInit } from '@angular/core';
import { ProdutosdbService } from '../services/produtosdb.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  titlePage = "Nossas Fotos";
  fotosArray = [];

  constructor(
    private produtosDb: ProdutosdbService
  ) { }

  ngOnInit(): void {
    this.produtosDb.getAllProduto().subscribe(carrinho =>{this.fotosArray = carrinho})
  }

}
