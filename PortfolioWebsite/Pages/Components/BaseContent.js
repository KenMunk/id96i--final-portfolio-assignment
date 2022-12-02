import * as React from 'react';
import {View} from 'react-native';
import PortfolioStyle from './PortfolioStyle';
import SideBar from './SideBar';
import ContentColumn from './ContentColumn';

export default function BaseContent(props) {
	
	return(
		<View style={PortfolioStyle.baseview}>
			<SideBar/>
			<ContentColumn>
				{props.children}
			</ContentColumn>
		</View>
	);
	
}