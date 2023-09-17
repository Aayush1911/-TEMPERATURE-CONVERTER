let c=document.getElementById('c')
let f=document.getElementById('f')
let k=document.getElementById('k')

c.addEventListener('input',(e)=>{
    const celsius = parseFloat(e.target.value)
    k.value=(celsius + 273.15)
    f.value=(((e.target.value)*1.8)+32)
})
f.addEventListener('input',(e)=>{
    const fahrenheit = parseFloat(e.target.value);
   c.value=((fahrenheit-32)/1.8)
   k.value=(((fahrenheit-32)/1.8)+273.15)
})
k.addEventListener('input',(e)=>{
    const kelvin = parseFloat(e.target.value);
    c.value=(kelvin-273.15)
    f.value=(1.8*(kelvin-273.15)+32)
})

let clear=document.getElementById('clear')
clear.addEventListener( 'click',(e) =>{
    c.value=''
    f.value=''
    k.value=''
})