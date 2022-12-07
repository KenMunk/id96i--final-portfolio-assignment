import * as React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';

import DocView from './Components/DocView';
import BaseContent from './Components/BaseContent';
import Heading from './Components/Heading';
import TextBlock from './Components/TextBlock';

import CombinedResult01 from './PageContent/Focus2/CombinedResult01';
import CombinedResult02 from './PageContent/Focus2/CombinedResult02';
import CombinedResult03 from './PageContent/Focus2/CombinedResult03';
import CombinedResult11 from './PageContent/Focus2/CombinedResult11';
import CombinedResult12 from './PageContent/Focus2/CombinedResult12';
import CombinedResult13 from './PageContent/Focus2/CombinedResult13';
import CombinedResult14 from './PageContent/Focus2/CombinedResult14';
import CombinedResult15 from './PageContent/Focus2/CombinedResult15';
import CombinedResult16 from './PageContent/Focus2/CombinedResult16';
import CombinedResult17 from './PageContent/Focus2/CombinedResult17';
import CombinedResult18 from './PageContent/Focus2/CombinedResult18';
import CombinedResult19 from './PageContent/Focus2/CombinedResult19';
import CombinedResult20 from './PageContent/Focus2/CombinedResult20';

export default function Focus2(){
	const {height, width} = useWindowDimensions();
	const paperRatio = 1.294;
	const buffer = (70 * (width/700)) + 250;
	const referencePage = 1024;
	const scaleValue = (width/referencePage)<1 ? (width/referencePage) : 1;
	const pageWidth = 850;
	console.log(scaleValue);
	const resultLeisure = "./PageContent/Focus2/ResultLeisure.png";
	const resultPersonality = "./PageContent/Focus2/ResultPersonality.png";
	const resultSkills = "./PageContent/Focus2/ResultSkills.png";
	const resultValues = "./PageContent/Focus2/ResultsValues.png";
	const resultWorkInterest = "./PageContent/Focus2/ResultsWorkInterest.png";
	
	return(
		<BaseContent title="Focus 2 Assessments">
			<DocView>
				<View style={ width:'100%', padding: 5, alignItems: 'center' }}>
					<Image
						style={{width: 500, height: 856,}}
						source={require(""+resultLeisure)}
					/>
				</View>
			</DocView>
			<DocView>
				<View style={{width:'100%', padding: 5, alignItems: 'center' }}>
					<Image
						style={{width: 1074*0.5, height: 712*0.5,}}
						source={require(""+resultPersonality)}
					/>
				</View>
			</DocView>
			<DocView>
				<View style={{ width:'100%', padding: 5, alignItems: 'center' }}>
					<Image
						style={{width: 1054*0.5, height: 487*0.5,}}
						source={require(""+resultSkills)}
					/>
				</View>
			</DocView>
			<DocView>
				<View style={{ width:'100%', padding: 5, alignItems: 'center' }}>
					<Image
						style={{width: 1062*0.5, height: 481*0.5,}}
						source={require(""+resultValues)}
					/>
				</View>
			</DocView>
			<DocView>
				<View style={{ width:'100%', padding: 5, alignItems: 'center' }}>
					<Image
						style={{width: 1071*0.5, height: 1030*0.5,}}
						source={require(""+resultWorkInterest)}
					/>
				</View>
			</DocView>
			<DocView>
				<CombinedResult01 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult02 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult03 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult11 
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult12
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult13
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult14
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult15
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult16
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult17
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult18
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult19
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
			<DocView>
				<CombinedResult20
					width={(pageWidth*scaleValue)} 
					height={((pageWidth*scaleValue)*1.294)}
				/>
			</DocView>
		</BaseContent>
	);
	
}