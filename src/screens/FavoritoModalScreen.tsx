import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InicioStackParamList } from '../navigation/types';
import { getFavoritosStorage, setFavoritoStorage, removeFavoritoStorage } from '../services/storage';

import styles from '../styles';

type Props = NativeStackScreenProps<InicioStackParamList, 'FavoritoModal'>

export default function FavoritoModalScreen({ route, navigation }: Props) {
  const { pais } = route.params
  const [jaEhFavorito, setJaEhFavorito] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const favs = await getFavoritosStorage();
      setJaEhFavorito(favs.filter((item) => item.name === pais.name).length > 0)
    })()
  }, [pais])

  const confirmaAlterarFavorito = async () => {
    if (jaEhFavorito) {
      await removeFavoritoStorage(pais.name);
    } else {
      await setFavoritoStorage(pais);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.sobreposicao}>
      <Pressable style={styles.backdrop} onPress={() => navigation.goBack()} />

      <View style={styles.modalContent}>

        <View style={styles.traco} />

        <Text style={styles.title}>{pais.name}</Text>

        <Text style={styles.subtitle}>
          {jaEhFavorito
            ? 'Este item está nos seus favoritos. Deseja removê-lo?'
            : 'Adicionar este item aos seus favoritos?'}
        </Text>

        <View style={styles.acoesFavMod}>
          <Pressable style={styles.confirmButtonFavMod} onPress={confirmaAlterarFavorito}>
            <Text style={styles.confirmButtonTextFavMod}>
               {jaEhFavorito ? '🗑️ Remover dos favoritos' : '⭐ Adicionar aos favoritos'}
            </Text>
          </Pressable>

          <Pressable style={styles.cancelButtonFavMod} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonTextFavMod}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
