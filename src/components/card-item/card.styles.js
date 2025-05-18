import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	padding: 1.9375rem 1.8125rem 1.9375rem 1.8125rem;
	align-items: center;
	gap: 2rem;
	background-color: ${COLORS.white};
	border-radius: 0.625rem;
`;
const StyledCardPro = styled(StyledCard)`
	background-image: ${COLORS.gradient};
`;

const StyledTitle = styled.h2`
	font-size: 1.125rem;
	line-height: 1.75rem;
`;
const StyledTitleProfessional = styled(StyledTitle)`
	color: ${COLORS.white};
`;

const StyledPrice = styled.span`
	font-size: 4.5rem;
	line-height: 4.4375rem;
	letter-spacing: -0.135rem;
`;
const StyledPricePro = styled(StyledPrice)`
	color: ${COLORS.white};
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	align-items: center;
	justify-content: center;
`;

const StyledText = styled.span`
	color: ${COLORS.white};
`;
const StyledLineContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 269px;
	border-top: 1px solid ${COLORS.primary700};
	border-bottom: 1px solid ${COLORS.primary700};
	padding-block: 12px;
`;
const StyledLineContainerPro = styled(StyledLineContainer)`
	border-top: 1px solid ${COLORS.white};
	border-bottom: 1px solid ${COLORS.white};
`;

export {
	StyledCard,
	StyledTitle,
	StyledTitleProfessional,
	StyledCardPro,
	StyledPrice,
	StyledPricePro,
	StyledContainer,
	StyledText,
	StyledLineContainer,
	StyledLineContainerPro
};
