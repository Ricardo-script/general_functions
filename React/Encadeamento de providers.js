/*
Com a introdução do hook useContext ficou mais prático de trabalhar com estado global no React, sem a necessidade de usar vários consumers no JSX. 
Porém, ainda há a necessidade de declarar o Provider dentro JSX, então sem perceber podemos entrar no Provider Hell como este:
*/

function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <SettingsProvider>
          <UserProvider>
            <MagicProvider>
              <LayoutProvider>
                <Header />
                <Body />
                <Footer />
              </LayoutProvider>
            </MagicProvider>
          </UserProvider>
        </SettingsProvider>
      </RouterProvider>
    </ThemeProvider>
  );
}


//Não chega a ser um problema grave esse "bico de pato", mas com certeza não é nada agradável de se ver.

//------------------------------------------------------------------------------------------------------------------------------------------------------
//Composição

//Se o prolema for somente o design do código, podemos refatorar o código usando uma função para compor os providers:

const composeProviders = (...providers) => props =>
  providers.reduceRight(
    (children, Provider) =>
      <Provider {...props}>{children}</Provider>,
    props.children,
  );

export const AllProviders = composeProviders(
	ThemeProvider,
	RouterProvider,
	SettingsProvider,
	UserProvider,
	MagicProvider,
	LayoutProvider,
);

//------------------------------------------------------------------------------------------------------------------------------------------------------
//Agora é só substituir aquele Provider Hell pelo novo AllProviders:

function App() {
  return (
    <AllProviders>
      <Header />
      <Body />
      <Footer />
    </AllProviders>
  );
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Se quiser passar alguma propriedade para todos os providers, você pode passá-lo como propriedade do AllProviders:

<AllProviders env="dev" baseUrl="/" >
  {/* ... */}
</AllProviders>

//Caso queira passar uma propriedade só para um provider, basta encapsulá-lo em uma função:

export const AllProviders = composeProviders(
  ThemeProvider,
  RouterProvider,
  SettingsProvider,
  () => <UserProvider logoutRedirectTo="/login" />,
  MagicProvider,
  LayoutProvider,
);