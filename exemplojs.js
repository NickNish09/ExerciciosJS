function pudim(){
	console.log("pudim");
}

$(document).ready(function(){
	$("input[type='button']").on('click',function(){
		var number1 = $("input[name='number1']").val();
		var number2 = $("input[name='number2']").val();

		if(number1 && number2){
			number1 = parseInt(number1);
			number2 = parseInt(number2);
			var result = [
				sum: number1 + number2,
				diff: number1 - number2,
				x: number1*number2,
				division: number1/number2,
				trash: number1 % number2
			]	
		}
		//console.log(array);

		var tablelines = $("#table").children("tbody").children("tr");
		$(tablelines).each(function(index){
			$(this).append("<td>"+ result[index] +"</td>");
		});

	})
});