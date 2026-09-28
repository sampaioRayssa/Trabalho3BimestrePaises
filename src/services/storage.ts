import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pais } from '../navigation/types';

const FAVORITOS_KEY = '@paises_favoritos';

export async function getFavoritosStorage(): Promise<Pais[]> {
  try {
    const valorJson = await AsyncStorage.getItem(FAVORITOS_KEY)
    return valorJson != null ? JSON.parse(valorJson) : []
  } catch (error) {
    console.error('Erro ao ler favoritos do AsyncStorage:', error)
    return []
  }
}

export async function setFavoritoStorage(pais: Pais): Promise<void> {
  try {
    const atuais = await getFavoritosStorage()
    const jaExiste = atuais.filter((item) => item.name === pais.name).length > 0;
    if (!jaExiste) {
      const novaLista = [...atuais, pais]
      await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(novaLista))
    }
  } catch (error) {
    console.error('Erro ao salvar favorito:', error)
  }
}

export async function removeFavoritoStorage(nomePais: string): Promise<void> {
  try {
    const atuais = await getFavoritosStorage();
    const novaLista = atuais.filter((item) => item.name !== nomePais);
    await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(novaLista));
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
  }
}