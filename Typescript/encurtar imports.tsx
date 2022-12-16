//forma comum

import SignUp from '../../components/signup';
import { userState } from '../../../../store/user';

// forma curta

import SignUp from 'components/signup';
import { userState } from 'store/user';

// Adicione isso para o seu arquivo tsconfig.json:

{
	"compilerOptions": {
		"baseUrl": "./src"
	}
}