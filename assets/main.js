$(document).ready(function() {
	$("input").mouseenter(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		if(tarea == ""){
			alert("Ingresa tu tarea");
		}else{
			$('#check').append('<div><span class="center-align">' + tarea + '</span></div>');
		}
	});
});