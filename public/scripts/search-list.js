function searchListSaved(){

    // nodos 
    const searchListUl = document.getElementById("searchListUl");
    const listBooks = document.getElementById("listBooks");
    
    // acumulador que tendra todo la lista de búsquedas guardadas
    let acumSaved = "";
    searchListUl.onclick = function(e){
        if(e.target.id === "searchListDel"){
            e.target.closest("li").remove();  

        }
    }
    
    // llenamos el acumulador
    loadJSON(JSON_FILE, function(e){
        e.entities.saved.map( k => {
            acumSaved += `<li class="search-list-li">
                <a href="${k.url}">${k.label}</a>
                <div class="search-list-op">
                    <a href="#" class="search-list-upd" >Editar</a>|
                    <a href="#" class="search-list-del" id="searchListDel">Eliminar</a>
                </div>
            </li>`;

        });
        searchListUl.innerHTML += acumSaved;

    });

}

