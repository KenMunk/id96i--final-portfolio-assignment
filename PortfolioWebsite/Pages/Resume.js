import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';

import DocView from './Components/DocView';
import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';

import GeneralResume1 from './PageContent/Resume/GeneralResume1';
import GeneralResume2 from './PageContent/Resume/GeneralResume2';
import GeneralResume3 from './PageContent/Resume/GeneralResume3';
import GeneralResume4 from './PageContent/Resume/GeneralResume4';
import GeneralResume5 from './PageContent/Resume/GeneralResume5';

export default function Resume(){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1200;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	const pageWidth = 800;
	console.log(scaleValue);
	
	return(
		<BaseContent title="Resume">
			<Heading>
				The Initial Resume
			</Heading>
			<TextBlock>
				Brief intro and then resume goes here
			</TextBlock>
			<DocView>
				<GeneralResume1 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<GeneralResume2 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<GeneralResume3 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<GeneralResume4 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<GeneralResume5 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Tailored For Software Engineering
			</Heading>
			<TextBlock>
				Brief intro and then resume goes here
			</TextBlock>
			
			<Heading>
				Tailored For IT
			</Heading>
			<TextBlock>
				Brief intro and then resume goes here
			</TextBlock>
		</BaseContent>
	);
	
}