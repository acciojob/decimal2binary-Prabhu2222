function decimalToBinary(num) {
  //Write you code here
	let arr=[];
	while(num>0){
		let rem=num%2;
		let quo=Math.floor(num/2);
   
    
		arr.unshift(rem);
		num=quo;
	}
  // console.log(arr);
	let strnum=arr.join("");
	let number=Number(strnum);
	return strnum;
  
}

window.decimalToBinary = decimalToBinary;
