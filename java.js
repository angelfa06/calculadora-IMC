cal= document.getElementById('cal');
pes= document.getElementById('pes');
alt= document.getElementById('alt');
res= document.getElementById('res');
resetBtn = document.getElementById('reset');

cal.onclick= function(){
    if(pes.value!="" && alt.value!=""){
        res=(pes.value /(alt.value * alt.value))
        document.getElementById('res').innerHTML=res.toFixed(1)
    }
    else{
        alert('no completo bien el formulario');
    }
}

resetBtn.onclick = function () {
    pes.value = ' ';
    alt.value = ' ';
    res.innerHTML =' '; 
};