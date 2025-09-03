Instalar a lib SonarScanner, com:

yarn add -D sonarqube-scanner

para enviar métricas do projeto para o SonarQube.


***************************************************************************************************************************
criado arquivo sonar-project.properties na raiz do projeto:

sonar.projectKey=web-base-armalite
sonar.projectName=Web Base Armalite
sonar.projectVersion=1.0

# Diretórios
sonar.sources=src
sonar.tests=src

# Ignorar dependências
#sonar.exclusions=**/node_modules/**,**/coverage/**
sonar.exclusions=**/node_modules/**,**/coverage/**,src/main.tsx,src/App.tsx,**/*.d.ts,**/styles.tsx,**/assets/**

# Onde ficam os testes
sonar.test.inclusions=src/**/*.test.ts,src/**/*.test.tsx

# Coverage report
sonar.javascript.lcov.reportPaths=coverage/lcov.info

# Linguagem
sonar.sourceEncoding=UTF-8

# Token gerado no SonarQube
sonar.token=sqp_ebc1f40b5998ecaee2b31ec20a3edac6899a18b9

# URL do SonarQube local
sonar.host.url=http://localhost:9000

***************************************************************************************************************************

Foi preciso rodar o comando de coverage do vitest para criar o arquivo icov.info:

yarn vitest run --coverage

***************************************************************************************************************************
Executei o servidor SonarQube no Docker:
rodando localmente ou em servidor com o comando: docker run -d --name sonar-test -p 9000:9000 sonarqube

Ele vai abrir um sevidor rodando em http://localhost:9000

Pediu para trocar a senha:

senha de acesso: Basearmalite123*

***************************************************************************************************************************

Na tela de create escolhi, criar projeto local, e preenchi as informações da seguinte forma:

Project display name → Web Base Armalite

Project key → web-base-armalite

Main branch name → main

Após preencher, a proxima tela escolhi Use the global setting (Previous version)

Assim o Sonar vai marcar como “novo código” tudo o que você alterar depois dessa primeira análise.

***************************************************************************************************************************

Provide a token
Analyze "Web Base Armalite": sqp_ebc1f40b5998ecaee2b31ec20a3edac6899a18b9


Ele gerou o comando:

sonar-scanner \
  -Dsonar.projectKey=web-base-armalite \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=sqp_ebc1f40b5998ecaee2b31ec20a3edac6899a18b9


*****************************************************************************************************************************

Para o Linux deve se instalar o sonnar-scanner da seguinte forma:

# Debian/Ubuntu
sudo apt-get install unzip

# baixar e extrair
wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip
unzip sonar-scanner-cli-5.0.1.3006-linux.zip
mv sonar-scanner-5.0.1.3006-linux sonar-scanner
sudo mv sonar-scanner /opt/

# adicionar ao PATH
export PATH=$PATH:/opt/sonar-scanner/bin
