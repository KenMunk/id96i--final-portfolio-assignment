import * as React from 'react';
import { Text, View} from 'react-native';
import PortfolioStyle from './PortfolioStyle';

export default function Heading(props) {
	
	return(
		<View style={PortfolioStyle.textHeadingView}>
			<Text style={[PortfolioStyle.textHeading,]}>
				{props.children}
			</Text>
		</View>
	);
	
}