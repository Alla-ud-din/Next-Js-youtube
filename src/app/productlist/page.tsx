import Product from "./product";

async function productList() {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    return data.products
}

export default async function Page() {

    let products = await productList();
    // console.log(products);
    return (<div>
        <h1>Product List</h1>
        {
            products.map((item : any) => (
                <div>
                    <h3>Name: {item.title}</h3>
                   <Product price={item.price} />
                </div>
            ))
        }
    </div>)
}