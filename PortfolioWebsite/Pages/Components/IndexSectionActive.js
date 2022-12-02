import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PortfolioStyle from './PortfolioStyle';

export default function IndexSectionActive(props) {
	
	const navigation = useNavigation();
	return(
		<View 
			style={[PortfolioStyle.indexSection, PortfolioStyle.indexItemActive]}
			
			onClick={() => {
					navigation.navigate(props.destination);
					//Next action;
				}
			}
		>
			{props.children}
		</View>
	);
	
}