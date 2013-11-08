/*
 * File: app/view/MyViewport.js
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

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'card'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    cls: 'containerCls',
                    id: 'mainContainer',
                    autoScroll: true,
                    layout: {
                        type: 'absolute'
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            x: -2,
                            y: 0,
                            height: 80,
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'ex1',
                                    text: 'Example 1'
                                },
                                {
                                    xtype: 'button',
                                    id: 'ex2',
                                    text: 'Example 2'
                                },
                                {
                                    xtype: 'button',
                                    id: 'ex3',
                                    text: 'Example 3'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            cls: 'gridClsContainer',
                            id: 'containerGrid',
                            autoScroll: true,
                            layout: {
                                type: 'card'
                            },
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    title: 'Example 1',
                                    store: 'MyJsonStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            width: 30,
                                            dataIndex: 'flag',
                                            text: 'Flag'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'ticketNumber',
                                            text: 'Ticket Numer'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'status',
                                            text: 'Status'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'serviceID',
                                            text: 'Service ID'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'issueType',
                                            text: 'Issuetype'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'productType',
                                            text: 'Producttype'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'createdDate',
                                            text: 'createdDate'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'primaryContact',
                                            text: 'primaryContact'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'pagingtoolbar',
                                            dock: 'bottom',
                                            width: 360,
                                            displayInfo: true,
                                            store: 'MyJsonStore'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    autoScroll: true,
                                    title: 'Example 2',
                                    store: 'MyJsonStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            width: 30,
                                            dataIndex: 'flag',
                                            text: 'Flag'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'ticketNumber',
                                            text: 'Ticket Numer'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'status',
                                            text: 'Status'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'serviceID',
                                            text: 'Service ID'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'issueType',
                                            text: 'Issuetype'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'productType',
                                            text: 'Producttype'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'createdDate',
                                            text: 'createdDate'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'primaryContact',
                                            text: 'primaryContact'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'button',
                                            dock: 'bottom',
                                            id: 'loadMore',
                                            padding: '0 20 0 20',
                                            width: 100,
                                            iconAlign: 'top',
                                            text: 'LoadMore'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    title: 'Example 3',
                                    store: 'MyJsonStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                var data  = record.data ; 
                                                return Ext.String.format('<table class="rowticket">'    
                                                +   ' <tr class="rowticketissue">'
                                                +    '    <td><span class="rowticketid">[{0}]</span>{1}</td>'
                                                +   ' </tr>'
                                                +   ' <tr>'
                                                +    '    <td>{2}</td>'
                                                +     '   <td><img class = "fotoGrid" src="http://localhost/git_concept/mockupvec/static/images/flagOn.png" height="15" width="15"></td>'
                                                +'        </tr>'
                                                + '   <tr>'
                                                +  '      <td><span class="subrow">{3}</span></td>'
                                                +        '</tr>'
                                                + '   <tr class="rowticketnumber">'
                                                +  '      <td> '
                                                +   '         <pre class="rowlist">Ticket #<a href="#" class="otherPage">{4}</a>  | Created {5}  |  <a href="#" class="otherPage">{6}</a></pre>'
                                                +    '    </td>'
                                                +   ' </tr>'
                                                +    ''
                                                +'</table>', data.serviceID,data.issueType,data.status,data.productType,data.ticketNumber,data.createdDate,data.primaryContact);
                                            },
                                            dataIndex: 'ticketNumber',
                                            flex: 1
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'button',
                                            dock: 'bottom',
                                            id: 'moreB',
                                            width: 100,
                                            text: 'More :)'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    hidden: true,
                                    title: 'Example 4',
                                    store: 'MyJsonStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            width: 30,
                                            dataIndex: 'flag',
                                            text: 'Flag'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'ticketNumber',
                                            text: 'Ticket Numer'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'status',
                                            text: 'Status'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'serviceID',
                                            text: 'Service ID'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 150,
                                            dataIndex: 'issueType',
                                            text: 'Issuetype'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'productType',
                                            text: 'Producttype'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'createdDate',
                                            text: 'createdDate'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'primaryContact',
                                            text: 'primaryContact'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});