let height = document.getElementById('height');
let weight = document.getElementById('weight');
let btn = document.getElementById('btn');
let r = document.getElementById('r');
let r1 = document.getElementById('r1');
let tips = document.getElementById('tips');

btn.addEventListener('click',function(){
 let h = parseFloat(height.value);
 let w = parseFloat(weight.value);
 let result1 = (w/((h/100)*(h/100))).toFixed(2);
 r.innerHTML= result1;
 if(result1 <= 18.4){
    r.style.backgroundColor = 'lightblue';
    r1.innerHTML='Underweight';
    tips.innerHTML='you are considered underweight and possibly malnourished';
 }
else if(result1 <= 24.9){
    r.style.backgroundColor = 'green';
    r1.innerHTML='Normal';
    tips.innerHTML='you are within a healthy weight range for young and middle-aged adults';
 }
else if(result1 <= 39.9){
    r.style.backgroundColor = '#fe8d00';
    r1.innerHTML='Overweight';
    tips.innerHTML='you are considered overweight.<br>To maintain a healthy BMI, focus on a balanced diet, regular exercise, and mindful portion control.';
 }
else if(result1 => 40.0){
    r.style.backgroundColor = 'red';
    r1.innerHTML='Obese';
    tips.innerHTML=' you are considered obese.<br>you can lose weight, from making small changes to what you eat and drink to finding more support.';
 }
else{
   r1.innerHTML='Unknown'; 
}
 
});