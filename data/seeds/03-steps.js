exports.seed = async function(knex) {
    await knex('steps').insert([
        { id: 1, instruction: 'Cut the Pepperoni'},
        { id: 2, instruction: "toss dough" },
        { id: 3, instruction: "Add flour and salt in pan with oil and add milk as needed to thin" },
        { id: 4, instruction: "stir contents" },
        { id: 5, instruction: "Cut Apples" },
        { id: 6, instruction: "Stir apples with cinnimon and sugar" },
        { id: 7, instruction: "Place apples in pan with dough already underneth and cook" }
    ]);
};