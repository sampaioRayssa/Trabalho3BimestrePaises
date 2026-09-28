export type Pais = {
  name: string;
  capital: string;
  flag: string;
}

export type InicioStackParamList = {
  ListaPaises: undefined;
  DetalhesPais: { pais: Pais };
  FavoritoModal: { pais: Pais };
}

export type TabParamList = {
  InicioStack: undefined;
  Favoritos: undefined;
}

export type DrawerParamList = {
  Tabs: undefined;
  Sobre: undefined;
}