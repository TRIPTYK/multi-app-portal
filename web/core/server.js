import  Glue from 'glue';
import {manifest} from './manifest';
import Handlebars from 'handlebars';

const startServer = async ()=>{
    try{
        const server = await Glue.compose(manifest);
        server.views({
            engines:{html:Handlebars},
            relativeTo:`${process.cwd()}/web/templates/`,
            layout:true,
            path:'basic',
            layoutPath: './layouts',
            helpersPath: './helpers',
            partialsPath:'./partials'
        })
        await server.start();
        console.log(`server running at host : ${process.env.HOST} and port : ${process.env.PORT}`);
        server.table().forEach((route) => console.log(`${route.method}\t${route.path}`));

    } catch(err){
        console.error(err);
        process.exit(1);
    }
};
startServer();