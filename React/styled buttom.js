export const ButtonSave = styled.button`
	border-radius: 4px;
	background-color: #5ca1e1;
	border: none;
	color: #fff;
	text-align: center;
	font-size: 14px;
    padding: 10px;
	width: 100%;
	transition: all 0.5s;
	cursor: pointer;
	box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
	display: inline-block;
	position: relative;
	transition: 0.5s;
	cursor: pointer;

	&:after {
		content: '»';
		position: absolute;
		opacity: 0;
		top: -2px;
    	font-size: 30px;
		right: -20px;
		transition: 0.5s;
	}

	&:hover{
		padding-right: 24px;
		padding-left:8px;
	}

	&:hover:after {
		opacity: 1;
		right: 10px;
	}

	&:active{
		position: relative;
		top: 1px;
	}
`;