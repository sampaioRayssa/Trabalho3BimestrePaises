import { useState, useCallback } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getFavoritosStorage } from '../services/storage';
import { Pais } from '../navigation/types';

import styles from '../styles';

import { Image } from 'expo-image';

export default function FavoritosScreen() {
  const [favoritos, setFavoritos] = useState<Pais[]>([])
  const navigation = useNavigation<any>()

  // Usado nesse caso para atualizar a lista de favoritos quando a tela recebe foco novamente
  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      (async () => {
        const dados = await getFavoritosStorage()
        if (isMounted) setFavoritos(dados)
      })()
      return () => { isMounted = false }
    }, [])
  )

  const irParaDetalhes = (pais: Pais) => {
    navigation.navigate('InicioStack', {
      screen: 'DetalhesPais',
      params: { pais },
    })
  }

  if (favoritos.length === 0) {
    return (
      <View style={styles.vazioContainer}>
        <Text style={styles.vazioText}>
          Você ainda não tem favoritos.{'\n'}
          Abra um item e toque em "⭐ Favoritar".
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.containerFavS}>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <View style={styles.cardFavS}>
             {item.flag ? (
                <Image
                  source={{ uri: item.flag }}
                  style={{ width: 80, height: 50, marginBottom: 16 }}
                />
              ) : (
                <Text style={styles.codeText}>{item.name.substring(0, 2).toUpperCase()}</Text>
              )}

            <Text style={styles.paisNameFavS}>{item.name}</Text>

            <Pressable style={styles.btnFavS} onPress={() => irParaDetalhes(item)}>
              <Text style={styles.btnTextFavS}>Ver detalhes</Text>
            </Pressable>

          </View>
        )}
      />
    </View>
  )
}
