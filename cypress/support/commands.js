// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('buscarDeviceEspecifico', (device_id) => {
    cy.api({
      
        method: 'GET',
          url: `/objects/${device_id}`,
        failOnStatusCode: false
    }).then((response) => { return response})
 })

 Cypress.Commands.add('cadastrarDevice', (payload) => {
    cy.api({
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body: payload
    }).then((response) => { return response})
})


Cypress.Commands.add('updateDevice', (device_id, body_update) => {
    cy.api({
        method: "PUT",
        url: `/objects/${device_id}`,
        failOnStatusCode: false,
        body: body_update
      }).then((response) => {return response})
})


Cypress.Commands.add('updatedeviceIdInexistente', (id_inexistente, body_update ) => {

    cy.api({
        method: "PUT",
        url: `/objects/${id_inexistente}`,
        body: body_update,
        failOnStatusCode: false
      }).then((response) => {return response})
})

Cypress.Commands.add('deletarDevice', (device_id) => {
    cy.api({
        method: "DELETE",
        url: `/objects/${device_id}`,
        failOnStatusCode: false
    }).then((response) => { return response });

})

Cypress.Commands.add('deletarDeviceIdInexistente', (id_inexistente) => {
    cy.api({
        method: "DELETE",
        url: `/objects/${id_inexistente}`,
        failOnStatusCode: false
    }).then((response) => { return response });

    
})
