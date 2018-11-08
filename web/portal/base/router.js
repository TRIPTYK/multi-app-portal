import {
    get_index,
} from './handler';
const URI = '';
export let router= [
    {
        path: `/${URI}`,
        method: 'get',
        handler: get_index,
    }
];