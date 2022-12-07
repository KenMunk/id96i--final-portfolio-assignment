import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';
import PortfolioStyle from './PortfolioStyle';

export default function Heading(props) {
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1440;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	
	return(
		<View style={PortfolioStyle.textHeadingView}>
			<Text style={[PortfolioStyle.textHeading,{fontSize: 60*scaleValue,}]}>
				{props.children}
			</Text>
		</View>
	);
	
}