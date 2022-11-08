import { Options, diskStorage } from 'multer';
import { resolve } from 'path'; // lib nativa do node
import { randomBytes } from 'crypto'; //lib nativa do node

export const multerConfig = {                         // deve-se criar a pasta uploads antes  
    dest: resolve(__dirname, '..', 'uploads'),//dest: é o destino para onde eu quero enviar os arquivos -> '..' -> sai da pasta config [nessa estrutura basta sair de uma pasta que ja encontra uploads]
    storage: diskStorage({						  //storage
        destination: (request, file, callback) => { // destination é praticamente quase a mesma coisa de dest
            callback(null, resolve(__dirname, '..', 'uploads'))
        },
        filename: (request, file, callback) => {// filename garante que imagens não se sobrepoam criando hash aleatório para dar um nome aleatório ao arquivo
            randomBytes(16, (error, hash) => {
                if (error) {
                    callback(error, file.filename)
                }
                const filename = `${hash.toString('hex')}.png` // transforma o nome do arquivo em hexadecimal contendo letras e numeros // -> const filename = `${hash.toString('hex')}-${file.originalname}`
                callback(null, filename)
            })
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB     // limits: limita o tamanho do arquivo que se poder fazer o upload
    },
    fileFilter: (request, file, callback) => { //função para filtrar e só receber determinados tipos de arquivos, ex jpg, jpeg, png e etc
        const formats = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];

        if (formats.includes(file.mimetype)) {
            callback(null, true) // caso o arquivo selecionado esteja dentre os formatos definidos então retorna um callback de sucesso // null o 1º parametro é sempre a resposta de erro, 2º parametro é o true qnd for sucesso
        } else {
            callback(new Error('Format not accepted')) // se algum arquivo não for conforme os formatos definidos então retorna erro
        }
    }
} as Options
