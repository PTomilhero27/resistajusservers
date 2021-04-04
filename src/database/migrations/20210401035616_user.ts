exports.up = function (knex) {
    return knex.schema
        .createTable('casos', function (table) {
            table.string('cpf', 11).primary();
            table.string('nome', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('numero', 255).notNullable();
            table.string('tipo', 255).notNullable();
            table.string('relato', 1000).notNullable();
            table.string('cep', 9).notNullable();
            table.string('rua', 255).notNullable();
            table.string('n', 255).notNullable();
            table.string('complemento', 255);
            table.string('bairro', 255).notNullable();
            table.string('cidade', 255).notNullable();
            table.string('uf', 3).notNullable();

        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTable("casos");
};

