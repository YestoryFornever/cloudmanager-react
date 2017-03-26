import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
	render(){
		return (<small>footer</small>);
	}
}

export default class SubMessage extends React.Component{
	componentWillReceiveProps(props) {
		// debugger;
	}
	subfn(){
		console.info('...info');
	}
	render(){
		let messages = this.props.messages.map((item)=>{
			return <p key={item}>{item}</p>
		});
		return <div><h2 onClick={this.props.supfn}>{messages}</h2><Footer/></div>
	}
}
SubMessage.defaultProps = {messages: ['点击调用supfn']};
SubMessage.propTypes = {
	messages:React.PropTypes.array.isRequired,
};