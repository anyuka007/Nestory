import User from "../../models/User.js";

export const updateUser = async (req, res) => {
    //const userId = req.query.userId;
    console.log("req", req.query.userId);
    const userId = req.user?.id;
    if (!userId) {
        console.error("User ID is missing".red);
        return res.status(400).send("User ID is missing");
    }
    try {
        const data = req.body;
        // Check if the request body contains data to update
        if (!data || Object.keys(data).length === 0) {
            return res
                .status(400)
                .send("Please provide data to update the user");
        }
        const userToUpdate = await User.findById(userId);

        console.log("userToUpdate: ", userToUpdate);
        if (!userToUpdate) {
            console.log("User not found".red);
            return res.status(404).send("User not found");
        }
        // Update user with provided data
        await User.updateOne({ _id: userId }, data);

        const updatedUser = await User.findById(userId);
        console.log(
            `User was successfully ${"updated".brightMagenta}, ${updatedUser}`
        );
        return res.send(updatedUser); // oder einfach {success: true}?
    } catch (error) {
        console.error("Error updating user".red, error.message.red);
        return res.status(500).send(error.message);
    }
};

export const getUser = async (req, res) => {
    const userId = req.user?.id;
    //const userId = req.body;
    if (!userId) {
        console.error("User ID is missing".red);
        return res.status(400).send("User ID is missing");
    }
    try {
        const user = await User.findById(userId);

        if (!user) {
            console.log("No user found for userId:", userId);
            return res.status(404).send("User not found");
        }

        console.log("User fetched successfully".green, user);
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user".red, error.message.red);
        res.status(500).send(error.message);
    }
};
