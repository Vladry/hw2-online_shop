import React, {PureComponent} from 'react';
import Button from "../Button/Button";
import appBtnCfg from "../Button/appBtnCfg";
import PropTypes from 'prop-types';
import {ShoppingCart} from '../../icons/ShoppingCart';
import {ShoppingWishList} from '../../icons/ShoppingWishList';

class Card extends PureComponent {
    state = {alreadyInCart: false};

    render() {
        const {productItem, cartHandler, wishListHandler, cart, wishList, listsHandler} = this.props;
        const prodIsInCart = cart.some((cartItem)=> cartItem.id === productItem.id);
        const productIsInFavorites = wishList.some((cartItem)=> cartItem.id === productItem.id);
        // const productIsInFavorites = false; // TODO productIsInFavorites

        return (
            <div className="card-item" data-name={productItem.name}>
                <img className="card-image" src={productItem.url} alt='product-image'/>
                <div className="card-description">
                    <h3 className="card-header">{productItem.name}</h3>
                    <p className="card-price">{productItem.price}</p>
                    <p className="card-art">{productItem.code}</p>
                    <p  className="card-color">{productItem.color}</p>
                    <div className="card-btn" >
                        <ShoppingCart color ={prodIsInCart ? "red" : "green"} width = "22" className = 'svg-class --activate-cart-modal'
                                      handler={ listsHandler.bind(null, productItem.id) }/>
                        <Button btnCfg={appBtnCfg.get('cart')}
                                handler={ listsHandler.bind(null, productItem.id) }/>
                        <ShoppingWishList color={productIsInFavorites ? "red" : "blue"} width="22" className='svg-class --activate-wish-list-modal'
                                          handler={ listsHandler.bind(null, productItem.id) }   />
                    </div>
                </div>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Card.js-----> componentDidUpdate()");
    }
    // componentDidMount() {
    //     const cartSvg = document.querySelector('.svg-class');
    //     cartSvg.addEventListener("click", this.cartHandler.bind(null, this.props.productItem.id))
    // }
}
Card.propTypes = {
    productItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        url: PropTypes.string,
        code: PropTypes.string,
        color: PropTypes.string
    }),
    listsHandler: PropTypes.func
};

export default Card;