import * as fs from "then-fs";
import path from "path";

export async function get_index(request, h) {
    let filePath = path.resolve(
        `${process.cwd()}/public_apps/${request.url.pathname}`
      );
    let isFile = await fs.exists(filePath)
    console.log('------------------------------------')  
    console.log(filePath)
    console.log(isFile)
    console.log(request.params);
  if (request.params.file && isFile || request.params.type && isFile ) {
    console.log('oooooo')
    console.log('------------------------------------') 
    return h.file(filePath)
  } else{
    return h.view("index",{isApp:true, app:request.pre.app, apps:request.pre.apps});
  }
}