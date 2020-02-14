import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from '../../../config/store';
import { navigate, showAlert, showProgress } from '../../services/logic/actions';

const Home = () => {
	const dispatch = useDispatch();
	return (
		<View>
			<Text>Hi, Home Component!</Text>
			<Button title={'show alert'} onPress={() => {
				dispatch(showAlert('warn', 'sadlkjf'));
			}} />
			<Button title={'show progress'} onPress={() => {
				dispatch(showProgress('sdljf'));
			}} />

			<Button title={'navigate'} onPress={() => {
				dispatch(navigate('About'));
			}} />

		</View>
	);
};

export default Home;
