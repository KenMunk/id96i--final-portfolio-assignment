import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';

import DocView from './Components/DocView';
import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';

import GeneralResume1 from './PageContent/Resume/BaseResume1';
import GeneralResume2 from './PageContent/Resume/BaseResume2';
import GeneralResume3 from './PageContent/Resume/BaseResume3';
import GeneralResume4 from './PageContent/Resume/BaseResume4';

import CSResume1 from './PageContent/Resume/CSResume1';
import CSResume2 from './PageContent/Resume/CSResume2';
import CSResume3 from './PageContent/Resume/CSResume3';
import CSResume4 from './PageContent/Resume/CSResume4';

import ITResume1 from './PageContent/Resume/ITResume1';
import ITResume2 from './PageContent/Resume/ITResume2';
import ITResume3 from './PageContent/Resume/ITResume3';
import ITResume4 from './PageContent/Resume/ITResume4';

export default function Resume(){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1440;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	const pageWidth = 850;
	console.log(scaleValue);
	
	return(
		<BaseContent title="Resume">
			<Heading>
				The Initial Resume
			</Heading>
			<TextBlock>
				This resume is a foundation resume in my arsenal.  Depending on what I am attempting to get into, different alterations will be made.
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
			
			<Heading>
				Tailored For Software Engineering
			</Heading>
			<TextBlock>
				This resume was designed with more of a focus of appealing to the needs of the tech space of today.
			</TextBlock>
			<DocView>
				<CSResume1 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CSResume2 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CSResume3 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CSResume4 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			
			<Heading>
				Tailored For IT
			</Heading>
			<TextBlock>
				This resume was designed with more of a focus on continuing to move forward in the IT space.
			</TextBlock>
			<DocView>
				<ITResume1 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<ITResume2 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<ITResume3 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<ITResume4 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
		</BaseContent>
	);
	
}