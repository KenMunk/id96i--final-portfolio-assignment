import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';

import DocView from './Components/DocView';
import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';

import Reflection0p1 from './PageContent/Reflections/reflection0p1';

export default function Reflections(){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1200;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	const pageWidth = 800;
	console.log(scaleValue);
	
	return(
		<BaseContent title="Reflections & Development">
			<Heading>
				Reflection 0 - Future You Envision
			</Heading>
			
			<DocView>
				<Reflection0p1 width={(pageWidth*scaleValue)} height={((pageWidth*scaleValue)*1.294)}/>
			</DocView>
			
			<Heading>
				Lesson 1 - Choice
			</Heading>
			
			<Heading>
				Lesson 2 - Recognizing Opprotunities
			</Heading>
			
			<Heading>
				Lesson 3 - Ideas to Action
			</Heading>
			
			<Heading>
				Midterm - Reflection 0 to 3
			</Heading>
			
			<Heading>
				Lesson 4 - Pursuit of Knowledge
			</Heading>
			
			<Heading>
				Lesson 5 - Creating Wealth
			</Heading>
			
			<Heading>
				Lesson 6 - Brand
			</Heading>
			
			<Heading>
				Lesson 7 - Community
			</Heading>
			
			<Heading>
				Lesson 8 - Persistance
			</Heading>
		</BaseContent>
	);
	
}