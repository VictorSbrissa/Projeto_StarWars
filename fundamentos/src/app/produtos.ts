export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Corvette - Tantive IV", preco: 4500, descricaoPreco: "A cargo or freight carrier.", imagem: "/assets/CorvetteTantiveIV.jpg" , quantidadeEstoque: 10 },
    { id: 2, descricao: "Corvette - Sphyrna class", preco: 1200.50, descricaoPreco: "A cargo or freight carrier.", imagem: "/assets/Sphyrnaclass.jpg", quantidadeEstoque: 15 },
    { id: 3, descricao: "Freighter - VCX-100", preco: 749.99, descricaoPreco: "A small, fast ship.", imagem: "/assets/VCX100.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Battleship - Lucrehulk", preco: 599.99, descricaoPreco: "A slower ship armed with bombs.", imagem: "/assets/Lucrehulk.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Venator - Star Destroyer", preco: 299.99, descricaoPreco: "Used for atmospheric or space combat.", imagem: "/assets/StarDestroyer.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Acclamator - Republic Ship", preco: 399.99, descricaoPreco: "A luxurious vessel.", imagem: "/assets/AcclamatorRepublicShip.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Transport - Neimoidian", preco: 499.99, descricaoPreco: "A slower ship armed with bombs.", imagem: "/assets/TransportNeimoidian.webp", quantidadeEstoque: 10 },
    { id: 8, descricao: "Millennium Falcon", preco: 200, descricaoPreco: "The largest of starship.", imagem: "/assets/MillenniumFalcon.webp" , quantidadeEstoque: 10 },
    { id: 9, descricao: "Corvette - Sup Destroyer", preco: 1000, descricaoPreco: " Used for in-system operations.", imagem: "/assets/CorvetteSupDestroyer.webp", quantidadeEstoque: 10  },
    { id: 10, descricao: "Cruiser - Banking Frigate", preco: 2500, descricaoPreco: "Used for atmospheric or space combat.", imagem: "/assets/CruiserBankingFrigate.png", quantidadeEstoque: 10  },
    { id: 11, descricao: "Cruiser - Mon Calamari", preco: 439.00, descricaoPreco: "Used for in-system operations.", imagem: "/assets/CruiserMonCalamari.jpg", quantidadeEstoque: 15},
    { id: 12, descricao: "Corvette - Slave I", preco: 20, descricaoPreco: " Used for atmospheric or space combat.", imagem: "/assets/SlaveI.webp", quantidadeEstoque: 10  },
    //{ id: 13, descricao: "Transport - invisible hand", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/Transportinvisiblehand.webp", quantidadeEstoque: 10 },
    //{ id: 14, descricao: "Cruiser - Home One", preco: 50, descricaoPreco: "À vista no PIX", imagem: "/assets/CruiserHomeOne.webp" , quantidadeEstoque: 10 },
    //{ id: 15, descricao: "Cruiser -  Executor ", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "/assets/CruiserExecutor.jpg", quantidadeEstoque: 10  },
]