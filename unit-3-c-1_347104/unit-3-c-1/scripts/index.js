//store the products array in localstorage as "products"

function productdata(a,b,c,d){
    this.type=a;
    this.desc=b;
    this.price=c;
    this.image=d;

}


function addfunction(e){
    
    e.preventDefault();
    let form=document.getElementById("products");

    let types=form.type.value;
    let description=form.desc.value;
    let prices=form.price.value;
    let img=form.image.value




let x=new productdata(types,description,prices,img)

let arr=JSON.parse(localStorage.getItem("products")) || [];
console.log(arr)
arr.push(x)

localStorage.setItem("products",JSON.stringify(arr))
// products.reset()
}