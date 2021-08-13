import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor() { }

    imagem = ".\assets\imagem\IMG_20201205_123246_635.jpg"
  ngOnInit(): void {
  }

}
