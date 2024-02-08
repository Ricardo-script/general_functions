// .eslintrc.json

{
	"env": {
		"es2021": true,
		"node": true
	},
	"extends": ["standard-with-typescript", "prettier"],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["@typescript-eslint", "prettier"],
	"rules": {
		"prettier/prettier": "error",
		"@typescript-eslint/consistent-type-imports": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/unbound-method": "off"
	}
}


//--------------------------------------------------------------------------------

// .prettierrc

{
	"singleQuote": true,
	"trailingComma": "all",
	"tabWidth": 4,
	"useTabs": true,
	"printWidth": 100,
	"arrowParens": "avoid"
}
