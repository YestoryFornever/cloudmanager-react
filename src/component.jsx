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
	render(){
		let messages = this.props.messages.map((item)=>{
			return <p key={item}>{item}</p>
		});
		return <div><h2>{messages}</h2><Footer/></div>
	}
}
SubMessage.defaultProps = {messages: ['默认值']};
SubMessage.propTypes = {
	messages:React.PropTypes.array.isRequired,
};