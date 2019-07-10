
// Load up components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/index.scss';
import Template from './components/akqa'
import SelectBox from './components/akqa/select-box'

// quick api call
fetch('https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
      //call render after products are ready
    createPage(data);
  })
  
function createPage (data){
    // components
    const template = new Template(data);
    const selectBox = new SelectBox(data);
    //this is where we add the data templatestring to the dom
    const templateLoadingArea = document.getElementById('root');
    const selectSizeContainer = document.getElementById('select-size');
    templateLoadingArea.innerHTML = template.render();
    selectSizeContainer.innerHTML = selectBox.render();
    selectBox.sizeChange(templateLoadingArea)
}









