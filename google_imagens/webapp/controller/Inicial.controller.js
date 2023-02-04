sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel" //instanciando bibliotecas
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("googleimagens.controller.Inicial", {
            onInit: function () {
                let imageList = {
                    Imagens: [
                        // {
                        //     url:"http://sm.ign.com/ign_es/cover/p/pokemon/pokemon_dgjw.jpg",
                        //     thumbnail:"https://rapidapi.usearch.com/api/thumbnail/get?value=760962591741364211",
                        //     title:"Pokemon",
                        //     provider:{
                        //         name:"Pokemon"
                        //     }
                        // }
                    ]
                };

                // FUNÇÃO PARA EXIBIR OS DADOS NA TELA:
                let imageModel = new JSONModel(imageList);
                // instanciar meu objeto à tela
                let view = this.getView();
                view.setModel(imageModel, "ModeloImagem");


            },
            onPressBuscar: function() {
                // instancia o objeto do input na variável
                let inputBusca = this.byId("_IDGenInput1");
                // coleta o valor digitado no input
                let query = inputBusca.getValue();
                // alert(query);

                // realizar chamada da api (JQUERY - COPIADO DA RAPIDAPI)
                const settings = {
                    "async": true,
                    "crossDomain": true,
                    // concatenar o valor digitado na url da api
                    "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q="+query+"&pageNumber=1&pageSize=10&autoCorrect=true",
                    "method": "GET",
                    "headers": {
                        "X-RapidAPI-Key": "611c7bf48amshef5d0a7ca47258ep13c21ejsn722d3af860c7",
                        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                    }
                };
                
                $.ajax(settings).done(function (response) {
                    console.log(response);

                    // instanciar o modelo:
                    let oImageModel = this.getView().getModel("ModeloImagem");
                    let oDadosImage = oImageModel.getData();

                    // limpar o array de imagens
                    oDadosImage.Imagens = [];

                    // loop que adiciona dados de um array em outro array
                    let listaResultados = response.value;
                    let newItem;

                    for(var i = 0; i <= listaResultados.length; i++){
                       newItem = listaResultados[i];
                       oDadosImage.Imagens.push(newItem); //adicionar a imagem na lista oDados 
                    }

                    // atualizar o modelo
                    oImageModel.refresh();
                
                }.bind(this) // receber outras variáveis locais
                );
            }
        });
    });
