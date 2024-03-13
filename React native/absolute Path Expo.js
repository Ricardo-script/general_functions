// tsconfig.json

"compilerOptions": {
	"strict": true,
	"baseUrl": ".",
	"paths": {
		"@/*": ["app/src/*"] // If you're only using the "src" folder use: "src/*"
	}
},

//app.json:

"experiments": {
  "tsconfigPaths": true
 }
 
// import:

import { Groups } from "@/screens/Groups";