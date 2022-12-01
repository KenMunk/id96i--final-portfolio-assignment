import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioStyle from './PortfolioStyle';

export default function IndexSection(props) {
	
	return(
		<View style={[PortfolioStyle.indexSection, PortfolioStyle.indexItemInactive]}>
			{props.children}
		</View>
	);
	
}