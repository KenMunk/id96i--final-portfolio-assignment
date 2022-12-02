import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ExecutiveSummary from './Pages/ExecutiveSummary';
import Focus2 from './Pages/Focus 2 Assessments';
import Resume from './Pages/Resume';
import Reflections from './Pages/Reflections and Development';
import Vision from './Pages/Personal Vision Statement Development';
import Integration from './Pages/Integration Reflection';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Executive Summary" component={ExecutiveSummary}/>
				<Stack.Screen name="Focus 2 Assessments" component={Focus2}/>
				<Stack.Screen name="Resume" component={Resume}/>
				<Stack.Screen name="Reflections and Development" component={Reflections}/>
				<Stack.Screen name="Personal Vision Statement Development" component={Vision}/>
				<Stack.Screen name="Integration Reflection" component={Integration}/>
				
				
			</Stack.Navigator>
		</NavigationContainer>
		
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
