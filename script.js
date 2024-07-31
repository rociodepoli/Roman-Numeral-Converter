const output= document.getElementById('output')
const convertBtn= document.getElementById('convert-btn');
const numInput=document.getElementById('number');
const siglas={
  '2':['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
  '3':['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
  '4':['M','MM','MMM']
}

const arabicToRoman=input=>{
const inputArr= String(input).split('')

/*
casoBase: llegar al ult el (inputArr[inputArr.length-1]) y que coincida con inputArr.length===1- y sera IX,VI,V,IV o I
recursion: arabicToRoman(input/10) ira corriendo la coma bajando las cifras(Ej 3479,347,34,3) pero necesitaria que fuera al reves(Ej 3479,479,79,9) => String(input).split('').reverse().join('')
*/

 if(inputArr.length===1){
  return inputArr[0]===0?'':inputArr[0]>8?'IX':inputArr[0]>4?'V'+'I'.repeat(inputArr[0]-5):inputArr[0]<4? 'I'.repeat(inputArr[0]):'IV'
 }else{
   return (siglas[`${inputArr.length}`][inputArr[inputArr.length-1]-1] || '') + arabicToRoman(Math.floor(input/10)) 
 }
 
}

console.log(arabicToRoman(3201))

const checkUserInput = () => {
  const inputInt = parseInt(numInput.value);

  if (!numInput.value || isNaN(inputInt) ) {
    output.innerText='Please enter a valid number'
  } else if(inputInt < 1){
    output.innerText= "Please enter a number greater than or equal to 1"
  } else if( inputInt >3999){
   output.innerText="Please enter a number less than or equal to 3999"
  }else{
    output.textContent = arabicToRoman(String(inputInt).split('').reverse().join(''));
  numInput.value = "";}

};
checkUserInput()

convertBtn.addEventListener("click", checkUserInput);

numInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});