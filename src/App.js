import React, {PureComponent} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from "./components/Modal/Modal";
import modalConfig from './components/Modal/modalConfig';
import appBtnCfg from './components/Button/appBtnCfg';
import modBtnCfg from './components/Button/modBtnCfg';
import ProductList from "./components/ProductList/ProductList";

class App extends PureComponent {
    state = {
        activeModal: "closed",
        products: [],
        cart: []
    };

    openModal(modalId) {
        this.setState({
            activeModal: modalId,
            closeButton: true
        });
    }

    closeModal = () => {
        this.setState({activeModal: "closed"});
    };
    closeModAtSideClick = ({target}) => {
        if (target.classList.contains("btn")
            || target.classList.contains('modal')
        ) return;
        else {
            this.setState({activeModal: "closed"});
        }
    };

    checkCartInLocalStorage() {
        if (localStorage.getItem("cart")
            && localStorage.getItem("cart").length > 0) {
            return JSON.parse(localStorage.getItem("cart"));
        } else return [];
    }

    alreadyExists(currentCart, getProduct) {
        if (currentCart.length === 0) return true;
        return currentCart.some(cartProduct => cartProduct.id === getProduct.id
        );
    }

    saveCart(currentCart) {
        if (currentCart.length === 0) return;
        localStorage.setItem("cart", JSON.stringify(currentCart));
        this.setState(() => ({cart: currentCart}));
    }

    addToCart = (id, {target}) => {
        const {products} = this.state;
        // const clickedTarget = target.closest('.card-item');
        // this.openModal("m1");
        const getProduct = products.find(productItem => productItem.id === id);
        let currentCart = this.checkCartInLocalStorage();
        if (currentCart.length === 0) {
            this.saveCart([getProduct]);
            return;
        }
        else
            if ( !this.alreadyExists(currentCart, getProduct) ) {
            currentCart.push(getProduct);
            this.saveCart(currentCart)
        }


        // console.log("getProduct", getProduct);
        // console.log("currentCart", currentCart);

    };

    render() {
        const {activeModal, closeButton} = this.state;
        const invokeHeader = modalConfig.get(activeModal).header;
        const invokeText = modalConfig.get(activeModal).text;

        return (
            <div className={(activeModal === "closed") ? 'wrapper' : 'wrapper  --darkened'}
                 onClick={this.closeModAtSideClick}>
                <div className={'modals-container'}>
                    <Modal className='modal' header={invokeHeader} text={invokeText}
                           modalState={activeModal} closeModal={this.closeModal}
                           closeButton={closeButton} actions={modBtnCfg} close={this.closeModal}/>

                    <div className={(activeModal === "closed") ? 'btn-section btn-inactive' : 'btn-section '}>
                        {/*    <Button btnCfg={appBtnCfg.get('b1')}*/}
                        {/*            handler={() => this.openModal("m1")}/>*/}
                        <ProductList products={this.state.products} cartHandler={this.addToCart}/>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch('products.json', {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => r.json()).then(res => {
            console.log(res);
            this.setState(() => ({products: res}))
        });

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     //     console.log("App.js-----> componentDidUpdate()");
    //     // }
}


export default App;
