import * as React from 'react';
import { View, Text } from 'react-native';
import PortfolioStyle from './PortfolioStyle';
import IndexText from './IndexText';

export default function IndexSecond(props) {
	
	return(
		
		<View style={PortfolioStyle.indexItemSecond}>
			<IndexText>
				{props.children}
			</IndexText>
		</View>
		
	);
	
}