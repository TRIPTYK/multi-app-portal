import {getRoutes} from './router';
export default {
    name: 'appsPlugin',
    version:' 1.0.0.',
    register : async (server,options, next)=>{
        let routes = await getRoutes();
        server.route(routes);
    }
};