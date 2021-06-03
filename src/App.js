import React, {PureComponent} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from "./components/Modal/Modal";
import modalConfig from './components/Modal/modalConfig';
import appBtnCfg from './components/Button/appBtnCfg';
import modBtnCfg from './components/Button/modBtnCfg';
import ProductList from "./components/ProductList/ProductList";
import * as cart from "./cartHandleUtils.js";
import { Link, animateScroll as scroll } from "react-scroll";

class App extends PureComponent {
    state = {
        activeModal: "closed",
        products: [],
        cart: []
    };

    openModal(modalId) {
        this.setState({
            activeModal: modalId,
            closeButton: true,
            addingIdtoCart: ""
        });
        scroll.scrollToTop();  //альтернативный скроллинг при открытии Модалки
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

    saveCart(currentCart) {
        if (currentCart.length === 0) return;
        localStorage.setItem("cart", JSON.stringify(currentCart));
        this.setState(() => ({cart: currentCart}));
    }

    addToCartPermitted = ({target}) => {  // получили из модалки ок на добавление товара в cart
        // const okBtnTxt = target.innerText;
        this.closeModal();  // закрыли модалку
        this.addToCart (this.state.addingIdtoCart); // запустили на добавление в Cart товара с id = addingIdtoCart
    };

    confirmAddToCart = (id, {target})=> { //сюда попали по клику "Add to Cart" с карточки товара и получили id добавляемого товара и ивент с нажатой карточки
        // const clickedTarget = target.closest('.card-item');
        this.openModal("m1"); // запустили модалку, запросили Ок для добавления товара в корзину
        this.setState(()=> ({addingIdtoCart: id}));
    };

    addToCart = (id) => { //сюда получить id товара к добавлению в тележку
        const {products} = this.state;
        const getProduct = products.find(productItem => productItem.id === id);
        let currentCart = cart.checkCartInLocalStorage();
        if (currentCart.length === 0) {
            this.saveCart([getProduct]);
            return;
        } else if (!cart.alreadyExists(currentCart, getProduct)) {
            currentCart.push(getProduct);
            this.saveCart(currentCart)
        }
    };

    render() {
        const {activeModal, closeButton} = this.state;
        const invokeHeader = modalConfig.get(activeModal).header;
        const invokeText = modalConfig.get(activeModal).text;

        return (
            <div className={(activeModal === "closed") ? 'wrapper' : 'wrapper  --darkened'}
                 onClick={this.closeModAtSideClick}>
                <div className={'modals-container'}>

                    <Modal id='modal'  className='modal' header={invokeHeader} text={invokeText}
                           modalState={activeModal} closeModal={this.closeModal}
                           closeButton={closeButton} actions={modBtnCfg} permitAddToCart={this.addToCartPermitted}
                           close={this.closeModal}/>

                    <div className={(activeModal === "closed") ? 'btn-section btn-inactive' : 'btn-section '}>
                        {/*    <Button btnCfg={appBtnCfg.get('b1')}*/}
                        {/*            handler={() => this.openModal("m1")}/>*/}
                        <ProductList products={this.state.products} cartHandler={this.confirmAddToCart}/>
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

}



export default App;
