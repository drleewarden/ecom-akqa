class Template {
    constructor(data){
        this.data = data;
    }
    badge(badge){
        if(badge){
            return `<span class="badge badge-primary">Exclusive Offer</span>`
        } else return ``
    }
    saleItem(onSale){
        if(onSale){
            return `<div class="alert alert-danger col-sm-3" role="alert">
            SALE
            </div>`
        } else return ``
    }
    getProducts(product){      
           return `
           <div class="col-lg-4 col-sm-6 mb-4">
           <div class="card h-100">
             <a href="#"><img class="card-img-top" src="../src/assets/Products/${product.productImage}" alt=""></a>
             <div class="card-body">
               <h4 class="card-title">
                 <a href="#">${product.productName}</a>
               </h4>
               <h3>${product.price}</h3>
               ${this.saleItem(product.isSale)}
               ${this.badge(product.isExclusive)}
               <div class="row col-sm-12">
               <hr class="col-sm-12">
               </div>
               <p class="card-text col-sm-12"><strong>sizes:</strong><em>${product.size.map(size=>{return size})}</em></p>
               <button type="button" class="btn btn-dark">buy now</button>
             </div>
           </div>
           </div>`
    }

    render(){
        console.log(this.data)
        return `
                <div class="container">

                
                <h1 class="my-4">
                    AKQA
                    <small>Code Test</small>
                </h1>

                <div class="row">
                ${this.data.map(product =>{
                    return this.getProducts(product)
                }
                ).join('')
            }
            </div>
            </div>
        `
    }
    
}
export default Template