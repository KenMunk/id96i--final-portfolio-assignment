import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';
import PortfolioStyle from './PortfolioStyle';

export default function PageTitle(props) {
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1440;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	
	return(
		
		<Text style={[PortfolioStyle.pageTitleBox,{fontSize: 60*scaleValue,}]}>
			{props.children}
		</Text>
	);
	
}