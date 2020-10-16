## Esse projeto foi desenvolvido com o framework java script *ReactJs*


* como não foi especificado o uso de algum banco de dados, eu usei o json-server somente para mockar e persistir os dados. 


## Para Começar
   - `yarn` ou `npm i` para instalar todas as dependências necessárias
   - `json-server --watch database/db.json` iniciara a api na porta 3000
   - `yarn start` para inicar a aplicação
      - como a porta padrão do react é a porta 3000, e a mesma esta ocupada pelo json-server, será necessario dizer sim no        terminal para o uso da porta 3001.
   



## Usando a aplicação

   *Listagem*
      Ao carregar a aplicação, todos os funcionários cadastrados posteriormente, seram carregados, logo se for a primeira vez rodando, não acontecerá a listagem.

   *Criação*
      Basta clicar no botão `+ Novo Funcionário`, que te direcionará para um fomrulário. O botão de criação do form, só será habilitado quando todos os campos estiverem completos.
      
   *Atualização*
      O botão de edição permanecerá desabilitado enquanto um funcionário da listagem não for selecionado. 
      Ao selecionar um funcionário para editar, um formulário será aberto e terá os campos preenchidos com as informações do funcionário selecionado.
     
    *Deletar*
       O botão de excluir permanecerá desabilitado enquanto um funcionário da listagem não for selecionado. 
       Ao selecionar um funcionário para exclusão, um modal será responsavel pela a confirmção da exclusão.


