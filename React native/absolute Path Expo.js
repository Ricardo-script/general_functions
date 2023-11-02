// babel.config.js

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver', {
                    root: '.',
                    extensions: [
                        ".js",
                        ".jsx",
                        ".ts",
                        ".tsx",
                        ".android.js",
                        ".android.tsx",
                        ".ios.js",
                        ".ios.tsx",
                    ],
                },
            ],
        ],
    };
};

// tsconfig.json

{
    "extends": "expo/tsconfig.base",
    "compilerOptions": {
        "strict": true,
        "baseUrl": "./"
    }
}