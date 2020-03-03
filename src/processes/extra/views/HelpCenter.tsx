import React from 'react';
import Table, { Section, StaticCell } from 'react-native-js-tableview';
import { useScreenTracker } from '../../../config/firebase';

const HelpCenter = () => {
	useScreenTracker('HelpCenter');
	return (
		<Table>
			<Section>
				<StaticCell title={'Contact Us'} />
				<StaticCell title={'Follow Us'} />
				<StaticCell title={'Frequently Asked Questions'} />
				<StaticCell title={'Privacy Policy'} />
				<StaticCell title={'Terms of Service'} />
			</Section>
			<Section>
				<StaticCell title={'Tell a Friend'} />
				<StaticCell title={'About'} />
			</Section>
		</Table>
	);
};

export default HelpCenter;
