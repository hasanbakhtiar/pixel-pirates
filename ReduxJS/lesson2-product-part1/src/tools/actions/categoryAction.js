export const categoryAddAction = ({ id, title, price, category }) => ({
    type: "CREATE_CATEGORY",
    category: {
        id: id, //crypto.randomUUID(),
        title,
        price,
        category
    }
});



export const categoryDelete = (id) => ({
    type: "DELETE_CATEGORY",
    id
});