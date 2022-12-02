import * as React from 'react';
import { Text } from 'react-native';
import PortfolioStyle from './PortfolioStyle';

export default function IndexText(props) {
	
	return(
		
		<Text style={PortfolioStyle.indexFont}>
			{props.children}
		</Text>
		
	);
	
}