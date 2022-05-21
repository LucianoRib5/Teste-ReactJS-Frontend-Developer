import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background: #d4edfa;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	background: #ffffff;

	@media(min-width: 768px){
		display: flex;
		border-radius: 30px;
		height: 80vh;
		width: 400px;
    };
`;

export const ContainerHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-grow: 1;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 80%;
`;

export const Subtitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 20%;
`;

export const ContainerForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-grow: 2;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	gap: 1rem;
`;


export const ContainerFooter = styled.footer`
	display: flex;
	justify-content: center;
	gap: .3rem;
	width: 100%;
	flex-grow: 1;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
	color: inherit;
`;