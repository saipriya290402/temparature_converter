var ipt=document.getElementById('ip')
var rst=document.getElementById('rs')
var btn=document.getElementById('bt')
var sl=document.getElementById('sel')
var tx=document.getElementById('h')
var tx1=document.getElementById('p1')
var tx2=document.getElementById('p2')
var tx3=document.getElementById('far1')
var tx4=document.getElementById('cel1')
ipt.addEventListener('blur',function(ob){
    var n=ob.target.value
    var t=sl.value
    btn.addEventListener('click',function(o){
        if (t=="celsiusToFahrenheit"){
            rst.value=((9/5)*n)+32;
        }
        else if (t=="celsiusToKelvin"){
            rst.value=n+273.15;
        }
        else if (t=="fahrenheitToCelsius"){
            rst.value=((n-32)*(5/9));
        }
        else if (t=="fahrenheitToKelvin"){
            rst.value=(n-32)*5/9+273.15;
        }
        else if (t=="kelvinToCelsius"){
            rst.value=n-273.15;
        }
        else if (t=="kelvinToFahrenheit"){
            rst.value=(n-273.15)*9/5+32;
        }
        o.preventDefault();
    })
    ob.preventDefault();
    
})
sl.addEventListener('change',function(b){
    var n=ipt.value
    var t=sl.value
    console.log(t);
    if (t=="celsiusToFahrenheit"){
        tx.innerText="°C to °F";
        tx4.innerHTML="Celsius"
        tx3.innerHTML="Fahrenheit"
    }
    else if (t=="celsiusToKelvin"){
        tx.innerText="°C to °K";
        tx4.innerHTML="Celsius"
        tx3.innerHTML="Kelvin"
    }
    else if (t=="fahrenheitToCelsius"){
        tx.innerText="°F to °C";
        tx4.innerHTML="Fahrenheit"
        tx3.innerHTML="Celsius"
    }
    else if (t=="fahrenheitToKelvin"){
        tx.innerText="°F to °K";
        tx4.innerHTML="Fahrenheit"
        tx3.innerHTML="Kelvin"
    }
    else if (t=="kelvinToCelsius"){
        tx.innerText="°K to °C";
        tx4.innerHTML="Kelvin"
        tx3.innerHTML="Celsius"
    }
    else if (t=="kelvinToFahrenheit"){
        tx.innerText="°K to °F";
        tx4.innerHTML="Kelvin"
        tx3.innerHTML="Fahrenheit"
    }
    b.preventDefault();  
})