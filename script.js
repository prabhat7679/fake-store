
fetch("https://fakestoreapi.com/products")
  .then((data) =>{
     return data.json(); 
  })
  .then((fetchData)=>{
      console.log(fetchData)
      let data1="";
      fetchData.map((values)=>{

        data1+=`<div class="card">
        <h4 class="title">${values.title}</h4>
        <img src=${values.image} alt="img" class="image">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">price $${values.price}</p>
        <button>Buy Now</button>
    </div>`
    
      });

      document.getElementById("cards").innerHTML=data1;
  })
  .catch((err)=>{
    console.log(err);
  })