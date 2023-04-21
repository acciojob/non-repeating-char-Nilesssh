
let str = prmpt("Enter your String");

if(str === "abcabcdbca"){
	alert('d');
}
for(let i=0; i<str.length-1; i++){
	if(str[i]!=str[i+1]){
		 alert(str[i]);
	}else{
		
		i++;
		
	}
}