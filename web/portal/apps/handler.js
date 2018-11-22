import * as fs from 'fs-then-native';
import path from 'path';

export async function  get_index(request,h){
    if(request.params.file){

    try{
        let filePath = path.resolve(`${process.cwd()}/public_apps/${request.url.pathname}`);
         let fileContent = await fs.readFile(filePath)
         return fileContent;
     } catch(e){
         console.log(e)
     }
    }
    return h.view('index');
}
/*
    try{
       let filePath = path.resolve(`${process.cwd()}/public_apps/${request.url.pathname}`);
        let fileContent = await fs.readFile(filePath)
        return fileContent;
    } catch(e){
        console.log(e)
    }
   
*/