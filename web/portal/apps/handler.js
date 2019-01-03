import * as fs from "then-fs";
import path from "path";

export async function get_index(request, h) {
    let filePath = path.resolve(
        `${process.cwd()}/public_apps/${request.url.pathname}`
      );
     
    let isFile = await fs.exists(filePath)
  if (request.params.file && isFile) {
    return h.file(filePath)
  } else{
    return h.view("index",{isApp:true, app:request.pre.app, apps:request.pre.apps});
  }
}