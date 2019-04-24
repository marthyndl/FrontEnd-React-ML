import React, { Component }  from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    onInputChange = (event) => {
        event.preventDefault();
        this.setState({term: event.target.value});
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-warning">
                <div className="container">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-row align-items-center">
                            <a href="/" className="navbar-brand">
                                <img src="https://http2.mlstatic.com/ui/navigation/4.2.2/mercadolibre/logo__small.png" width="40" height="30" alt=""/>
                            </a>
                            <div className="col">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nunca dejes de buscar"
                                        aria-label="Nunca dejes de buscar"
                                        value={this.state.term}
                                        onChange={this.onInputChange}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-light" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}

export default SearchBar;