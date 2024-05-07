import "cypress-plugin-api";

/// <reference types='cypress'/>
 const body_cadastro = require('../fixtures/cadastrar_device_sucesso.json')
 const body_update = require('../fixtures/update_device_sucesso.json')


describe("Deletar dispositivos", () => {



  it('Alterar um dispositivo ', () => {

    cy.cadastrarDevice(body_cadastro)
  
    // Pegando o result do Cadastro 
    // para pegar o id 
    .then((response_post) => {
      expect(response_post.status).equal(200);
      expect(response_post.body.name).equal(body_cadastro.name)
      expect(response_post.body.owner).equal(body_cadastro.owner)
      expect(response_post.body.year).equal(body_update.year)
      console.log('mensagem id:', response_post);
      

       // fazer o put
       const deviceId = response_post.body.id;

      cy.updateDevice(deviceId, body_update)
  
       // Validações do PUT
      
       .then((response_put) => {
          expect(response_put.status).equal(200);
          expect(response_put.body.name).equal(body_update.name)
          expect(response_put.body.year).not.string
          expect(response_put.body.year).equal(body_update.year)
          expect(response_put.body.owner).equal(body_update.owner)

       })
  
    });
  });

  it('Alterar um dispositivo com um id inexistente', () => {
  

      const id_inexistente = 'id'
    // fazer o put com id inexistente
    cy.updatedeviceIdInexistente(id_inexistente, body_update)
  


    // Validações do PUT
   
   .then((response_put) => {
       expect(response_put.status).equal(404);
       expect(response_put.body.error)
       .to.include("The Object with id = id doesn't exist. Please provide an object id which exists or generate a new Object using POST request and capture the id of it to use it as part of PUT request after that");
     

    })

  });
    
    
      
       
});
  
