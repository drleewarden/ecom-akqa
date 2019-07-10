import Template from './index'
export default class SelectBox{
    constructor(data){
        this.data = data;
    }
    render(){
        return `
        <div class="container">
                <h1 class="my-4 col-sm-4 col-md-2">
                    AKQA
                    <small>Code Test</small>
                </h1>
            <select id="size" class="form-control form-control-lg col-sm-4 col-md-2">
                <option value="all">ALL products</option>
                <option value="S">S</option>
                <option value="XS">XS</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
        </div>`;
    }
    sizeChange(templateLoadingArea){
        const productTemplate = new Template(this.data);
        const selectSize = document.getElementById('size');
        selectSize.addEventListener('change',(el)=>{
            templateLoadingArea.innerHTML = productTemplate.render(el.srcElement.value);
        })
    }
}