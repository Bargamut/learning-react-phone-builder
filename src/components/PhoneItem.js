import React, { Component } from 'react';

/**
 * @description PhoneItem component
 * @author Paul "Bargamut" Petrov
 * @date 2019-02-04
 * @class PhoneItem
 * @extends {Component}
 */
class PhoneItem extends Component {
	// If need to watch everything changes, use PureComponent
	// import React, { PureComponent } from 'react';
	// class PhoneItem extends PureComponent {
	constructor (props) {
		super(props);

		// Инициализация состояния
		this.state = {
			count: 0
		};

		this.incrementCounter = incrementCounter.bind(this);
	}

	// Must be commented if use PureComponent
	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.isOpen !== nextProps.isOpen ||
			this.state.count !== nextState.count
		);
	}

	componentWillMount() { console.log('---', 'Mounting'); }

	// // Только если изменяется кто-то из родителей и могли поменяться props
	// componentWillReceiveProps(nextProps) {
	//   console.log('---', 'Will recieve props');
	//   if (nextProps.defaultOpen !== this.props.defaultOpen)
	//     this.setState({
	//       isOpen: nextProps.defaultOpen
	//     });
	// }

	// Изменится вне зависимости от того, внутри компонента изменения или у родителя
	componentWillUpdate() {
		console.log('---', 'Will update');
	}

	render() {
		const {phoneItem, isOpen, onBtnClick} = this.props,
					style = { width: '50%' },
					body = isOpen
						? (<div className="card-body">{phoneItem.title}</div>)
						: '';

		let btnCaption = isOpen ? 'Скрыть' : 'Показать';

		return (
			<div className="card mx-auto" style={style}>
				<div className="card-header" onClick={this.incrementCounter}>
					<button className="btn btn-primary btn-lg float-right" onClick={onBtnClick}>
						{btnCaption}
					</button>

					<h3>{phoneItem.title}</h3>

					<span>Clicked: {this.state.count}</span>
				</div>

				{body}
			</div>
		);
	}
}

/**
 * @description Increment counter of clicks on item
 * @author Paul "Bargamut" Petrov
 * @date 2019-02-04
 */
function incrementCounter() {
	console.log(this.state);

	this.setState({
		count: this.state.count + 1
	});
}

export default PhoneItem;