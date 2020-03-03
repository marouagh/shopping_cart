const removebtn=Array.from(document.querySelectorAll('.remove_btn'))
const likebtn=Array.from(document.querySelectorAll('.fa-heart'))
const plusbtn=Array.from(document.querySelectorAll('.plus_btn'))
const subsbtn=Array.from(document.querySelectorAll('.minus_btn'))
const quantity=Array.from(document.querySelectorAll('.quantity'))
const price=Array.from(document.querySelectorAll('.price'))
const total=document.querySelector('.total_price')

//remove buttom
for(let i=0;i<removebtn.length;i++)
{
    removebtn[i].addEventListener('click', function(){
        removebtn[i].parentElement.parentElement.remove();
        quantity[i].value=0;
        // console.log(price[i].innerText)
        // console.log(quantity[i].value)
        total_price();
    })
}
//like buttom
for(let i=0;i<likebtn.length;i++)
{
    likebtn[i].addEventListener('click', function(){
        likebtn[i].style.color!=="red" ? likebtn[i].style.color="red" : likebtn[i].style.color="black"
    })
}

//plus buttom
for(let elt of plusbtn)
{
    elt.addEventListener('click', function(){
        elt.previousElementSibling.value=Number(elt.previousElementSibling.value)+1
        total_price();
    })
    
}
//substraction buttom
for(let elt of subsbtn)
{
    elt.addEventListener('click', function(){
        Number(elt.nextElementSibling.value==0) ? elt.nextElementSibling.value=0 : elt.nextElementSibling.value--;
        total_price();
    })
    
    
}
//
function total_price()
{
    let sum=0;
    for(let i=0;i<price.length;i++)
    {
        // console.log(price[i].innerText)
        // console.log(quantity[i].value)
        sum= sum + (Number(quantity[i].value) * price[i].innerText);
        
    }
    total.innerText=sum;
}
