export const productAddAction = ({ id, title, price, category }) => ({
    type: "CREATE_PRODUCT",
    product: {
        id: id, //crypto.randomUUID(),
        title,
        price,
        category
    }
});



export const productDelete = (id) => ({
    type: "DELETE_PRODUCT",
    id
});