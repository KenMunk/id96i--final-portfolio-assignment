import * as React from 'react';
import {View} from 'react-native';
import PortfolioStyle from './PortfolioStyle';
import SideBar from './SideBar';
import ContentColumn from './ContentColumn';
import PageTitle from './PageTitle';

export default function BaseContent(props) {
	
	return(
		<View style={PortfolioStyle.baseview}>
			<SideBar/>
			<ContentColumn>
				<PageTitle>{props.title}</PageTitle>
				{props.children}
			</ContentColumn>
		</View>
	);
	
}