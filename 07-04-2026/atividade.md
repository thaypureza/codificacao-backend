## Perguntas e respostas (ATIVIDADE 1)

- Por que `PATCH` é a melhor escolha nesse caso?
- RESPOSTA: Porque o objetivo era atualizar apenas um campo de uma fruta existente, e o PATCH faz isso, atualiza parcialmente.

- O que significa atualização parcial?
- RESPOSTA: Atualização parcial significa que apenas os campos enviados na requisição são alterados, ou seja, não muda tudo. 

- O que acontece quando você envia apenas um campo?
- RESPOSTA: Apenas ele é modificado.

## Perguntas e Respostas (ATIVIDADE 2)

- Por que `PUT` é considerado uma substituição completa?
- RESPOSTA: Porque ele altera tudo, ele substitui o objeto inteiro. 

- Qual é a diferença entre substituir e atualizar parcialmente?
- RESPOSTA: Substituir muda tudo, não só oque foi enviado na requisição, mas substitui o objeto inteiro. Já a atualização parcial significa que apenas os campos enviados na requisição são alterados, ou seja, não muda tudo.

- Se o objeto tivesse mais campos, o que poderia acontecer se eles não fossem enviados?
- RESPOSTA: Se o objeto tivesse mais campos, os campos ausentes podem ser perdidos ou sobrescritos.


