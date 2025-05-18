import {
	StyledCard,
	StyledCardPro,
	StyledContainer,
	StyledLineContainer,
	StyledLineContainerPro,
	StyledPrice,
	StyledPricePro,
	StyledText,
	StyledTitle,
	StyledTitleProfessional
} from './card.styles';

const CardItem = ({ title, price, storage, users, sending }) => {
	if (title === 'Professional') {
		return (
			// <article>
			// 	<Red>Red</Red>
			// </article>
			<StyledCardPro>
				<StyledTitleProfessional>{title}</StyledTitleProfessional>
				<StyledPricePro>${price}</StyledPricePro>
				<StyledContainer>
					<StyledLineContainerPro>
						<StyledText>{storage} Storage</StyledText>
					</StyledLineContainerPro>
					<StyledText>{users} Users Allowed</StyledText>
					<StyledLineContainerPro>
						<StyledText>Send up to {sending}</StyledText>
					</StyledLineContainerPro>
				</StyledContainer>
				<button>LEARN MORE</button>
			</StyledCardPro>
		);
	} else {
		return (
			<StyledCard>
				<StyledTitle>{title}</StyledTitle>
				<StyledPrice>${price}</StyledPrice>
				<StyledContainer>
					<StyledLineContainer>
						<span>{storage} Storage</span>
					</StyledLineContainer>
					<span>{users} Users Allowed</span>
					<StyledLineContainer>
						<span>Send up to {sending}</span>
					</StyledLineContainer>
				</StyledContainer>
				<button>LEARN MORE</button>
			</StyledCard>
		);
	}
};

export default CardItem;
