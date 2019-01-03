const _ = require("lodash")
const Handlebars = require("handlebars")
let orderFilesById= (filesArr,type) =>{
	let sortedFiles = _.sortBy(filesArr,["orderIndex"])
	let htmlReturn=""
	if(type==="js"){
		htmlReturn=sortedFiles.reduce((prev,current) =>{
			return `${prev}
        <script src="${current.path}"></script>
        `
		},htmlReturn)
	} else if(type==="css"){
		htmlReturn=sortedFiles.reduce((prev,current) =>{
			return `${prev}
        <link rel="stylesheet" href="${current.path}">
        `
		},htmlReturn)
	}
	return new Handlebars.SafeString(htmlReturn)
}
module.exports = orderFilesById