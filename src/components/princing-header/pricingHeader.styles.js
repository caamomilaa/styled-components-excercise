import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledPricingHeader = styled.h1`
	color: ${COLORS.primary700};
	text-align: center;
`;

const StyledPrincingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
`;

const StyledPricingText = styled.span`
	color: ${COLORS.primary700};
	font-weight: 700;
	line-height: 1.75rem;
`;

const StyledLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 3.5rem;
	height: 2rem;
	border-radius: 1rem;
	background-image: ${COLORS.gradient};
	&::before {
		content: '';
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: ${COLORS.white};
		translate: 5px 4px;
		transition: translate 0.2s;
	}
`;
const StyledInput = styled.input`
	display: none;

	&:checked + ${StyledLabel}::before {
		translate: 26px 4px;
	}
`;

export {
	StyledPricingHeader,
	StyledPricingText,
	StyledPrincingContainer,
	StyledInput,
	StyledLabel
};
