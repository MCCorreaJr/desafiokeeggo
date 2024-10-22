#language: pt

Funcionalidade: Atualização de imagem de produto

Cenário: Atualizar a imagem de um produto
  Given que eu esteja autenticado na API com usuário "MCJR" e senha "Mccjr@123"
  When eu faço uma requisição para atualizar a imagem do produto com id "25", userId "370621129", source "/catalog/fetchImage?image_id=4700" e color "414141"
  Then a resposta deve ter um status code 200
  And a imagem do produto deve ser atualizada corretamente
  And o id da nova imagem inserida deve ser "desafio"