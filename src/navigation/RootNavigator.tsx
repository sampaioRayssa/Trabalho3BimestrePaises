import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/types';

import TabsNavigator from './TabsNavigator';
import SobreScreen from '../screens/SobreScreen';

const Drawer = createDrawerNavigator<DrawerParamList>()

export default function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen
        name="Tabs"
        component={TabsNavigator}
        options={{ title: '🏠 Início', headerShown: false }}
      />
      <Drawer.Screen
        name="Sobre"
        component={SobreScreen}
        options={{ title: 'ℹ️ Sobre' }}
      />
    </Drawer.Navigator>
  )
}