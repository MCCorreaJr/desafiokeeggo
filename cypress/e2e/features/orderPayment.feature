#language: pt

Funcionalidade: Verificar produtos na tela de pagamento

Cenario: Validar os produtos incluídos no carrinho na tela de pagamento
    Dado que eu esteja na página Advantage Online Shopping  
    Quando eu realizo a busca do produto "HP CHROMEBOOK 14 G1(ENERGY STAR)"
    E adiciono o produto no carrinho
    E clico no botão checkout
    Entao valido que o produto escolhido está visível