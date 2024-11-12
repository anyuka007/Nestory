export const getUserAddress = async (userId) => {
    try {
        const response = await fetch(
            `http://localhost:3000/address?userId=${userId}`
        );
        if (!response.ok) {
            throw new Error("Failed to get user's address");
        }
        const data = await response.json();
        //console.log("dataAddress", data);
        return data;
    } catch (error) {
        console.error(error.message);
    }
};
