export const productAddAction = ({ id, title, price }) => ({
    type: "ADD_PRODUCT",
    product: {
        id,
        title,
        price
    }
})
