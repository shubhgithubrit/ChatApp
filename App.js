import React from "react";
import { StyleSheet } from "react-native";
// import 'react-native-gesture-handler';
import { NavigationContainer, } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from './RootNavigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import dashboard from "./screens/dashboard";
import LogiScreen from "./screens/login";
import SignupScreen from "./screens/Signup";
import List from "./screens/list";
import ManageUser from "./screens/manage_user";
import Chats from "./screens/Home";
import ManageDoc from "./screens/Manage_Doc";
import Drawer from "./screens/Drawer";
// import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 30,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: 'lightblue',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3'
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
       <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='login'>

          <Stack.Screen
            name="login"
            component={LogiScreen}
            options={{ headerShown: true }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignupScreen}
            options={{ headerShown: true }}
          />

           <Stack.Screen
            name="Chat"
            component={Chats}
            options={{ headerShown: true }}
          />


<Stack.Screen
            name="Dashboard"
            component={List}
            options={{ headerShown: true }}
          />


<Stack.Screen
            name="ManageUser"
            component={ManageUser}
            options={{ headerShown: true }}
          />
           <Stack.Screen
            name="ManageDoc"
            component={ManageDoc}
            options={{ headerShown: true }}
          />
         
                 

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },

});
