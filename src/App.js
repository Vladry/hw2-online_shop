import React, {PureComponent} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import modalConfig from './components/Modal/modalConfig';
import modBtnCfg from './components/Button/modBtnCfg';
import ProductList from "./components/ProductList/ProductList";
import * as cart from "./utils/cartHandleUtils.js";
import * as wishList from "./utils/wishListHandleUtils.js";
import {Link, animateScroll as scroll} from "react-scroll";

class App extends PureComponent {
    state = {
        activeModal: "closed",
        products: [],
        cart: [],
        wishList: [], //TODO wishList
    };

    openModal(modalId) {
        this.setState({
            activeModal: modalId,
            closeButton: true,
        });
        scroll.scrollToTop();  //альтернативный скроллинг при открытии Модалки
    }
    closeModal = () => {
        this.setState({activeModal: "closed"});
    };
    closeModAtSideClick = ({target}) => {
        if (target.classList.contains("btn")
            || target.classList.contains('modal')
            || target.classList.contains('svg-class')
        ) return;
        else {
            this.setState({activeModal: "closed"});
        }
    };
    confirmAddingAction = (id, {target}) => { //сюда зщ по клику "Add to Cart" с карточки товара и получили id добавляемого товара и ивент с нажатой карточки
        if (target.classList.contains('--activate-cart-modal')
            || target.classList.contains('btn')) {
            // this.setState(() => ({addingFlag: "cart"}));
            this.openModal("cart"); // запустили модалку, запросили Ок для добавления товара в корзину
            this.setState(() => ({addingIdtoCart: id}));
        } else if (target.classList.contains('--activate-wish-list-modal')) {
            // this.setState(() => ({addingFlag: "wishList"}));
            this.openModal("wishList"); // запустили модалку, запросили Ок для добавления товара в wishList
            this.setState(() => ({addingIdtoWishList: id}));
        }
    };
    addingPermitted = ({target}) => {  // получили из модалки ок на добавление товара в cart или wishList
        // const okBtnTxt = target.innerText;
        if (this.state.activeModal === "cart") {
            this.addProduct(this.state.addingIdtoCart); // запустили на добавление в Cart товара с id = addingIdtoCart
        } else if (this.state.activeModal === "wishList") {
            this.addProduct(this.state.addingIdtoWishList); // запустили на добавление в Cart товара с id = addingIdtoCart
        }

    };

    addProduct = (id) => { //сюда получить id товара к добавлению в тележку или в wishList
        const {products} = this.state;
        const getProduct = products.find(productItem => productItem.id === id);
        if (this.state.activeModal === "cart") {
            let currentCart = cart.checkCartInLocalStorage();
            if (currentCart.length === 0) {
                this.saveCart([getProduct]);
                return;
            } else if (!cart.alreadyExists(currentCart, getProduct)) {
                currentCart.push(getProduct);
                this.saveCart(currentCart)
            }
        }else
        if (this.state.activeModal === "wishList"){
            let currentWishList = wishList.checkWishListInLocalStorage();
            if (currentWishList.length === 0) {
                this.saveWishList([getProduct]);
                return;
            } else if (!wishList.alreadyExists(currentWishList, getProduct)) {
                currentWishList.push(getProduct);
                this.saveWishList(currentWishList)
            }
        }
        this.closeModal();
    };
    saveCart(currentCart) {
        // if (currentCart.length === 0) return;
        localStorage.setItem("cart", JSON.stringify(currentCart));
        this.setState(() => ({cart: currentCart}));
    }
    saveWishList(currentWishList) {
        localStorage.setItem("wishList", JSON.stringify(currentWishList));
        this.setState(() => ({wishList: currentWishList}));
    }

    render() {
        const {activeModal, closeButton} = this.state;
        const invokeHeader = modalConfig.get(activeModal).header;
        const invokeText = modalConfig.get(activeModal).text;
        console.log('modBtnCfg: ', modBtnCfg);
        return (
            <div className={(activeModal === "closed") ? 'wrapper' : 'wrapper  --darkened'}
                 onClick={this.closeModAtSideClick}
            >
                <div className={'modals-container'}>
                    <Modal id='modal' className='modal' header={invokeHeader} text={invokeText}
                           modalState={activeModal} closeModal={this.closeModal}
                           closeButton={closeButton} actions={modBtnCfg}
                           addingPermitted = {this.addingPermitted}
                           close={this.closeModal}/>

                    <div className={(activeModal === "closed") ? 'btn-section btn-inactive' : 'btn-section '}>
                        <ProductList products={this.state.products}
                                     cart={this.state.cart}
                                     wishList={this.state.wishList}
                                     listsHandler={this.confirmAddingAction}
                        />
                    </div>

                </div>
            </div>
        );
    }
    componentDidMount() {
        localStorage.getItem("cart")
        && this.setState(() => ({cart: JSON.parse(localStorage.getItem("cart"))}));
        localStorage.getItem("wishList")
        && this.setState(() => ({wishList: JSON.parse(localStorage.getItem("wishList"))}));

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
