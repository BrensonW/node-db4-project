exports.seed = async function(knex) {
    await knex('ingredients').insert([
    { id: 1, name: "gram of butter", quantity: 2 },
    { id: 2, name: "oz of milk", quantity: 5 },
    { id: 3, name: "lb of pepperoni", quantity: 1 },
    { id: 4, name: 'cups of flour', quantity: 4},
    { id: 5, name: "fl oz of marinara sauce", quantity: 4 },
    { id: 6, name: "gram of dough", quantity: 2 },
    { id: 7, name: "gram of sugar", quantity: 1 }
    ]);
};