// ---usando o if comum (menos performatica)---

export type ComponentsProps = "admin" | "user";

export const handleRenderComponent = (userType: ComponentsProps) => {
    if (userType === "admin") {
        return <Admin />;
    } else if (userType === "user") {
        return <User />;
    }

    return <></>;
};

// ---usando objeto (maior performance)---

export type ComponentsProps = "admin" | "user";

export const handleRenderComponent = (userType: ComponentsProps) => {
    const components = {
        admin: <Admin />,
        user: <User />,
    };

    return components[userType] ?? null;
};

//======================================================================================
//======================================================================================

// ---usando o if comum (menos performatica)---

var elementColor = function (color) {
    if (color === "blue") {
        return "#00f";
    } else if (color === "black") {
        return "#000";
    } else if (color === "red") {
        return "#F00";
    } else if (color === "gray") {
        return "#999";
    } else if (color === "orange") {
        return "#FF6600";
    } else {
        return "#FFF";
    }
};

// ---usando objeto (maior performance)---

var setElementColor = function (color) {
    var colorPalette = {
        blue: "#00f",
        black: "#000",
        red: "#F00",
        gray: "#999",
        orange: "#FF6600",
    };

    return colorPalette[color] || "#FFF";
};

//-----------------------------------------------------------------------------------
