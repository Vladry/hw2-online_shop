import React, {PureComponent} from 'react';
import Card from '../Card/Card.jsx';
import './productList.scss';
import PropTypes from "prop-types";

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('ProductList-----updated!');
    }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string,
            price: PropTypes.string.isRequired,
            code: PropTypes.string,
            color: PropTypes.string
        })
    ),
    cartHandler: PropTypes.func,
};
ProductList.defaultProps = {
// задание дефолтных значений для данного типа пропсов не реализуемо!
};

export default ProductList;