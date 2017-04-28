function searchForm(){
    // code here

    // nodos del formulario
    const searchFormText = document.getElementById("searchFormText");
    const searchFormButton = document.getElementById("searchFormButton");
    
    
    // acumulador que tendra todos los titulos
    let acumTitles = [];

    // habilitar el boton buscar
    searchFormText.onkeyup = function(e){
        if(e.target.value.length > 0){
            searchFormButton.disabled = false;
            searchFormButton.classList.remove("search-form-button");
        }else{
            searchFormButton.disabled = true;
            searchFormButton.classList.add("search-form-button");

        }
    }

    // llenar el array de titulos y configurar el autocompletar
    loadJSON(JSON_FILE, function(e){
        e.data.forEach( t => {
            acumTitles.push(t.title);
        });

        new Awesomplete(searchFormText, { 
            list: acumTitles,
            minChars : 3,
            maxItems : 7 
        });
    });


 
}
