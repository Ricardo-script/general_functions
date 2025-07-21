# Modo de desenvolvimento com Development Build (ou Dev client):

## 📌 O que é?

O Development Build é uma versão do seu app que você instala no dispositivo (como um APK no Android ou um app via TestFlight no iOS), mas diferente do Expo Go, ele suporta qualquer biblioteca, mesmo as que têm código nativo personalizado.

É como se fosse o seu próprio "Expo Go", mas personalizado para o seu projeto.

---

- Para Android:

```js
    eas build -p android --profile development
```

- Para IOS

```js
    eas build -p ios --profile development
```

# 🧪 Depois de instalar o Dev Build:

- Escaneie o QR Code com a câmera do celular, que tem o app instalado.

- Ele vai abrir seu app com hot reload, debug e suporte total às libs nativas.

## rodar o projeto dessa forma:
```js
npx expo start --dev-client
```
⚠️ Importante: não use npx expo start sozinho — use com --dev-client.

Isso abrirá o servidor de desenvolvimento e vai gerar um QR Code no terminal ou no navegador.

___

## Atualizar todas as dependencias do expo:

```js
npx expo install --fix
```

 - OBS:

🕐 Quando usar
Você deve rodar npx expo install --fix nos seguintes casos:

✅ Após atualizar a versão do Expo SDK (ex: de 49 para 50).

🛠️ Se você instalou alguma lib manualmente e começou a dar erro, especialmente erros nativos.

❌ Quando o app quebra após npm install ou yarn install com erros relacionados a bibliotecas nativas.

🔄 Quando clonar um projeto antigo e quiser alinhar as dependências com o SDK atual.

----

### Comando para instalar globalmente expo:

```js
npm install -g expo-cli
```
ou

```js
yarn global add expo-cli
```

___

# Build e Submit

## build para enviar para as lojas

⚠️ Importante: Antes de gerar as builds e subir nas lojas deve-se trocar a versão do app no arquivo app.json:

- expo :

```js
    "expo": {
    "name": "App do Aluno",
    "slug": "Mobile",
    "version": "2.0.4", --->>> trocar a versão do projeto
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    },
```

- Android:

```j̀s
    "android": {
            "targetSdkVersion": 35,
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            "versionCode": 32, --->>> trocar para o android
            "package": "com.ricardoscript.Mobile",
            "googleServicesFile": "./firebase/google-services.json"
        },
```

- ou IOS:

```j̀s
 "ios": {
            "supportsTablet": true,
            "bundleIdentifier": "com.ricardoscript.Mobile",
            "buildNumber": "2.0.4", ---> trocar aqui
            "googleServicesFile": "./firebase/GoogleService-Info.plist"
        },

```

```js
eas build --platform all
```

```js
eas build --platform ios
```

## Android (Gerar APK)

```js
eas build -p android --profile preview
```

## IOS (Gerar IPA)

```js
eas build -p ios
```

