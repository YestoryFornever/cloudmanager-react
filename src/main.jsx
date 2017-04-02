import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import AddTodo from './containers/add-todo';
import VisibleTodoList from './containers/visible-todo-list';
import Footer from './components/footer';

const Hello = ()=>{
	<div>
		<AddTodo/>
		<VisibleTodoList/>
		<Footer/>
	</div>
}
/*ReactDOM.render(<Hello/>,document.getElementById('app'),()=>{
	console.log('渲染完成了！');
});*/
