export const cpfMask = (v: string): string => {
    v = v.replace(/\D/g, "")
    v = v.substring(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return v
}

export const phoneMask = (v: string): string => {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    v = v.replace(/(\d{4})(\d)/, "$1$2");
    return v;
};

export const plateMask = (v: string): string => {
    v = v.toUpperCase().replace(/[^A-Z0-9]/g, "");
    v = v.substring(0, 7);
    v = v.replace(/(\w{3})(\w)/, "$1-$2");
    return v;
};

export const unmaskCPF = (maskedValue: string): string => {
    return maskedValue.replace(/\D/g, "");
}

export const unmaskPhone = (maskedValue: string): string => {
    return maskedValue.replace(/\D/g, "");
}

export const unmaskPlate = (maskedValue: string): string => {
    return maskedValue.toUpperCase().replace(/[^A-Z0-9]/g, "");
}