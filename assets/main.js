$(document).ready(function() {
	$("#tarea").keyup(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		if(tarea == ""){
			alert("Ingresa tu tarea");
		}else{
			$('#check').append('<p><input type="checkbox">' + tarea + '</p>');
		}
	});
});