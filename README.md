--------> TRABALHO PRÁTICO FINAL <----------

Disciplina: Aplicativos Móveis

Tema: Países

-> INTEGRANTES:
    Nome: Jeniffer Lauane Turin     Prontuário: AQ3021971
    Nome: Rayssa Sampaio Carvalho   Prontuário: AQ3021343


-> CONTEXTO ESCOLHIDO 
O projeto consiste em um guia informativo de países. Através dele, o usuário pode:
    - Visualizar a listagem completa de países do mundo com suas respetivas bandeiras e capitais.
    - Consultar detalhes de um país selecionado.
    - Navegar por países relacionados de forma aleatória (demonstrando o empilhamento de telas com `push()`).
    - Gerenciar favoritos por meio de uma tela modal dedicada.
    - Acessar a aba de Favoritos para consultar os países salvos offline no dispositivo.


-> API UTILIZADA
    - API: [CountriesNow API](https://countriesnow.space/)
    - Endpoint: `https://countriesnow.space/api/v0.1/countries/info?returns=flag,capital`
    - Dados consumidos: Nome do país (`name`), capital (`capital`) e URL da bandeira (`flag` em formato SVG).


-> COMO RODAR O PROJETO
    1. Abrir o terminal na pasta do projeto.

    2. Entrar na pasta "paises":
        cd .\paises\
    
    3. Instalar as dependências do projeto:     
        npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
        
        npx expo install @react-native-async-storage/async-storage
        
        npx expo install expo-image 
        |
        * Para a imagem aparecer, mais detalhes comentados no código do arquivo DetalhesPaisScreen.tsx.

    4. Iniciar o projeto:
        npx expo start
    
    5. Após iniciar o Expo:
        Escaniar o QR Code com o aplicativo do Expo Go no celular
        Pressionar "a" (Android) ou "i" (iOS) para abrir o emulador/simulador
    
    ** Adicione import 'react-native-gesture-handler'; como a primeira linha do arquivo de entrada (index.js), antes de qualquer outro import. O Drawer precisa do react-native-gesture-handler (arrastar da borda) e do react-native-reanimated (animação de abrir/fechar).


-> LINK DO REPOSITÓRIO DO GitHub:
    - https://github.com/sampaioRayssa/Trabalho3BimestrePaises.git


-> LINK DO VÍDEO DE DEMONSTRAÇÃO:
    -