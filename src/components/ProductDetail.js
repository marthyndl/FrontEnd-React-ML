import React, { Component } from 'react';
import ML from "../api/ML";
import NotFound from './NotFound';
import Breadcrumb from './Breadcrumb';

class ProductDetail extends Component {
    state = {
        product: null,
        categories: [],
        error: false
    }

    componentDidMount(){
        if(this.props.match){
            let id = this.props.match.params.id;
            this.fetchProduct(id);

        }
    }

    componentWillReceiveProps({match}) {
        if(match){
            let id = match.params.id;
            this.fetchProduct(id);
        }
    }

    async fetchProduct(id){
        try {
            let {data} = await ML.get(`/api/items/${id}`);
            this.setState({ product: data.item, categories: data.categories});
        }catch ({response}) {
            if(response.data.status === 404){
                this.setState({error: true})
            }
        }
    }

    renderDetail(){
        const { product } = this.state;
        if(!product){
            return <div></div>
        }

        return (
            <div className="row product-detail">
                <div className="col-md-8">
                    <figure>
                        <img src={product.picture} alt={product.title}/>
                    </figure>
                    <div className="description p-4">
                        <h3>Descripción del producto</h3>
                        <p>
                            { (product.description) ? product.description : 'La tienda no incluyó una descripción del producto' }
                        </p>
                    </div>
                </div>
                <div className="col-md-4 short-description">
                    <div className="row">
                        <div className="col-md-12 pl-4">
                            {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)} - {product.sold_quantity} vendidos
                        </div>
                    </div>
                    <div className="p-2">
                        <h3>
                            <strong>{product.title}</strong>
                        </h3>
                    </div>
                    <div className="p-2">
                        <h1>
                            $ {(parseInt(product.price.amount)).toLocaleString()}
                            <span className="decimals">{product.price.decimals}</span>
                        </h1>
                    </div>
                    <div className="p-2">
                        <button type="button" className="btn btn-primary btn-lg btn-block">Comprar</button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="container d-flex flex-column">
                <NotFound show={this.state.error}/>
                <Breadcrumb elements={this.state.categories}/>
                <div className="flex-grow-1 bg-white rounded detail-box">
                    {this.renderDetail()}
                </div>
            </div>
        )
    }
}

export default ProductDetail;