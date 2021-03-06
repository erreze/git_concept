/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyJsonStore'
    ],

    init: function(application) {
        yo = this;

        console.log("MainController init");
        this.control({

            '#ex1': {
                click : function ( button ){
                    var container = Ext.getCmp('containerGrid');
                    container.layout.setActiveItem(0);
                    console.log('#ex1');
                }
            },
            '#ex2': {
                click : function ( button ){
                    var container = Ext.getCmp('containerGrid');
                    container.layout.setActiveItem(1);
                    container.layout.setActiveItem(1);
                }
            },
            '#ex3': {
                click : function ( button ){
                    var container = Ext.getCmp('containerGrid');
                    container.layout.setActiveItem(2);

                }
            },
            '#ex4': {
                click : function ( button ){
                    var container = Ext.getCmp('containerGrid');
                    container.layout.setActiveItem(3);
                }
            },
            '#moreB' : {
                click : function ( button ) {
                    var store = this.getMyJsonStoreStore();


                    Ext.Ajax.request({
                        url : 'data/loadMore.json',
                        method : 'post',
                        timeout : '30000',
                        defaultHeaders : {
                            'Content-Type' : 'application/json; charset=utf-8'
                        },
                        success : function ( response, opt ){
                            var data = response.responseText.tickets;
                            console.log(data);
                            var result = Ext.decode( response.responseText );
                            var tickets = result.tickets;
                            //console.log(tickets[0]);
                            var json;

                            for ( i=0; i < tickets.length; i++ ){
                                yo.addStore(store, tickets[i]);

                                //var d = myPanel.body.dom;
                                //d.scrollTop = d.scrollHeight - d.offsetHeight;
                                //json = Ext.JSON.encode (tickets[i]);
                                //console.log(json);
                                //store.add(json);
                            }
                            var myPanel = Ext.getCmp('mainContainer'); 
                            //console.log("mypanel", myPanel);
                            //var d = myPanel.body.dom;
                            //d.scrollTop = d.scrollHeight - d.offsetHeight;
                            //console.log(myPanel);
                            //Ext.getCmp('mainContainer').body.scrollTo('top',200); 

                        },
                        failure : function ( response, opt ){

                        }
                    });

                    /*store.add({
                    flag : 1,
                    ticketNumber : "2013110400023",
                    status : "OPEN-TO BE WORKED",
                    serviceID : "8002174253",
                    issueType : "Request for information",
                    productType : "DIALTF",
                    createdDate : "11/04/2013",
                    primaryContact : "Jairo Sencion"
                    });
                    */
                    console.log(store);
                }
            },
            '#loadMore': {
                click : function ( button ) {
                    var store = this.getMyJsonStoreStore();


                    Ext.Ajax.request({
                        url : 'data/loadMore.json',
                        method : 'post',
                        timeout : '30000',
                        defaultHeaders : {
                            'Content-Type' : 'application/json; charset=utf-8'
                        },
                        success : function ( response, opt ){
                            var data = response.responseText.tickets;
                            console.log(data);
                            var result = Ext.decode( response.responseText );
                            var tickets = result.tickets;
                            //console.log(tickets[0]);
                            var json;

                            for ( i=0; i < tickets.length; i++ ){
                                yo.addStore(store, tickets[i]);
                                //var myPanel = Ext.getCmp('mainContainer'); 
                                //var d = myPanel.body.dom;
                                //d.scrollTop = d.scrollHeight - d.offsetHeight;
                                //json = Ext.JSON.encode (tickets[i]);
                                //console.log(json);
                                //store.add(json);
                            }

                        },
                        failure : function ( response, opt ){

                        }
                    });

                    /*store.add({
                    flag : 1,
                    ticketNumber : "2013110400023",
                    status : "OPEN-TO BE WORKED",
                    serviceID : "8002174253",
                    issueType : "Request for information",
                    productType : "DIALTF",
                    createdDate : "11/04/2013",
                    primaryContact : "Jairo Sencion"
                    });
                    */
                    console.log(store);
                }
            },
        });
    },

    addStore: function(store, obj) {
        store.add({
            flag : obj.flag,
            ticketNumber : obj.ticketNumber,
            status : obj.status,
            serviceID : obj.serviceID,
            issueType : obj.issueType,
            productType : obj.productType,
            createdDate : obj.createdDate,
            primaryContact : obj.primaryContact
        });
    }

});
