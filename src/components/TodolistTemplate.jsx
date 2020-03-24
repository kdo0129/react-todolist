import React from 'react';
import styled from 'styled-components';

const TodolistTemplateBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 700px;
	border-radius: 15px;
	box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.25);
	overflow: hidden;
	background: #f8f9fa;
`;

const TodolistTemplate = ({ children }) => {
	return <TodolistTemplateBlock>{children}</TodolistTemplateBlock>;
};

export default TodolistTemplate;
