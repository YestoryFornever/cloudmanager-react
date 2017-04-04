import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {createStore} from 'redux';

const reducer = (state={num:0},action)=>{
	switch(action.type){
		case 'ADD':
			return {num:++state.num};
		case 'MINUS':
			return {num:--state.num};
		default:
			return state;
	}
};

const store = createStore(reducer);

const Counter = ({value})=>{//props
	function handleAdd(){
		store.dispatch(actionCreator('ADD'));
	}
	function handleMinus(){
		store.dispatch(actionCreator('MINUS'));
	}
	return (
		<div style={{margin:'0 auto',width:'100px'}}>
			<button type="button" onClick={handleAdd}>add</button>
			<button type="button" onClick={handleMinus}>minus</button>
			<h1>{value.num}</h1>
		</div>
	)
}

const actionCreator = (type)=>{
	return {
		type:type,
	}
}

const render = ()=>{
	ReactDOM.render(
		<Counter value={store.getState()}></Counter>,
		document.getElementById('app'),
		console.log('done!')
	);
}

store.subscribe(render);

render();


/*import AddTodo from './containers/add-todo';
import VisibleTodoList from './containers/visible-todo-list';
import Footer from './components/footer';*/
/*const Hello = ()=>{
	<div>
		<AddTodo/>
		<VisibleTodoList/>
		<Footer/>
	</div>
}*/
/*ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});*/
