import React from 'react'
import PropTypes from 'prop-types'

function ShopItem(props) {
    return (
        <div className="item">
            <img src={props.img} alt={props.name} className="item__img" />
            <h4 className="item__title">{props.name}</h4>
            <p className="item__color">{props.color}</p>
            <span className="item__price">${props.price}</span>
            <button className="item__btn">Add to cart</button>
        </div>
    )
}

ShopItem.propTypes = {

}

export default ShopItem

