import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import PortfolioStyle from './PortfolioStyle';

export default function SideIndex(props) {
	const {height, width} = useWindowDimensions();
	
	return(
		
		<View style={[PortfolioStyle.indexColumn,]}>
			{props.children}
		</View>
	);
	
}