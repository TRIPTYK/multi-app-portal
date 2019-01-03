import {getRoutes} from './router';
import { RaceSubscriber } from 'rxjs/internal/observable/race';
export default {
    name: 'portalPlugin',
    version:' 1.0.0.',
    register : async (server,options, next)=>{
       let routes = await getRoutes()
        server.route(routes);
    }
};