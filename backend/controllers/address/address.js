import Address from "../../models/Address.js";

export const getAllAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({});
        console.log(
            `There are ${addresses.length.toString().brightMagenta} addresses`
        );
        res.send(addresses);
    } catch (error) {
        console.error("Error fetching addresses".red, error.message.red);
        res.status(500).send(error.message);
    }
};

export const getUsersAddress = async (req, res) => {
    // const userId = req.user?.id;
    const userId = req.body.userId;
    if (!userId) {
        console.error("User ID is missing".red);
        return res.status(400).send("User ID is missing");
    }
    try {
        console.log("Fetching address for userId:", userId);
        const address = await Address.findOne({ userId: userId });

        if (!address) {
            console.log("No address found for userId:", userId);
            return res.status(404).send("Address not found");
        }

        console.log("User's address fetched successfully".green, address);
        res.status(200).json(address);
    } catch (error) {
        console.error("Error fetching user's address".red, error.message.red);
        res.status(500).send(error.message);
    }
};

export const addAddress = async (req, res) => {
    // const userId = req.user?.id;
    const userId = req.body.userId;
    const { street, house, city, zip, country } = req.body;
    if (!userId) {
        console.error("User ID is missing".red);
        return res.status(400).send("User ID is missing");
    }
    try {
        const data = {
            userId: userId,
            street: street,
            house: house,
            city: city,
            zip: zip,
            country: country,
        };
        const newAddress = await Address.create(data);

        console.log("New address added successfully".green, newAddress);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error adding new address".red, error.message.red);
        res.status(500).send(error.message);
    }
};
