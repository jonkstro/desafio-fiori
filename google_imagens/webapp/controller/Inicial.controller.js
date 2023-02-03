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
                        {
                            url:"http://sm.ign.com/ign_es/cover/p/pokemon/pokemon_dgjw.jpg",
                            thumbnail:"https://rapidapi.usearch.com/api/thumbnail/get?value=760962591741364211",
                            title:"Pokemon",
                            provider:{
                                name:"Pokemon"
                            }
                        },
                        {
                            url:"https://res.cloudinary.com/hgw3j2cp1/image/upload/v1/npm/pokemon.png",
                            thumbnail:"https://rapidapi.usearch.com/api/thumbnail/get?value=5320831070953367435",
                            title:"pokemon - npm Package Health Analysis | Snyk",
                            provider:{
                                name:"Pokemon"
                            }
                        }
                    ]
                };

                // FUNÇÃO PARA EXIBIR OS DADOS NA TELA:
                let imageModel = new JSONModel(imageList);
                // instanciar meu objeto à tela
                let view = this.getView();
                view.setModel(imageModel, "ModeloImagem");


            },
            onPressBuscar: function() {
                let inputBusca = this.byId("_IDGenInput1");
                let query = inputBusca.getValue();
                alert(query);
            }
        });
    });
