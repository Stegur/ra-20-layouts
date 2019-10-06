import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch(props) {

    const icon = props.icon;
    const onSwitch = props.onSwitch;

    return (
        <div className="toolbar">
            <i class="material-icons toolbar__item" onClick={onSwitch}>{icon}</i>
        </div>
    )
}

IconSwitch.propTypes = {

}

export default IconSwitch

