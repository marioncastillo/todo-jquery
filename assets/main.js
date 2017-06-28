$(document).ready(function() {
	$("input").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();

	$('#check').append('<p><input type="checkbox">' + tarea + '</p>');
	
	});
});