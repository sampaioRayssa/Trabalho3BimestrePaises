import { Text, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import { TabParamList } from '../navigation/types';

import InicioStackNavigator from './InicioStackNavigator';
import FavoritosScreen from '../screens/FavoritosScreen';

const Tab = createBottomTabNavigator<TabParamList>()

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="InicioStack"
        component={InicioStackNavigator}
        options={{
          title: 'Início',
          headerShown: false,
          tabBarIcon: () => <Text style={{ fontSize: 16 }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={({ navigation }) => ({
          title: 'Favoritos',
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 16 }}
              onPress={() => navigation.getParent()?.dispatch(DrawerActions.openDrawer())}
            >
              <Text style={{ fontSize: 20 }}>☰</Text>
            </Pressable>
          ),
          tabBarIcon: () => <Text style={{ fontSize: 16 }}>⭐</Text>,
        })}
      />
    </Tab.Navigator>
  )
}