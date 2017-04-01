import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import imageJson from './data/images.json';

(function(imageArr) {
	for(let i=0,j=imageArr.length;i<j;i++){
		let single = imageArr[i];
		single.imageURL = require('./images/'+single.fileName);
		imageArr[i] = single;
	}
})(imageJson);

class Hello extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){}
	componentDidMount(){}
	componentWillUnmount(){}
	shouldComponentUpdate(){}
	componentWillUpdate(){
		console.log('componentWillUpdate');
	}
	componentDidUpdate(){
		console.log('componentDidUpdate');
	}
	render(){
		return (
			<section className="stage">
				<section className="img-sec"></section>
				<nav className="ctrl-nav"></nav>
			</section>
		);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
