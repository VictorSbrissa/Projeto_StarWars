import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private noficacaService: NotificacaoService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const ProdutoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(ProdutoId);
  }

  adicionarAoCarrinho(){
    this.noficacaService.notificar("Produto adicionado ao carrino");
    const produto: IProdutoCarrinho ={
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarCarrinho(produto);
  }

}
