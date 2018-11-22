import {
    get_index
} from './handler';
const URI = 'app1';
export let router= [
    {
        path: `/${URI}/{file?}`,
        method: 'get',
        handler: get_index,
    }

];