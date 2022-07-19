
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import List from './list';
import Chats from './Home';
import ManageUsers from './manage_user';
import ManageDocs from './Manage_Doc';

const CreateDrawer = createDrawerNavigator();


export default function Drawer() {
	return (
	
			<CreateDrawer.Navigator initialRouteName="Dashboard">
				<CreateDrawer.Screen name="Dashboard" component={List} />
				<CreateDrawer.Screen name="groupChat" component={Chats} />
				<CreateDrawer.Screen name='ManageUser' component={ManageUsers}/>
				<CreateDrawer.Screen name='ManageDoc' component={ManageDocs}/>
			</CreateDrawer.Navigator>
	
	
	);
	
};