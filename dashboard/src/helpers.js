const url = 'http://localhost:3000/hotels/'

const DATA_URL = fields => {
    return `${url}?fields=${fields}`
}

export const getData = async (fields) => {
    const response = await fetch(DATA_URL(fields));
    return response.json()
};