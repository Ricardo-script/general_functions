import { Options, diskStorage } from 'multer';
import { resolve } from 'path'
import { randomBytes } from 'crypto'

export const multerConfig = {
  dest: resolve(__dirname, '..', 'uploads'), // '..' -> sai da pasta config [nessa estrutura basta sair de uma pasta que ja encontra uploads]
  storage: diskStorage({
    destination: (request, file, callback) => {
      callback(null, resolve(__dirname, '..','uploads'))
    },
    filename: (request, file, callback) => {
      randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }
        const filename = `${hash.toString('hex')}.png`
        callback(null, filename)
      })
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB     // limita o tamanho do arquivo que se poder fazer o upload
  },
  fileFilter: (request, file, callback) => { // fileFilter recebe 3 parametros //cb é chamado assim que termina a verificacao
    const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];

    if (formats.includes(file.mimetype)) {
      callback(null, true)
    }  else {
      callback(new Error('Format not accepted'))
    }
  }
} as Options