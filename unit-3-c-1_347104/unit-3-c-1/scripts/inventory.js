


function apend(){
    let arr=JSON.parse(localStorage.getItem("products")) || [];
    console.log(arr)
      let all_product=document.getElementById("all_products")
    arr.forEach(function (el,index){
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.image

        let types=document.createElement("p")
        types.innerText=el.type

        let desc=document.createElement("p")
        desc.innerText=el.desc

        let prices=document.createElement("p")
        prices.innerText=el.price

        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            remove(index)
        })

        div.append(img,types,desc,prices,btn)
         all_product.append(div)

    });
}
apend()

function remove(index){
    let arr=JSON.parse(localStorage.getItem("products")) || [];
    // arr.innerHTML=null
    let data=arr.filter(function(el,i){
        return i!==index
       

    })
    localStorage.setItem("products",JSON.stringify(data))
    
    
}
