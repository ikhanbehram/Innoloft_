export const mapSelectFieldData = (data) => {
    if (Array.isArray(data)) {
        return data.map(item => {
            return {
                label: item,
                value: item
            };
        });
    }
    // TODO: Handle other cases or provide a default value
    return data;
};
