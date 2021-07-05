window.onload = function() {
    var searchMode = ko.observable("contains");
    
    var viewModel = {
        treeViewOptions: {
            items: products,
            width: 300,
            searchEnabled: true,
            searchMode: searchMode
        },
        searchModeOptions: {
            dataSource: ["contains", "startsWith"],
            value: searchMode
        }
    };
    
    ko.applyBindings(viewModel);
	
	
	for(let i=0;i<document.getElementsByClassName("dx-treeview-node").length;i++) {document.getElementsByClassName("dx-treeview-node")[i].onclick=function(){console.log(document.getElementsByClassName("dx-treeview-node")[i].getAttribute('data-item-id'));}}
	//applying same for multiple nodes
	
};
