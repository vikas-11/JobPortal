import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;
position: flex;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;


export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 50px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(210px, 1fr));
grid-gap: 5%;


@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
						margin-right: 70px;
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 15px;
font-size: 18px;
text-decoration: none;
font-weight:600;
&:hover {
	color: #7797FE;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 30px;
color: #7797FE;
margin-bottom: 40px;
font-weight:400;
`;

export const Headings = styled.p`
font-size: 42px;
color: #7797FE;
font-weight:400;
`;