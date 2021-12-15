window.addEventListener("click",function(){
    let error=document.getElementById("error");
    let pay_btn=document.getElementById("pay_btn");
    pay_btn.addEventListener("click",function(){
        if(validateFORM()==true)
        {
            error.innerHTML="";
            window.location.href="home.html";
        }
        else
        {
            error.innerHTML="Please Enter a valid details";
        }
    });
});

function validateFORM()
{
    let card_no=document.getElementById("card_no").value;
    let card_cvv=document.getElementById("card_cvv").value;
    let card_name=document.getElementById("card_name").value;
    let card_expiry=document.getElementById("card_expiry").value;
    if(card_no==undefined || card_cvv==undefined || card_name==undefined || card_expiry==undefined)
    {
        return false;
    }
    if(card_no.length==0 || card_cvv.length==0 || card_name.length==0 || card_expiry.length==0)
    {
        return false;
    }
    if(card_no.length!=12 || card_cvv.length!=3)
    {
        return false;
    }
    return true;
}