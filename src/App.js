import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodolistTemplate from './components/TodolistTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  body{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:100vh;
    background: rgb(172,172,224);
    background: linear-gradient(90deg, rgba(172,172,224,1) 0%, rgba(233,232,245,1) 100%);
  }
`;

function App() {
	return (
		<TodoProvider>
			<GlobalStyle />
			<TodolistTemplate>
				<TodoHead />
				<TodoList />
			</TodolistTemplate>
		</TodoProvider>
	);
}

export default App;
