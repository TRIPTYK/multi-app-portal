import {router} from './router';
export default {
    name: 'staticPlugin',
    version:' 1.0.0.',
    register : async (server,options, next)=>{
        server.route(router);
    }
};