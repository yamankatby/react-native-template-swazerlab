import React, { useCallback, useState } from 'react';
import { Linking, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Table, { Section, StaticCell } from 'react-native-js-tableview';
import { useTellFriend } from './More';
import { useDispatch, useSelector } from '../../../config/store';
import { navigate } from '../../services/logic/actions';
import { usePalette, useTheme } from '../../../assets/styles';
import { useHelpCenterStyles } from './styles';
import language from '../../../assets/language';

const HelpCenter = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const palette = usePalette();
	const styles = useHelpCenterStyles();

	const onTellFriendTouched = useTellFriend();

	const faqURL = useSelector(state => state.settings.faqURL);
	const privacyPolicyURL = useSelector(state => state.settings.privacyPolicyURL);
	const serviceTermsURL = useSelector(state => state.settings.serviceTermsURL);
	const supportTel = useSelector(state => state.settings.supportTel);

	const [touchCount, setTouchCount] = useState(0);

	const onTitleTouched = useCallback(() => {
		if (touchCount === 10) {
			setTouchCount(0);
			dispatch(navigate('TombRaider'));
		} else {
			setTouchCount(prevState => prevState + 1);
		}
	}, [touchCount]);

	const onFAQTouched = useCallback(() => {
		Linking.canOpenURL(faqURL).then(canOpen => canOpen && Linking.openURL(faqURL));
	}, [faqURL]);

	const onPrivacyPolicyTouched = useCallback(() => {
		Linking.canOpenURL(privacyPolicyURL).then(canOpen => canOpen && Linking.openURL(privacyPolicyURL));
	}, []);

	const onServiceTermsTouched = useCallback(() => {
		Linking.canOpenURL(serviceTermsURL).then(canOpen => canOpen && Linking.openURL(serviceTermsURL));
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				<TouchableWithoutFeedback onPress={onTitleTouched}>
					<View>
						<Text style={styles.title}>{language.textHelpCenter}</Text>
					</View>
				</TouchableWithoutFeedback>
				<Text style={styles.text}>{language.textNeedHelp}</Text>

				<Table
					style={styles.infoContainer}
					theme={theme === 'dark' ? 'midnight' : 'light'}
					accentColor={palette.accent()}
					scrollable
				>
					<Section>
						<StaticCell
							title={language.actionContactUs}
							accessory="disclosure"
							hideAccessorySeparator
						/>

						<StaticCell
							title={language.actionFAQ}
							accessory="disclosure"
							hideAccessorySeparator
							onPress={onFAQTouched}
						/>

						<StaticCell
							title={language.actionPrivacyPolicy}
							accessory="disclosure"
							hideAccessorySeparator
							onPress={onPrivacyPolicyTouched}
						/>

						<StaticCell
							title={language.actionServiceTerms}
							accessory="disclosure"
							hideAccessorySeparator
							onPress={onServiceTermsTouched}
						/>
					</Section>

					<Section>
						<StaticCell
							title={language.actionTellFriend}
							accessory="disclosure"
							hideAccessorySeparator
							onPress={onTellFriendTouched}
						/>

						<StaticCell
							title={language.titleAbout}
							accessory="disclosure"
							hideAccessorySeparator
							onPress={() => dispatch(navigate('About'))}
						/>
					</Section>
				</Table>
			</ScrollView>
		</View>
	);
};

export default HelpCenter;
