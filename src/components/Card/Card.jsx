import React, {PureComponent} from 'react';
import Button from "../Button/Button";
import appBtnCfg from "../Button/appBtnCfg";
import PropTypes from 'prop-types';
import {ShoppingCart} from '../../icons/shoppingCart';

class Card extends PureComponent {
    state = {alreadyInCart: false};

    render() {
        const {productItem, cartHandler, cart} = this.props;
        const prodIsInCart = cart.some((cartItem)=> cartItem.id === productItem.id);

        return (
            <div className="card-item" data-name={productItem.name}>
                <img className="card-image" src={productItem.url} alt='product-image'/>
                <div className="card-description">
                    <h3 className="card-header">{productItem.name}</h3>
                    <p className="card-price">{productItem.price}</p>
                    <p className="card-art">{productItem.code}</p>
                    <p  className="card-color">{productItem.color}</p>
                    <div className="card-btn" >
                        <ShoppingCart color ={prodIsInCart ? "red" : "green"} width = "22" className = 'svg-class'
                        cartHandler= {cartHandler.bind(null, productItem.id)} />
                        <Button btnCfg={appBtnCfg.get('b4')}
                                            handler={cartHandler.bind(null, productItem.id)}/>
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
    cartHandler: PropTypes.func
};

export default Card;