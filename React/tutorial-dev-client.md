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
