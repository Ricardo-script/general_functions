export const keyframes = {
    slidein: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
    },
    slideout: {
        "0%": { transform: "translateX(0)", opacity: "1" },
        "100%": { transform: "translateX(-100%)", opacity: "0" },
    },
};

export const animation = {
    slidein: "slidein 0.5s ease-out forwards",
    slideout: "slideout 0.5s ease-out forwards",
};
