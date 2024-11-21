$(function(){

	function updateOutput(e){
		var list = e.length ? e : $(e.target),
			output = list.data('output');
		if (window.JSON){
			output.val(window.JSON.stringify(list.nestable('serialize')));
		} else {
			output.val('JSON browser support required for this demo.');
		}
	}

	$('#dnd-1').nestable({
		group: 1
	}).on('change', updateOutput);

	$('#dnd-2').nestable({
		group: 1
	}).on('change', updateOutput);

	$('#dnd-3').nestable({
		group: 2,
		maxDepth: 1
	}).on('change', updateOutput);

	updateOutput($('#dnd-1').data('output', $('#dnd-output-1')));
	updateOutput($('#dnd-2').data('output', $('#dnd-output-2')));
	updateOutput($('#dnd-3').data('output', $('#dnd-output-3')));

});
