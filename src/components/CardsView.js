import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'

function CardsView(props) {

    const cards = props.cards
    
    return (
        <div className="cards">
            {cards.map(card => <ShopCard name={card.name} price={card.price} color={card.color} img={card.img} />)}
        </div>
    )
}

CardsView.propTypes = {

}

export default CardsView