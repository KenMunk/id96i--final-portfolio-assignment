import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioStyle from './PortfolioStyle';

export default function SideIndex({navigation}) {
	
	return(
		
		<View style={PortfolioStyle.indexColumn}>
			{props.children}
		</View>
	);
	
}