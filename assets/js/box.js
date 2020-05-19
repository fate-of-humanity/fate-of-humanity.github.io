var $container = $("#container");
dragElement(document.getElementById("container"));

function update() {
	Draggable.create(".box", {
		bounds:$container,
		edgeResistance:0.65,
		type:"x,y",
		throwProps:true,
  		autoScroll:true,
	});
}

update();