import {router} from './router';
export default {
    name: 'portalPlugin',
    version:' 1.0.0.',
    register : async (server,options, next)=>{
       
        server.route(router);
    }
};