
odoo.define('myuhuu.widget', function (require) {
    "use strict";
    // import the required object to create a widget
    //var AbstractField = require('web.AbstractField');
    //var FieldRegistry = require('web.field_registry');
 
    // import qweb to render a view
    const env = require('web.env');
    const session = require("web.session");
    var ajax = require('web.ajax');
    console.log("Env:: id Debug:: ",env.isDebug())
    console.log("ession.username:: ",session.username)
    // create an object with any name
    if(!session.username)
        return true;
    if(session.username.toLowerCase() == 'Demo'.toLowerCase())
        return true;
        
    
    if( !window.UHUUWidget ){
        window.UHUUOdoo = {
            env: env,
            session:session
        };
        ajax.jsonRpc('/myuhuu',
            'call', 
            {'test_variable' : "Saludos"},
            {'async': false}
        ).then(function (data) {
            console.group("jsonRpc myuhuu")
            console.log(data);
            console.groupEnd()
        });
        setTimeout(()=>{
            var h = document.getElementsByTagName('script')[0], j = document.createElement('script');
            j.async = false; 
            j.src = 'https://uhuuvoipfiles.s3.us-west-1.amazonaws.com/qa/uhuuWidgets.js';//Revisar url correcta
            h.parentNode.insertBefore(j, h);
            j.addEventListener('load', () => {
                console.log("Hemos cargado uhuuWidgets.js")
                if( !window.UhuuChat ){
                    setTimeout(function(){ 
                        window.UhuuChatUrl = "https://omnichanneldev.myuhuu.com";
                        console.log("handleUhuuBtn -- uhuuchat : afterload script - window.UHUUWidget = ",window.UHUUWidget)
                        //window.UHUUWidget.setUhuuWidgetOption( option.name, option.urlApp, option.params )
                        var h2 = document.getElementsByTagName('script')[0], j2 = document.createElement('script');
                        j2.async = false; 
                        j2.src = 'https://793b-2806-2f0-7080-8483-5c0-ea47-2d6d-2160.ngrok.io/uhuuchatmini.min.js';
                        h2.parentNode.insertBefore(j2, h2);
                        j2.addEventListener('load', () => {
                            console.log("handleUhuuChatBtn -- UHUUWidget.options 1:: ", window.UHUUWidget.options)
                            console.log("Hemos cargado uhuuchatmini.min.js")
                        })
                    },100)
                }
                if( !window.UHUUVoIp ){
                    var h2 = document.getElementsByTagName('script')[0], j2 = document.createElement('script');
                    j2.async = false; 
                    j2.src = 'https://voipqa.myuhuu.com/uhuuvoip.js';
                    h2.parentNode.insertBefore(j2, h2);
                    j2.addEventListener('load', () => {
                        console.log("handleUhuuVoIpBtn -- UHUUWidget.options 2:: ", window.UHUUWidget.options)
                        console.log("handleUhuuVoIpBtn -- Hemos cargado los 2 scripts")
                    })
                }

                if( !window.UHUUVideo ){
                    var h2 = document.getElementsByTagName('script')[0], j2 = document.createElement('script');
                    j2.async = false; 
                    j2.src = 'https://uhuuvoipfiles.s3.us-west-1.amazonaws.com/uhuuvideo.js';
                    h2.parentNode.insertBefore(j2, h2);
                    j2.addEventListener('load', () => {
                        console.log("handleUhuuVideoBtn -- UHUUWidget.options 2:: ", window.UHUUWidget.options)
                        console.log("handleUhuuVideoBtn -- Hemos cargado los 2 scripts")
                    })
                }
            })
        },500);
    }
 
    // return the widget object
    // so it can be inherited or overridden by another module
    return true; //WidgetOne;
 
});