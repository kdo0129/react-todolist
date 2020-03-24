import React from 'react';
import TodoCreate from './TodoCreate';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import Clock from 'react-live-clock';

const TodoHeadBlock = styled.div`
	position: relative;
	padding: 30px 32px 25px;
	border-bottom: 1px solid #dee2e6;
	h2.day {
		margin: 0;
		color: #8b8efb;
		font-size: 32px;
		span {
			font-weight: normal;
			font-size: 25px;
		}
	}
	p.month {
		margin: 0;
		margin-top: 15px;
		color: #b1b2c4;
		font-size: 19px;
	}
	p.left-task {
		position: absolute;
		right: 30px;
		top: 35px;
		font-size: 15px;
		letter-spacing: -0.5px;
		color: #868e96;
		font-weight: 500;
	}
`;

const TodoHead = () => {
	const todos = useTodoState();
	const undoneTasks = todos.filter((todo) => todo.done === false);
	console.log(todos);
	return (
		<TodoHeadBlock>
			<h2 className="day">
				<Clock format={'dddd'} />
				<span>
					&nbsp;&nbsp;
					<Clock format={'Do'} />
				</span>
			</h2>
			<p className="month">
				<Clock format={'MMMM, YYYY,  A hh:mm:ss'} timezone={'Asia/Seoul'} />
			</p>
			<p className="left-task">{undoneTasks.length} Tasks left</p>
			<TodoCreate />
		</TodoHeadBlock>
	);
};

export default TodoHead;
