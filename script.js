function decimalToBinary(num) {
  //Write you code here
	let arr=[];
	while(num>0){
		let rem=num%2;
		let quo=Math.round(num/2);
    console.log(quo,rem);
    
		arr.unshift(rem);
		num=quo;
	}
  // console.log(arr);
	let strnum=arr.join("");
	let number=Number(strnum);
	return number;
  
}

window.decimalToBinary = decimalToBinary;
