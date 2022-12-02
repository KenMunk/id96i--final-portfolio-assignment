import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

//Menu bar content space
const topBarHeight = 50;

const colorPrimary = '#ffffff';
const colorSecondary = '#dddffd';
const colorTertiary = '#bbbffb';
const accentPrimary = '#dddddd';
const colorSecondaryHover = '#aaacca';
const colorSecondaryActive = '#aaafff';
const TitleColor = '#2222dd';
const H1Color = '#4444dd';
const H2Color = '#6666dd';
const TextColor = '#111155';

const standardRadius = 20;

//Can't use this here
//const maxWidth = useWindowDimensions().width;
const maxWidth = 1920;
const indexWidth = 300;

const PortfolioStyle = StyleSheet.create({
	
	baseview: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		height: '100%',
		
		//content alignment
		alignItems: 'flex-start',
		backgroundColor: accentPrimary,
		
	},
	
	topBar: {
		flexDirection: 'row',
		width: '100%',
		height: topBarHeight,
		backgroundColor: colorSecondary,
	},
	
	contentSpace: {
		flexDirection: 'Column',
		
		//content alignment
		justifyContent: 'center',
		alignItems: 'flexStart',
		backgroundColor: colorPrimary,
	},
	
	contentColumn: {
		
		flexDirection: 'column',
		height: '100%',
		width: '90%',
		
		//content alignment
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: colorPrimary,
		
	},
	
	indexColumn: {
		flexDirection: 'column',
		width: indexWidth,
		
		//content alignment
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: accentPrimary,
	},
	
	indexSection: {
		flexDirection: 'Column',
		
		borderTopRightRadius: standardRadius,
		borderBottomRightRadius: standardRadius,
		width: indexWidth - 20,
		
		borderWidth: 2,
		borderColor: colorPrimary,
		
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingVertical: 5,
		
	},
	
	indexItemFirst: {
		flexDirection: 'Column',
		
		borderTopRightRadius: standardRadius,
		borderBottomRightRadius: standardRadius,
		
		width: indexWidth - 40,
		height: 50,
		
		borderWidth: 2,
		borderColor: colorPrimary,
		backgroundColor: colorTertiary,
		
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 10,
		
	},
	
	indexItemSecond: {
		flexDirection: 'Column',
		
		borderTopRightRadius: standardRadius,
		borderBottomRightRadius: standardRadius,
		width: indexWidth - 40,
		height: 50,
		
		borderWidth: 2,
		borderColor: colorPrimary,
		backgroundColor: colorTertiary,
		
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 50,
		
	},
	
	indexItemActive: {
		backgroundColor: colorSecondaryActive,
	},
	
	indexItemInactive: {
		backgroundColor: colorSecondary,
	},
	
	indexItemHover: {
		backgroundColor: colorSecondaryHover,
	},
	
	titleFont: {
		color: TitleColor,
		fontSize: 32,
	},
	
	indexFont: {
		color: H1Color,
		fontSize: 16,
	},
	
	
	
	//main content items go in content column as content page/tab
	
	mainContentItem: {
		flexDirection: 'column',
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: colorPrimary,
	},
	
});

export default PortfolioStyle;