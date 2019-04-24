import React from 'react';

const renderElements = (elements) => {
    if(!elements){
        return <li></li>
    }

    return elements.map( element =>{
        return (
            <li className="breadcrumb-item" key={element.toString()}>
                {element}
            </li>
        )
    })
}

const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb-box">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    {renderElements(props.elements)}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;