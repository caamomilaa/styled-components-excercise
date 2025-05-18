import { MONTHLY_INFO } from '../../constants/monthlyInfo';
import { v4 } from 'uuid';
import CardItem from '../card-item/CardItem';
import { ANUALLY_INFO } from '../../constants/anuallyInfo';

const PrincingCards = plan => {
	if (!plan) {
		return (
			<>
				<section>
					{MONTHLY_INFO.map(card => (
						<CardItem key={v4()} {...card} />
					))}
				</section>
			</>
		);
	} else {
		return (
			<>
				<section>
					{ANUALLY_INFO.map(card => (
						<CardItem key={v4()} {...card} />
					))}
				</section>
			</>
		);
	}
};
export default PrincingCards;
