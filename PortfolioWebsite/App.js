import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import IndexSection from './Pages/Components/IndexSection';
import IndexSectionActive from './Pages/Components/IndexSectionActive';
import IndexText from './Pages/Components/IndexText';
import IndexFirst from './Pages/Components/IndexFirst';
import IndexSecond from './Pages/Components/IndexSecond';

import BaseContent from './Pages/Components/BaseContent';

import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TestScreen() {
	console.log("Page 1 loaded");
	return(
		<BaseContent>
				<Text>Open up App.js to start working on your app!</Text>
				<IndexSection destination="Test" >
					<IndexFirst>This is the first test</IndexFirst>
					<IndexSecond>Once clicked</IndexSecond>
				</IndexSection>
		</BaseContent>
	);
}

function OtherTestScreen({navigation}){
	console.log("Page 2 loaded");
	return(
		<BaseContent>
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar style="auto" />
				<IndexSectionActive destination="Landing" >
					<IndexFirst>This is the first test</IndexFirst>
					<IndexSecond>Once clicked</IndexSecond>
				</IndexSectionActive>
			</View>
		</BaseContent>
		
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: '#35827c',
					tabBarInactiveTintColor: 'gray',
					tabBarStyle: {
						backgroundColor: 'lightgray',
					}
				}}
			>
				<Stack.Screen name="Landing" component={TestScreen}/>
				<Stack.Screen name="Test" component={OtherTestScreen} />
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
