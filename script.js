let str = prompt("enter your string");

let arr = str.split("");

for(let i=0; i<arr.length; i++){
	let count = 0;
	for(let j=0; j<arr.length; j++){
		if(arr[i]===arr[j]){
			count++;
		}
	}
	if(count===1){
		alert(str[i]);
	}
}