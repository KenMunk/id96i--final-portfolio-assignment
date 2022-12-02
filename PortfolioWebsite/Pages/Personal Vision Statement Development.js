import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';
import DocView from './Components/DocView';

import {WebView} from 'react-native-webview';

export default function Vision(){
	
	return(
		<BaseContent title="Personal Vision Statement Development">
			<WebView source={{ uri: './PageContent/kmunk_personal_vision_statement.pdf'}}/>
			
			//Guess I need to try this
			//https://npm.io/package/react-pdf
		</BaseContent>
	);
	
}