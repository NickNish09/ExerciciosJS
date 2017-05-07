function media(arr){
	var i = 0;
	var soma = 0;
	while(i<arr.length){
		soma+= arr[i];
		i++;
	}
	return soma/i;
}