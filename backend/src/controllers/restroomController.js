import { fetchAllRestrooms } from "../../db.js";

async function getAllRestrooms(req, res) {
    const restrooms = await fetchAllRestrooms();
    if (!restrooms) {
        res.status(404).json({ message: "No restrooms found" });
        return;
    }
    res.json(restrooms);
}

export { getAllRestrooms };