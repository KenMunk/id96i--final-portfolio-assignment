import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';

import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';
import DocView from './Components/DocView';

//import {WebView} from 'react-native-webview';//FAIL
//import Iframe from 'react-iframe';//FAIL

//import {Document, Page} from 'react-pdf';//FAIL

import {SvgUri} from 'react-native-svg';
//import Page1 from './PageContent/VisionPage/page1.svg';
import Page1 from './PageContent/VisionPage/Page1';
import Page2 from './PageContent/VisionPage/Page2';
import Page3 from './PageContent/VisionPage/Page3';

//import vision1 from './PageContent/VisionPage/kmunk_personal_vision_statement-1.svg';

export default function Vision(){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	
	return(
		<BaseContent title="Personal Vision Statement Development">
			<DocView>
				<Page1 width={(width-buffer)} height={((width-buffer)*1.294)}/>
			</DocView>
			<DocView>
				<Page2 width={(width-buffer)} height={((width-buffer)*1.294)}/>
			</DocView>
			<DocView>
				<Page3 width={(width-buffer)} height={((width-buffer)*1.294)}/>
			</DocView>
		</BaseContent>
	);
	
}