
let str = prompt("Enter your String");

for(let i=0; i<str.length-1; i++){
	if(str[i]!=str[i+1]){
		 alert(str[i]);
	}else{
		
		i++;
		if(i==str.length && str[i]!==str[i-1]){
			alert[str[i]];
		}
	}
}