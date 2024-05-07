import "cypress-plugin-api";

/// <reference types='cypress'/>

describe("Deletar dispositivos", () => {
  it("Deleta um dispositivo ", () => {
    const body = {
      name: "Apple MacBook Pro 16-rafael",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        owner: "Rafael cantieri Bonfatti",
      },
    };
    cy.cadastrarDevice(body)
    .then((response_post) => {
      expect(response_post.status).equal(200);
      //console.log('mensagem do post:', );

      const id = response_post.body.id;

      cy.deletarDevice(id)
        // Validações do DELETE
        .then((response_del) => {
          expect(response_del.status).equal(200);
          expect(response_del.body.message).to.include(
            `Object with id = ${id} has been deleted`
          );
        });
    });

    it("Deleta um dispositivo não existente ", () => {
      const id_inexistente = "5555";

      cy.deletarDeviceIdInexistente(id_inexistente)
      // Validações do DELETE

      .then((response_del) => {
        expect(response_del.status).equal(404);

        expect(response_del.body.error).to.include(
          `Object with id = ${id_inexistente} doesn't exist`
        );
      });
    });
  });
});
