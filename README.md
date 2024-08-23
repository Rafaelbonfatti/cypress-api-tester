# Device API

Esta é uma API para gerenciamento de dispositivos baseada na API [Restful Objects API](https://api.restful-api.dev/objects). Ela permite buscar dispositivos cadastrados, cadastrar novos dispositivos, atualizar dispositivos existentes e deletar dispositivos. Todas as requisições e respostas da API foram validadas para garantir a integridade dos dados e a consistência das operações.

## Endpoints

### 1. Listar Todos os Dispositivos

**Endpoint:** `/objects`  
**Método:** `GET`  
**Descrição:** Retorna uma lista de todos os dispositivos cadastrados.

**Exemplo de Requisição:**

```bash
GET https://api.restful-api.dev/objects
```

**Validação de Requisições e Respostas** 

Cada requisição enviada à API passa por um processo de validação rigoroso para garantir que os dados estejam no formato esperado. Da mesma forma, as respostas da API são validadas para fornecer feedback claro e conciso aos usuários da API.

**Como Usar**

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```
Instale as dependências:

```bash

npm install
```
**Execute a aplicação**:
```bash
npm start
```


Acesse a API em: http://localhost:3000/objects

**Rodando Testes com Cypress**


### 1. Instale o Cypress:
Se ainda não tiver o Cypress instalado, você pode instalá-lo com o seguinte comando:

```bash
npm install cypress --save-dev
```
### 2. Abra o Cypress:
 Após a instalação, você pode abrir o Cypress com o comando:

```bash
npx cypress open
```
Isso abrirá a interface do Cypress, onde você poderá ver e executar os testes disponíveis.

### 3. Rodar os testes:
Para rodar todos os testes de uma vez, você pode usar o comando:

```bash
npx cypress run
```
### Esse comando executará os testes em modo headless 
(sem interface gráfica) e exibirá os resultados no terminal.
