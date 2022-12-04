import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import PortfolioStyle from './PortfolioStyle';

//import Pdf from 'react-native-pdf';
//import {WebView} from 'react-native-webview';

export default function DocView(props){
	
	
	return(
		<View style={[PortfolioStyle.docBorder]}>
			{props.children}
		</View>
	);
	
}
