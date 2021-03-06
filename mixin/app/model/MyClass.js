/*
 * File: app/model/MyClass.js
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

Ext.define('MyApp.model.MyClass', {
    extend: 'Ext.Base',

    mixins: {
        floating: 'Ext.util.Floating',
        observable: 'Ext.util.Observable'
    },

    width: 100,
    height: 100,
    border: true,

    constructor: function(options) {
        Ext.apply(this.options);
        this.id = Ext.id(null,"icon-");
        this.addEvents("moved", "created");

        if (this.renderTo){
            this.render(this.renderTo);
            delete this.renderTo;
        }
        this.mixins.floating.constructor.call(this);
        this.mixins.observable.constructor.cal(this);
    },

    render: function(where) {
        if(where){
            this.container = Ext.get(where);			// 1
            this.el = Ext.core.DomHelper.append(where,{	// 2
                id	: this.id,
                tag	: "div"
            });
            this.el = Ext.get(this.el);
            this.el.setStyle({					// 3
                width	: this.width?this.width+"px":"auto",
                height	: this.height?this.height+"px":"auto",
                border	: this.border?"1px solid #aaa":"none",
                background	: "#eee"
            });
        }
    },

    setPagePosition: function(xy) {
        this.el.setLeftTop(xy[0]+"px",xy[1]+"px");
        this.fireEvent("moved",xy);
    }

});