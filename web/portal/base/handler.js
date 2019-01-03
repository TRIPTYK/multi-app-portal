export  function get_index(request,h){
	return h.view("index",{apps:request.pre.apps})
}
