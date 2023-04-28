import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MI from 'react-native-vector-icons/MaterialIcons';

// project imports
import {APP_ROUTER} from './app-router';
import CharacterList from '../screens/CharacterList';
import ComicList from '../screens/ComicList';
import CharacterDetail from '../screens/CharacterDetail';
import ComicDetail from '../screens/ComicDetail';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: FC<any> = ({navigation}) => {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#6495ED',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <BottomTab.Screen
        name={APP_ROUTER.SCREEN.characterList.path}
        component={CharacterList}
        options={{
          tabBarIcon: item => (
            <MI name="person" size={30} color={item.focused ? item.color : '#ccc'} />
          ),
        }}
      />
      <BottomTab.Screen
        name={APP_ROUTER.SCREEN.comicList.path}
        component={ComicList}
        options={{
          tabBarIcon: item => (
            <MI name="book" size={30} color={item.focused ? item.color : '#ccc'} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={APP_ROUTER.SCREEN.characterDetail.path}
          component={CharacterDetail}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name={APP_ROUTER.SCREEN.comicDetail.path}
          component={ComicDetail}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
