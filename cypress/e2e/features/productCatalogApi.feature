#language: pt

Funcionalidade: Catalogo de produtos

Cenario: Buscar produto via API 
    Dado que eu deseje buscar um produto
    Quando eu faço um arequisição para buscar o produto "HP Pavilion 15t Touch Laptop"
    Entao a resposta deve conter o produto "HP Pavilion 15t Touch Laptop"
