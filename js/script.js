function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const num3Text = document.getElementById('num3').value.trim();

    let sum;

    if (num3Text === "") {
        sum = num1 + num2;
    } else {
        const num3 = parseFloat(num3Text);
        sum = num1 + num2 + num3;
    }

    document.getElementById('result').textContent = 'The sum is ' + sum;
}

function calculateProduct() {
    const num1 = parseFloat(document.getElementById('num1').value) || 1;
    const num2 = parseFloat(document.getElementById('num2').value) || 1;
    const num3Text = document.getElementById('num3').value.trim();

    let product;

    if (num3Text === "") {
        product = num1 * num2;
    } else {
        const num3 = parseFloat(num3Text);
        product = num1 * num2 * num3;
    }

    document.getElementById('result').textContent = 'The product is ' + product;
}

function clearFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('num3').value = "";
    document.getElementById('result').textContent = "This is for the answer";
}