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

function getRangeRandom(low,high){
	return Math.ceil(Math.random()*(high-low)+low);
}

function get30DegRandom() {
	return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
}

class ImgFigure extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		// 如果点击的是当前正在选中态的按钮，则翻转图片，否则将对应的图片居中
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.preventDefault();
		e.stopPropagation();
	}
	
	render(){
		var styleObj = {};
		if(this.props.arrange.pos){
			styleObj = this.props.arrange.pos;
		}
		if (this.props.arrange.rotate) {
			(['MozTransform', 'msTransform', 'WebkitTransform', 'transform']).forEach(function (value) {
				styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
			}.bind(this));
		}

		// 如果是居中的图片， z-index设为11
		if (this.props.arrange.isCenter) {
			styleObj.zIndex = 11;
		}

		var imgFigureClassName = 'img-figure';
				imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
		return (
			<figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
					<img src={this.props.data.imageURL}
							 alt={this.props.data.title}
					/>
					<figcaption>
						<h2 className="img-title">{this.props.data.title}</h2>
						<div className="img-back" onClick={this.handleClick}>
							<p>
								{this.props.data.desc}
							</p>
						</div>
					</figcaption>
			</figure>
		)
	}
}


// 控制组件
class ControllerUnit extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		// 如果点击的是当前正在选中态的按钮，则翻转图片，否则将对应的图片居中
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.preventDefault();
		e.stopPropagation();
	}
	render(){
		var controlelrUnitClassName = "controller-unit";

		// 如果对应的是居中的图片，显示控制按钮的居中态
		if (this.props.arrange.isCenter) {
				controlelrUnitClassName += " is-center";

				// 如果同时对应的是翻转图片， 显示控制按钮的翻转态
				if (this.props.arrange.isInverse) {
						controlelrUnitClassName += " is-inverse";
				}
		}

		return (
			<span className={controlelrUnitClassName} onClick={this.handleClick}></span>
		);
	}
}

class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			imgsArrangeArr:[
				{
					/*pos:{
						left:'0',
						top:'0'
					}*/
				}
			]
		};
		this.Constant = {
			centerPos:{
				left:0,
				right:0
			},
			hPosRange:{
				leftSecX:[0,0],
				rightSecX:[0,0],
				y:[0,0]
			},
			vPosRange:{
				x:[0,0],
				topY:[0,0]
			}
		};
		
	}
	inverse(index) {
		return function () {
			var imgsArrangeArr = this.state.imgsArrangeArr;

			imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

			this.setState({
				imgsArrangeArr: imgsArrangeArr
			});
		}.bind(this);
	}

	rearrange(centerIndex){
		var imgsArrangeArr = this.state.imgsArrangeArr,
			Constant = this.Constant,
			centerPos = Constant.centerPos,
			hPosRange = Constant.hPosRange, 
			vPosRange = Constant.vPosRange, 
			hPosRangeLeftSecX = hPosRange.leftSecX,
			hPosRangeRightSecX = hPosRange.rightSecX,
			hPosRangeY = hPosRange.y,
			vPosRangeTopY = vPosRange.topY,
			vPosRangeX = vPosRange.x,

			imgsArrangeTopArr = [],
			topImgNum = Math.ceil(Math.random()*2),
			topImgSpliceIndex = 0,
			imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);

		imgsArrangeCenterArr[0] = {
				pos: centerPos,
				rotate: 0,
				isCenter: true
			};

		topImgSpliceIndex = Math.ceil(Math.random()*(imgsArrangeArr.length - topImgNum));
		imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);

		imgsArrangeTopArr.forEach(function (value, index) {
					imgsArrangeTopArr[index] = {
						pos: {
								top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
								left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
						},
						rotate: get30DegRandom(),
						isCenter: false
					};
			});

		for(var i=0,j=imgsArrangeArr.length,k=j/2;i<j;i++){
			var hPosRangeLORX = null;
			if(i<k){
				hPosRangeLORX = hPosRangeLeftSecX;
			}else{
				hPosRangeLORX = hPosRangeRightSecX;
			}
			imgsArrangeArr[i] = {
						pos: {
								top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
								left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
						},
						rotate: get30DegRandom(),
						isCenter: false
					};
		}
		if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
			imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
		}
		imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0]);
		this.setState({
			imgsArrangeArr:imgsArrangeArr
		});
	}

	center(index) {
		return function () {
			this.rearrange(index);
		}.bind(this);
	}

	componentWillMount(){}
	componentDidMount(){
		// 图片加载后为每张图片计算其位置范围
		// console.log(ReactDOM.findDOMNode);
		var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
			stageW = stageDOM.scrollWidth,
			stageH = stageDOM.scrollHeight,
			halfStageW = Math.ceil(stageW/2),
			halfStageH = Math.ceil(stageH/2);
		var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgfig0),
			imgW = imgFigureDOM.scrollWidth,
			imgH = imgFigureDOM.scrollHeight,
			halfImgW = Math.ceil(imgW/2),
			halfImgH = Math.ceil(imgH/2);
		//计算中心图片位置点
		this.Constant.centerPos = {
			left:halfStageW - halfImgW,
			top:halfStageH - halfImgH
		};
		//计算左侧图片位置点
		this.Constant.hPosRange.leftSecX[0] = -halfImgW;
		this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW*3;
		this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
		this.Constant.hPosRange.rightSecX[1] = stageW-halfImgW;
		this.Constant.hPosRange.y[0] = -halfImgH;
		this.Constant.hPosRange.y[1] = stageH - halfImgH;
		this.Constant.vPosRange.x[0] = -halfImgH;
		this.Constant.vPosRange.x[1] = halfStageH - halfImgH*3;
		this.Constant.vPosRange.topY[0] = halfStageW - imgW;
		this.Constant.vPosRange.topY[1]= halfStageW;

		this.rearrange(0);
	}
	componentWillUnmount(){}
	shouldComponentUpdate(){return true;}
	componentWillUpdate(){}
	componentDidUpdate(){}
	render(){
		var ctrlUnits = [],
			imgFigures = [];
		imageJson.forEach((item,index)=>{
			if(!this.state.imgsArrangeArr[index])
				this.state.imgsArrangeArr[index] = {
					pos:{
						left:0,
						top:0
					},
					rotate: 0,
					isInverse: false,
					isCenter: false
				}
			imgFigures.push(<ImgFigure 
				key={"key"+index} 
				ref={"imgfig"+index} 
				arrange={this.state.imgsArrangeArr[index]} 
				data={item}
				inverse={this.inverse(index)} 
				center={this.center(index)}/>);
			ctrlUnits.push(
				<ControllerUnit 
				key={index} 
				arrange={this.state.imgsArrangeArr[index]} 
				inverse={this.inverse(index)} 
				center={this.center(index)}/>
			);
		});
		return (
			<section className="stage" ref="stage">
				<section className="img-sec">
					{imgFigures}
				</section>
				<nav className="ctrl-nav">
					{ctrlUnits}
				</nav>
			</section>
		);
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});
