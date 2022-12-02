import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import PortfolioStyle from './PortfolioStyle';


export default function ContentColumn(props) {
	const {height, width} = useWindowDimensions();
	return(
		<View style={[PortfolioStyle.contentSpace,{width:width-320, height:'100%'}]}>
			<View style={PortfolioStyle.contentColumn}>
				{props.children}
			</View>
		</View>
	);
	
}