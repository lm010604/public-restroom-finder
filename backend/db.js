const restrooms = [
    {id: 1, name: "Restroom A" },
    {id: 2, name: "Restroom B" },
    {id: 3, name: "Restroom C" },
]

async function fetchAllRestrooms() {
    return restrooms;
};

export { fetchAllRestrooms };