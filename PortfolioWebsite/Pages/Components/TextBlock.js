import * as React from 'react';
import { Text, View} from 'react-native';
import PortfolioStyle from './PortfolioStyle';

export default function TextBlock(props) {
	
	return(
		
		<Text style={[PortfolioStyle.contentText,]}>
			{props.children}
		</Text>
	);
	
}