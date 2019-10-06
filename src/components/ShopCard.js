import React from 'react'
import PropTypes from 'prop-types'

function ShopCard(props) {
    return (
        <div className="card">
            <div className="card__header">
                <h4 className="card__title">{props.name}</h4>
                <p className="card__color">{props.color}</p>
            </div>
            <img src={props.img} alt={props.name} className="card__img" />
            <div className="card__footer">
                <span className="card__price">${props.price}</span>
                <button className="card__btn">Add to cart</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {

}

export default ShopCard

