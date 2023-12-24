
async function productList() {
  let res = await fetch("https://dummyjson.com/products");
  let data = await res.json();
  return data.products;
}

export default async function Page() {
  let product = await productList();
  console.log(product);
  return (<div> 
      <h1>Product List</h1>
      {
          product.map((item: any)=>(
              <div><h3>Name: {item.title} and Price: {item.price}</h3></div>
          ))
      }
  </div>)
}