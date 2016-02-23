/*
 global document
 */
import './styles/style.less';
import React from 'react';
import { render } from 'react-dom'
import Routes from './routes';

let reactElement = document.getElementById('react');

render(
	<Routes/>,
	reactElement
);