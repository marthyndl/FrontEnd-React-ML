import React, { Component } from 'react';
import queryString from 'query-string';
import ML from '../api/ML';
import history from "../history";
import NotFound from './NotFound';
import Breadcrumb from './Breadcrumb';
import ProductItem from './ProductItem';

class ProductList extends Component {
    state = {
        error: false,
        products: [],
        categories: [],        
    };

    componentDidMount(){
        if(this.props.location){
            let query = queryString.parse(this.props.location.search, { ignoreQueryPrefix: true })
                .search;
            if(query) this.fetchProducts(query);

        }
    }

    componentWillReceiveProps({location}) {
        this.setState({error:false});
        if(location){
            let query = queryString.parse(location.search, { ignoreQueryPrefix: true }).search;
            if(query) this.fetchProducts(query);
        }
    }

    async fetchProducts(query){
        try {
            let {data} = await ML.get('/api/items', {
                params: { q: query }
            });

            this.setState({ products: data.items, categories: data.categories});
        } catch ({response}){
            if(response.data.status === 404 || response.data.status === 400){
                this.setState({error: true})
            }
        }

    }

    onProductSelect = ({id}) => {
        history.push({ pathname: `/items/${id}` });
    }

    renderProducts(){

        const { products } = this.state;
        if(!products){
            return <div></div>
        }

        return products.map( product => {
            return <ProductItem key={product.id} product={product} onProductSelect={() => this.onProductSelect(product)}/>
        })
    }

    render(){
        return (
            <div className="container d-flex flex-column">
                <NotFound show={this.state.error}/>
                <Breadcrumb elements={this.state.categories}/>
                <div className="flex-grow-1">
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

export default ProductList;