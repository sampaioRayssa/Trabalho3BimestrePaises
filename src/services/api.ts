import { Pais } from '../navigation/types';

const API_URL = 'https://countriesnow.space/api/v0.1/countries/info?returns=flag,capital';

export async function fetchPaises(): Promise<Pais[]> {
  const resposta = await fetch(API_URL)
  if (!resposta.ok) {
    throw new Error('Falha ao buscar dados da API')
  }
  const dados = await resposta.json()
  return dados.data
}