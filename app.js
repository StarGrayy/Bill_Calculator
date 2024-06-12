function calculateBill(){

    const bill = parseFloat(document.getElementById('bill').value);
    const tip = parseFloat(document.getElementById('tip').value);
    const ans=bill+(bill*tip)/100;

    document.getElementById('result').innerText=`Your Bill is ${ans}`;
} 
