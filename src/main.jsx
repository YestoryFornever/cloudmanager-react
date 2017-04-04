import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {createStore} from 'redux';

const reducer = (state=0,action)=>{
	return state;
};

const store = createStore(reducer);

const Counter = ({value})=>{
	return (<h1>{value}</h1>)
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
