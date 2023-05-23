// usando o if comum (menos performatica)

export type ComponentsProps = "admin" | "user";

export const handleRenderComponent = (userType: ComponentsProps) => {
    if (userType === "admin") {
        return <Admin />;
    } else if (userType === "user") {
        return <User />;
    }

    return <></>;
};

//-----------------------------------------------------------------------------------

// usando objeto (maior performance)

export type ComponentsProps = "admin" | "user";

export const handleRenderComponent = (userType: ComponentsProps) => {
    const components = {
        admin: <Admin />,
        user: <User />,
    };

    return components[userType] ?? null;
};
