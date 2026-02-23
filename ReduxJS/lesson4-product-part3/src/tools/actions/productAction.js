export const productAddAction = ({ id, title, image, price, category }) => ({
    type: "CREATE_PRODUCT",
    product: {
        id,
        title,
        image,
        price,
        category
    }
});


export const productEdit = (id, update) => ({
    type: "EDIT_PRODUCT",
    id, 
    update
})


export const productDelete = (id) => ({
    type: "DELETE_PRODUCT",
    id
});