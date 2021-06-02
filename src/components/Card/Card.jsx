import React, {PureComponent} from 'react';
import Button from "../Button/Button";
import appBtnCfg from "../Button/appBtnCfg";

class Card extends PureComponent {
    render() {
        const {productItem, cartHandler} = this.props;
        return (
            <div className="card-item" data-name={productItem.name}>
                <img className="card-image" src={productItem.url} alt='product-image'/>
                <div className="card-description">
                    <h3 className="card-header">{productItem.name}</h3>
                    <p className="card-price">{productItem.price}</p>
                    <p className="card-art">{productItem.code}</p>
                    <p  className="card-color">{productItem.color}</p>
                    <div className="card-btn" >
                        {/*<svg></svg>*/}
                        <Button btnCfg={appBtnCfg.get('b4')}
                                            handler={cartHandler.bind(null, productItem.id)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;