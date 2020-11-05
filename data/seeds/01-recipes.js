exports.seed = async function(knex) {
    await knex('recipes').insert([
        {id: 1, name: 'Apple Pie'},
        {id: 2, name: 'Pepperoni Pizza'},
        {id: 3, name: 'Biscuts and Gravy'}
    ])
};