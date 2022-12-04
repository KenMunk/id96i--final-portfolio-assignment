import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import PortfolioStyle from './PortfolioStyle';

//import Pdf from 'react-native-pdf';
//import {WebView} from 'react-native-webview';

export default function DocView(props){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1440;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	const pageWidth = 850;
	const scaleWidth = pageWidth * scaleValue;
	console.log(scaleValue);
	
	
	return(
		<View style={[PortfolioStyle.docBorder, {width: scaleWidth }]}>
			{props.children}
		</View>
	);
	
}
