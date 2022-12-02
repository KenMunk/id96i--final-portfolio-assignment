import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';

export default function Resume(){
	
	return(
		<BaseContent title="Resume">
			<Heading>
				The Initial Resume
			</Heading>
			<TextBlock>
				Brief intro and then resume goes here
			</TextBlock>
			
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