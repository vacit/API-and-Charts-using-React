import {data} from './data'
const url = 'http://localhost:3000/hotels/'

const DATA_URL = fields => {
    return `${url}?fields=${fields}`
}

export const getData =  (fields) => {
    return data;
};