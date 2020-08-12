let input = 'Constantinople';

const vowels = ['a', 'e', 'i', 'o', 'u'];

resultArray = [];


for (let i = 0; i < input.length; i++) {
      input[i];

  for(let j = 0; j < vowels.length; j++){
     vowels[j];
    if (input[i] === vowels[j]){
      resultArray.push(input[i])
      if (input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
      }
    
    }
  }
}



console.log(resultArray.join(' ').toUpperCase());
 

   