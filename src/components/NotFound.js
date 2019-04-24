import React, { Component } from 'react';

class NotFound extends Component {
    renderError(show){
        if (show) {
            return (
                <div className="container">
                    <div className="not-found">
                        <span><i className="fa fa-frown fa-4x"></i></span>
                        <p class="title">Oops... Sorry, Page not found !!!</p>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
    render(){
        return <div className="error-box">{this.renderError(this.props.show)}</div>
    }
}

export default NotFound;