import * as React from 'react';
import { View, Text } from 'react-native';
import PortfolioStyle from './PortfolioStyle';
import IndexText from './IndexText';

export default function IndexFirst(props) {
	
	return(
		
		<View style={PortfolioStyle.indexItemFirst}>
			<IndexText>
				{props.children}
			</IndexText>
		</View>
		
	);
	
}