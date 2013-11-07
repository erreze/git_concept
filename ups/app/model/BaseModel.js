/*
 * File: app/model/BaseModel.js
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

Ext.define('MyApp.model.BaseModel', {
    extend: 'Ext.data.Model',

    init: function() {
        console.log("init model");
        this.FormatterObject(this.raw);
    },

    FormatterObject: function(obj) {
        for(var i in obj){
            if(typeof obj[i] == "string"){
                obj[i] = Ext.util.Format.htmlEncode(obj[i]);
            }
            else if(typeof obj[i] == "object"){
                this.getFormatterObject(obj[i]);
            }
        }
    }

});