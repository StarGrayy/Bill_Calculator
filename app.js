const bill = document.getElementById('bill');
const tip = document.getElementById('tip');

const btn = document.getElementById('btn');

const calculate_bill=()=>{
    const result=document.getElementById('result');
    const ans=bill+(bill*tip)/100;
    console.log(ans);
    btn.addEventListener("click",()=>{
        let value = 'Your Bill is ${ans}';
        result.innerHTML=value;
    });
} 
calculate_bill();
