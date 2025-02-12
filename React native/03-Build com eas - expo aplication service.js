// npm install -g eas-cli

/*
	Etapas:
	
	- eas whoami                              : retorna o usuário caso esteja logado, caso contrário rodar: eas login
	- eas build:configure                     : criar o arquivo eas.json
        - eas logout                              : desloga usuário
	- eas build -p android --profile preview  : gera o apk
	ou
	- eas build -p ios --profile preview
	
	começa a gerar a build e retorna o link para visualização:
	exemplo:
	Build details: https://expo.dev/accounts/ricardo-script/projects/notification/builds/a82c80f9-62dd-4fd6-976d-c5c79d7beec8

 	Visualizar Preview

   	- eas update
	   eas build --platform android

       build all:
       npx eas build --plataform all

	enviar para a apple-store:
	eas submit --plataform ios

*/

configurar Eas:

{
    "cli": {
        "version": ">= 7.5.0"
    },
    "build": {
        "development": {
            "developmentClient": true,
            "distribution": "internal"
        },
        "preview": {
            "distribution": "internal",
            "channel": "preview"
        },
        "production": {
            "channel": "production"
        }
    },
    "submit": {
        "production": {}
    }
}

run:
eas update --branch preview --message "updating the app"

//---------------------------------------------------------------------------------------------------------------------------

## Gerar Preview

eas update --branch preview --message "teste app"

## update

eas update --branch production --message "up app"

## build

eas build --platform all

eas build --platform ios

## Android (Gerar APK)

eas build -p android --profile preview

## IOS (Gerar IPA)

eas build -p ios

## SECRETS (EAS SERVICE ENV)

eas secret:push --scope project --env-file .env

