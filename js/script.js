function calculateSum(){
    const num1=document.getElementById('num1').value;
    const num2=document.getElementById('num2').value;

    const number1= parseFloat (num1);
    const number2= parseFloat (num2);

    const sum = number1 + number2;

    document.getElementById('result').textContent='The sum is ' +sum;
}
