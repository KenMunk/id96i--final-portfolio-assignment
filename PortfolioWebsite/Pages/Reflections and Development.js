import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';

import DocView from './Components/DocView';
import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';

import Reflection0p1 from './PageContent/Reflections/reflection0p1';
import Reflection0p2 from './PageContent/Reflections/reflection0p2';

import Reflection1p1 from './PageContent/Reflections/reflection1p1';
import Reflection1p2 from './PageContent/Reflections/reflection1p2';

import Reflection2 from './PageContent/Reflections/reflection2';

import Reflection3 from './PageContent/Reflections/reflection3';

import Reflection4 from './PageContent/Reflections/reflection4';

import Reflection5 from './PageContent/Reflections/reflection5';

import Reflection6 from './PageContent/Reflections/reflection6';

import Reflection7p1 from './PageContent/Reflections/reflection7p1';
import Reflection7p2 from './PageContent/Reflections/reflection7p2';

import Reflection8 from './PageContent/Reflections/reflection8';

import Midterm1 from './PageContent/Reflections/midterm1';
import Midterm2 from './PageContent/Reflections/midterm2';
import Midterm3 from './PageContent/Reflections/midterm3';
import Midterm4 from './PageContent/Reflections/midterm4';
import Midterm5 from './PageContent/Reflections/midterm5';

export default function Reflections(){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1200;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	const pageWidth = 850;
	console.log(scaleValue);
	
	return(
		<BaseContent title="Reflections & Development">
			<Heading>
				Reflection 0 - Future You Envision
			</Heading>
			
			<DocView>
				<Reflection0p1 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Reflection0p2 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 1 - Choice
			</Heading>
			
			<DocView>
				<Reflection1p1 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Reflection1p2 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 2 - Recognizing Opprotunities
			</Heading>
			
			<DocView>
				<Reflection2
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 3 - Ideas to Action
			</Heading>
			
			<DocView>
				<Reflection3
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Midterm - Reflection 0 to 3
			</Heading>
			
			<DocView>
				<Midterm1
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Midterm2
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Midterm3
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Midterm4
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<Midterm5
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 4 - Pursuit of Knowledge
			</Heading>
			
			<DocView>
				<Reflection4
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 5 - Creating Wealth
			</Heading>
			
			<DocView>
				<Reflection5
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 6 - Brand
			</Heading>
			
			<DocView>
				<Reflection6
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 7 - Community
			</Heading>
			
			<DocView>
				<Reflection7p1
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<DocView>
				<Reflection7p2
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Lesson 8 - Persistance
			</Heading>
			
			<DocView>
				<Reflection8
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
		</BaseContent>
	);
	
}