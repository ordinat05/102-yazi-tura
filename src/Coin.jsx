import React, { Component } from 'react'
import "./Coin.css"

class Coin extends Component {
	render() {
		return (
			<div className='Coin' >
				🍀 This Component is  Coin.jsx
				<img src={this.props.info.imgSrc} alt={this.props.info.side} />
			</div>
		)
	}
}

export default Coin
