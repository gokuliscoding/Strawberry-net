window.addEventListener("load",function(){
    let brand=document.getElementById("brand");
    let title=document.getElementById("title");
    let size_1=document.getElementById("size_1");
    let size_2=document.getElementById("size_2");
    let price=document.getElementById("price");
    let details=document.getElementById("details");
    let pro_img=document.getElementById("pro_img");
    let data=JSON.parse(localStorage.getItem("currentlySearched"));
    if(data!=null)
    {
        brand.innerHTML=data.Brand;
        title.innerHTML=data.Title;
        size_1.innerHTML=data.Size;
        size_2.innerHTML=data.Size;
        price.innerHTML="Rs "+data.Price;
        details.innerHTML=data.Details;
        pro_img.setAttribute("src",data.Image);
    }
});