import configureStore from "./tools/store/configureStore";
import { productAddAction } from './tools/actions/productAction';

const manager = () => {
    const mystore = configureStore();
    mystore.subscribe(() => {
        console.log(mystore.getState());

    })
    mystore.dispatch(productAddAction({ id: 1, title: "Asus Vivobook", price: 3000, category: "office" }));
    mystore.dispatch(productAddAction({ id: 2, title: "Lenovo Legion", price: 5000, category: "gaming" }));
    mystore.dispatch(productAddAction({ id: 3, title: "Dell XPS", price: 7000, category: "ultrabook" }));
    mystore.dispatch(productAddAction({ id: 4, title: "MSI Sword", price: 5000, category: "gaming" }));
    

}

export default manager;