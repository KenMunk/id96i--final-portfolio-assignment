import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';

import DocView from './Components/DocView';
import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';

import Integration1 from './PageContent/Integration Reflection/integration1';
import Integration2 from './PageContent/Integration Reflection/integration2';
import Integration3 from './PageContent/Integration Reflection/integration3';

export default function Integration(){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1024;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	const pageWidth = 850;
	console.log(scaleValue);
	
	return(
		<BaseContent title="Integration Reflection">
			<DocView>
				<Integration1 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Integration2 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Integration3 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
		</BaseContent>
	);
	
}