import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from "./ShopItem"

function ListView(props) {

    const items = props.items

    return (
        <div className="items">
            {items.map(item => <ShopItem name={item.name} price={item.price} color={item.color} img={item.img} />)}
        </div>
    )
}

ListView.propTypes = {

}

export default ListView

