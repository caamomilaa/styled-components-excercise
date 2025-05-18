import { useState } from 'react';
import PrincingCards from './components/princing-cards/PrincingCards';
import PricingHeader from './components/princing-header/PricingHeader';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [plan, setPlan] = useState(false);
	return (
		<>
			<GlobalStyles />
			<PricingHeader plan={plan} setPlan={setPlan} />
			<PrincingCards plan={plan} />
		</>
	);
};

export default App;
