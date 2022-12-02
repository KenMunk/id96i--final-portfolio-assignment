import * as React from 'react';
import { Text, View} from 'react-native';
import PortfolioStyle from './PortfolioStyle';

export default function PageTitle(props) {
	
	return(
		
		<Text style={[PortfolioStyle.pageTitleBox,]}>
			{props.children}
		</Text>
	);
	
}