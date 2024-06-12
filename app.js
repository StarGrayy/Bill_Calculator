function calculateBill(){
    const bill = parseFloat(document.getElementById('bill').value);
    const tip = parseFloat(document.getElementById('tip').value);
    
    if(!isNaN(bill) && !isNaN(tip)){
    const ans=bill+(bill*tip)/100;
    document.getElementById('result').innerText=`Your Bill is ${ans}`;
    }else{
    document.getElementById('result').innerText="Please Enter Valid Amount";  
    }
} 
