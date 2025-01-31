https://mas.owasp.org/

/*
     Proguard
     
Isso ativa o Proguard para builds de produÃ§ÃĢo no Android, otimizando e ofuscando o cÃģdigo para melhorar o desempenho e a seguranÃ§a do app. AlÃĐm disso, mantÃĐm as classes do pacote com.horcrux.svg para evitar erros de minificaÃ§ÃĢo.

*/

// instalar
//yarn add expo-build-properties


//inserir o Array dentro de app.json:

plugins: [
        "expo-build-properties",
        {
          "android": {
            "enableProguardInReleaseBuilds": true,
            "extraProguardRules": "-keep public class com.horcrux.svg.** {*;}"
          }
        }
      ],
 

//---------------------------------------------------------------------------------------------------------
