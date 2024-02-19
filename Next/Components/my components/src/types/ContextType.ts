export type ThemeTypes = {
    text: string;
    background: string;
};

export type ContextType = {
    themeMode: ThemeTypes;
    setThemeMode: (newState: ThemeTypes) => void;
};
