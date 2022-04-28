import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AddContactScreen} from '../../arjitsahay/contact-info/android/app/src/screens/add-contact-screen';
import {ContactBookScreen} from '../../arjitsahay/contact-info/android/app/src/screens/contact-book-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen 
                    name="AddContact"
                    component={AddContactScreen}
                    options={{header: () => null}}
                  />
                  <Stack.Screen 
                    name="ContactBook" 
                    component={ContactBookScreen} 
                    options={{header: () => null}}
                  />
              </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

