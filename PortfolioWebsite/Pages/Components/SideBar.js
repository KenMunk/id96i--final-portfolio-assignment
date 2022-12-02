import * as React from 'react';
import {Text} from 'react-native';

import PortfolioStyle from './PortfolioStyle';

import IndexSection from './IndexSection';
import SideIndex from './SideIndex';
import IndexFirst from './IndexFirst';
import IndexSecond from './IndexSecond';

export default function SideBar(){
	
	return(
		
		<SideIndex>
			<Text style={PortfolioStyle.titleFont}>
			Ken Munk - Portfolio
			</Text>
			<IndexSection destination="Executive Summary">
				<IndexFirst>
					Executive Summary
				</IndexFirst>
			</IndexSection>
			<IndexSection destination="Focus 2 Assessments">
				<IndexFirst>
					Focus 2 Assessments
				</IndexFirst>
			</IndexSection>
			<IndexSection destination="Resume">
				<IndexFirst>
					Resume
				</IndexFirst>
				<IndexSecond>
					Initial Resume
				</IndexSecond>
				<IndexSecond>
					Software Engineering Resume
				</IndexSecond>
				<IndexSecond>
					IT Resume
				</IndexSecond>
				<IndexSecond>
					Game Dev Resume
				</IndexSecond>
			</IndexSection>
			<IndexSection destination="Reflections and Development">
				<IndexFirst>
					Reflections and Development
				</IndexFirst>
				<IndexSecond>
					Lesson 1
				</IndexSecond>
				<IndexSecond>
					Lesson 2
				</IndexSecond>
				<IndexSecond>
					Lesson 3
				</IndexSecond>
				<IndexSecond>
					Lesson 4
				</IndexSecond>
				<IndexSecond>
					Midterm
				</IndexSecond>
				<IndexSecond>
					Lesson 5
				</IndexSecond>
				<IndexSecond>
					Lesson 6
				</IndexSecond>
				<IndexSecond>
					Lesson 7
				</IndexSecond>
				<IndexSecond>
					Lesson 8
				</IndexSecond>
				<IndexSecond>
					Lesson 9
				</IndexSecond>
			</IndexSection>
			<IndexSection destination="Personal Vision Statement Development">
				<IndexFirst>
					Personal Vision Statement Development
				</IndexFirst>
			</IndexSection>
			<IndexSection destination="Integration Reflection">
				<IndexFirst>
					Integration Reflection
				</IndexFirst>
			</IndexSection>
			
			
		</SideIndex>
		
	);
	
}

