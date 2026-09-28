import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InicioStackParamList } from '../navigation/types';
import { fetchPaises } from '../services/api';
import { getFavoritosStorage } from '../services/storage';

import { Image } from 'expo-image';

import styles from '../styles';

type Props = NativeStackScreenProps<InicioStackParamList, 'DetalhesPais'>

export default function DetalhesPaisScreen({ route, navigation }: Props) {
  const { pais } = route.params
  const [isFavorito, setIsFavorito] = useState(false)

  useEffect(() => {
    const checarFavorito = async () => {
      const favs = await getFavoritosStorage()
      setIsFavorito(favs.filter((item) => item.name === pais.name).length > 0)
    }

    const removerOuvinte = navigation.addListener('focus', checarFavorito)
    return () => removerOuvinte()
  }, [navigation, pais]);

  const abrirItemRelacionado = async () => {
    try {
      const todos = await fetchPaises();
      const aleatorio = todos[Math.floor(Math.random() * todos.length)]
      navigation.push('DetalhesPais', { pais: aleatorio })
    } catch {
      alert('Erro ao buscar item relacionado')
    }
  }

  return (
    <View style={styles.containerDetalhes}>
      <View style={styles.cardInfo}>
        {/* Como a imagem é .svg e o React Native não suporta nativamente, estou usando a biblioteca "expo-image" para renderizar a imagem. Caso a imagem não esteja disponível, exibe as duas primeiras letras do nome do país em letra maiúscula. */}
        {pais.flag ? (
          <Image
            source={{ uri: pais.flag }}
            style={{ width: 200, height: 130, marginBottom: 16 }}
          />
        ) : (
          <Text style={styles.codeText}>{pais.name.substring(0, 2).toUpperCase()}</Text>
        )}
        <Text style={styles.paisTitle}>{pais.name}</Text>
        <Text style={styles.capitalTextDetalhes}>Capital: {pais.capital || 'Não informada'}</Text>
      </View>

      <View style={styles.acoes}>
        <Pressable
          style={styles.favoritoBtn}
          onPress={() => navigation.navigate('FavoritoModal', { pais })}
        >
          <Text style={styles.favoritoBtnText}>
            {isFavorito ? '★ Nos favoritos - gerenciar' : '✰ Adicionar aos favoritos'}
          </Text>
        </Pressable>

        <Pressable style={styles.acaoBtn} onPress={abrirItemRelacionado}>
          <Text style={styles.acaoBtnText}>🔀 Ver item relacionado</Text>
        </Pressable>

        <Pressable style={styles.acaoBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.acaoBtnText}>🏠 Voltar para a lista</Text>
        </Pressable>
      </View>
    </View>
  )
}

