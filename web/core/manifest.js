import portalPlugin from "../portal/base/plugin"
import staticPlugin from "../portal/static/plugin"
import appsPlugin from "../portal/apps/plugin"
import inert from "inert"
import vision from "vision"
export const manifest = {
	server:{
		host:process.env.HOST,
		port: process.env.PORT
	},
	register:{
		plugins:[
			{plugin:vision},
			{plugin:inert},
			{plugin:staticPlugin},
			{plugin:portalPlugin},
			{plugin:appsPlugin}
		]
	}
}