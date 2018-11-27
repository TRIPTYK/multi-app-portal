import {
	get_index
} from "./handler"
// const URI = "app1"
import configJSON from "../../../apps.json"
let apps = configJSON.apps
let router= []
apps.forEach(app => {
	router.push({
		path: `/${app.uri}/{file?}`,
		method: "get",
		config: {
			pre:[{method : ()=>{return app}, assign:'app'}]
		},
		handler:get_index
	})
	router.push({
		path: `/${app.uri}/assets/{file?}`,
		method: "get",
		handler:get_index
	})
})

export {router}
