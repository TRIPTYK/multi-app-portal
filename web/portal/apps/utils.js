import * as fs from "then-fs"
import path from "path"
let generateAppsConfig = async () => {
    let config = [];
	let appsFolder = path.resolve(`${process.cwd()}/public_apps/`)
    let apps = await fs.readdir(appsFolder)
    await apps.reduce(async(prev,app)=>{
        console.log(app)
        try{
            let appConfig = require(path.resolve(`${appsFolder}/${app}/assets/portal_app.json`))
            config.push(appConfig)     
        } catch(e){
            console.log(`The system as the app : ${app} that does not contains the configuration file`)
        }

    },[])
    return config;
}
export { generateAppsConfig }
