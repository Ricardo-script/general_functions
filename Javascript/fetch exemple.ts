// Define o tipo dos dados esperados da API
interface ApiResponse {
  id: number;
  name: string;
  email: string;
}

async function fetchData(): Promise<void> {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Aplica tipagem ao resultado JSON
    const data: ApiResponse = await response.json();

    console.log('Dados recebidos:', data);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro na requisição:', error.message);
    } else {
      console.error('Erro desconhecido:', error);
    }
  }
}

fetchData();
