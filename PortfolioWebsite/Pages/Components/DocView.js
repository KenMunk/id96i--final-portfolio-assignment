import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import {PortfolioStyle} from './PortfolioStyle';

//import Pdf from 'react-native-pdf';
//import {WebView} from 'react-native-webview';

export default function DocView(props){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700))+250;
	
	
	return(
		<View style={{width: (width-buffer), height: ((width-buffer)*1.294), borderWidth: 2, borderRadius: 20}}>
			{props.children}
		</View>
	);
	
}
