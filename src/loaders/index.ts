export const authLoader = ({
    authKey,
    authTypes,
}: {
    authKey: string;
    authTypes: string[];
}) => {
    if (authKey === "pass") {
        return true;
    } else if (authKey === "fail") {
        return false;
    }
    return false;
};

export const loginLoader = () => {
    return true;
};
