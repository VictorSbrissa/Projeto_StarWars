import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrapesquisa',
  templateUrl: './barrapesquisa.component.html',
  styleUrls: ['./barrapesquisa.component.css']
})
export class BarrapesquisaComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisa(){
    if(this.descricao) {
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao }});
      return;
    }

    this.router.navigate(["produtos"]);
  }
}
