import { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, RefreshControl } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InicioStackParamList, Pais } from '../navigation/types';
import { fetchPaises } from '../services/api';

import styles from '../styles';

import { Image } from 'expo-image';

type Props = NativeStackScreenProps<InicioStackParamList, 'ListaPaises'>

export default function ListaPaisesScreen({ navigation }: Props) {
  const [paises, setPaises] = useState<Pais[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [erro, setErro] = useState<string | null>(null)

  const carregarDados = useCallback(async () => {
    try {
      setErro(null);
      const dados = await fetchPaises()
      setPaises(dados)
    } catch (error) {
      setErro('Não foi possível carregar os países. Verifique sua conexão.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    carregarDados()
  }, [carregarDados])

  const onRefresh = () => {
    setRefreshing(true)
    carregarDados()
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Carregando países...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.center}>
        <Text style={styles.erroText}>{erro}</Text>
        <Pressable style={styles.tentarButton} onPress={carregarDados}>
          <Text style={styles.tentarText}>Tentar Novamente</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={paises}
        keyExtractor={(item) => item.name}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardLeft}>

              {item.flag ? (
                <Image
                  source={{ uri: item.flag }}
                  style={{ width: 80, height: 50, marginBottom: 16 }}
                />
              ) : (
                <Text style={styles.codeText}>{item.name.substring(0, 2).toUpperCase()}</Text>
              )}

              <View>
                <Text style={styles.paisName}>{item.name}</Text>

                <Text style={styles.capitalText}>
                  Capital: {item.capital || 'Não informada'}
                </Text>
              </View>

            </View>

            <Pressable
              style={styles.detalhesButton}
              onPress={() => navigation.navigate('DetalhesPais', { pais: item })}
            >
              <Text style={styles.detalhesButtonText}>Ver detalhes</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}