sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
    // Below for Button Modla

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("appartments.controller.View1", {
            onInit: function () {
                this.onReadAll();
                
            },
            onReadAll: function () {
                const that = this;
                const oModel = this.getOwnerComponent().getModel();
                oModel.read("/APPARTMENTSHeadersSet", {
                    success: function (oData) {
                        // console.log(oData);
                        const jModel = new sap.ui.model.json.JSONModel(oData);
                        console.log(jModel.oData);
                        // that.getView("idProducts").setModel(jModel);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                });

            },
            onReadFilters: function () {
                const that = this
                const oModel = this.getOwnerComponent().getModel();
                const oFilter = new sap.ui.model.Filter('NbrPieces', 'EQ', '03s')

                oModel.read('/APPARTMENTSHeadersSet', {
                    filters: [oFilter],
                    success: function (oData) {
                        console.log(oData);
                        const jModel = new sap.ui.model.json.JSONModel(oData);
                        that.getView("idProducts").setModel(jModel);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            },
            onReadSorter: function () {
                const that = this
                const oModel = this.getOwnerComponent().getModel();
                const oSorter = new sap.ui.model.Sorter('PrixNuitee', true)
                oModel.read('/APPARTMENTSHeadersSet', {
                    sorters: [oSorter],
                    success: function (oData) {
                        console.log(oData);
                        const jModel = new sap.ui.model.json.JSONModel(oData);
                        that.getView("idProducts").setModel(jModel);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            },
            onReadParameters: function () {
                const that = this
                const oModel = this.getOwnerComponent().getModel();
                oModel.read('/APPARTMENTSHeadersSet', {
                    urlParameters: { $skip: 0, $top: 2 },
                    success: function (oData) {
                        console.log(oData);
                        const jModel = new sap.ui.model.json.JSONModel(oData);
                        that.getView("idProducts").setModel(jModel);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            },
            onReadyKey: function () {
                // Working
                const that = this
                const oModel = this.getOwnerComponent().getModel();
                oModel.read("/APPARTMENTSHeadersSet('Test22')", {
                    // urlParameters: {$skip:0, $top:2},
                    success: function (oData) {
                        console.log(oData);
                        const jModel = new sap.ui.model.json.JSONModel({ results: [oData] });
                        that.getView("idProducts").setModel(jModel);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            },
            onRowSelection: function (oEvent) {
                const oSelectedItem = oEvent.getSource().getSelectedItem();
                console.log(oEvent.getSource().getSelectedItem().getBindingContext());
                console.log(oEvent.getSource().getSelectedItem().getBindingContext().getProperty(null, oEvent.getSource().getSelectedItem().getBindingContext()));
                const oContext = oSelectedItem.getBindingContext();
                const oData = oContext.getProperty(null, oContext);
                // "oData" contains the row data
                // Use it as per your requirement
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appartmentsDetails", { id: oData.Identifiant });
            }

        });
    });
