import {
	StyledInput,
	StyledLabel,
	StyledPricingHeader,
	StyledPricingText,
	StyledPrincingContainer
} from './pricingHeader.styles';

const PricingHeader = (plan, setPlan) => {
	return (
		<>
			<StyledPricingHeader>Our pricing</StyledPricingHeader>
			<StyledPrincingContainer>
				<StyledPricingText>Annually</StyledPricingText>
				<StyledInput
					type='checkbox'
					id='checkbox-input'
					onChange={() => setPlan(!plan)}
				/>
				<StyledLabel htmlFor='checkbox-input'></StyledLabel>
				<StyledPricingText>Monthly</StyledPricingText>
			</StyledPrincingContainer>
		</>
	);
};
export default PricingHeader;
