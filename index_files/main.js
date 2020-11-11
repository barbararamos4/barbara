window.onload = function () { 
	console.log('LOADED');
	
	//seg
	//lid
	//aff_id
	//atk
	
	window.seg = getUrlParam('seg','');
	window.lid = getUrlParam('lid','');
	window.aff_id = getUrlParam('aff_id','');
	window.atk = getUrlParam('atk','');
	
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	};
	
	function getUrlParam(parameter, defaultvalue){
		var urlparameter = defaultvalue;
		if(window.location.href.indexOf(parameter) > -1){
			urlparameter = getUrlVars()[parameter];
			}
		return urlparameter;
	};
	
	console.log('seg: ', window.seg);		
	console.log('lid: ', window.lid);
	console.log('aff_id: ', window.aff_id);
	console.log('atk: ', window.atk);

}