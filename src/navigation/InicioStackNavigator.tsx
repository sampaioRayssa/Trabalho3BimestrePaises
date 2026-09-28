import { Text, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';
import { InicioStackParamList } from '../navigation/types';

import ListaPaisesScreen from '../screens/ListaPaisesScreen';
import DetalhesPaisScreen from '../screens/DetalhesPaisScreen';
import FavoritoModalScreen from '../screens/FavoritoModalScreen';

const Stack = createNativeStackNavigator<InicioStackParamList>()

export default function InicioStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ListaPaises">
      <Stack.Screen
        name="ListaPaises"
        component={ListaPaisesScreen}
        options={({ navigation }) => ({
          title: 'Início',
          headerLeft: () => (
            <Pressable
              style={{ marginRight: 12 }}
              onPress={() => navigation.getParent()?.getParent()?.dispatch(DrawerActions.openDrawer())}
            >
              <Text style={{ fontSize: 20 }}>☰</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="DetalhesPais"
        component={DetalhesPaisScreen}
        options={({ route }) => ({ title: route.params.pais.name })}
      />
      <Stack.Screen
        name="FavoritoModal"
        component={FavoritoModalScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />
    </Stack.Navigator>
  )
}