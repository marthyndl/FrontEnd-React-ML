import React, { Component } from 'react';

class ProductItem extends Component {
    renderItem(){
        const {product, onProductSelect} = this.props;
        return (
            <div className="product-item">
                <div className="card flex-row flex-wrap p-5" onClick={onProductSelect}>
                    <img className="card-img-left" src={product.picture} alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            $ { (parseInt(product.price.amount)).toLocaleString()}
                            <span className="product-decimals">{product.price.decimals}</span>
                        </h5>
                        <p className="card-text">{product.title}</p>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}

export default ProductItem;