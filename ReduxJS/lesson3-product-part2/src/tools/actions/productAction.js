export const productAddAction = ({ id, title,image, price, category }) => ({
    type: "CREATE_PRODUCT",
    product: {
        id, 
        title,
        image,
        price,
        category
    }
});



export const productDelete = (id) => ({
    type: "DELETE_PRODUCT",
    id
});