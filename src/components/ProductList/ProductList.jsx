import React, {PureComponent} from 'react';
import Card from '../Card/Card.jsx';
import './productList.scss';

class ProductList extends PureComponent {
    render() {
        const {products, cartHandler} = this.props;
        const cardlist = products.map(productItem =>
            <Card key={productItem.id}
                  productItem={productItem}
                  cartHandler={cartHandler}/>
        );

        return (
            <div className="card-list">
                {cardlist}
            </div>
        );
    }
}

export default ProductList;