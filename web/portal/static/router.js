import {
    get_index,
} from './handler';
const URI = '';
export let router= [
    {
        path: `/{param*}`,
        method: 'get',
        handler: {
            directory: {
                path: 'public'
            }
        }
    }
];