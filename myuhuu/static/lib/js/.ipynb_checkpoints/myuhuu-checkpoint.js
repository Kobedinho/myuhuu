
if( !window.UHUUWidget ){
    window.uhuuOdoo = {};
    setTimeout(()=>{
        var h = document.getElementsByTagName('script')[0], j = document.createElement('script');
        j.async = false; 
        j.src = 'https://1a62-177-232-83-239.ngrok.io/uhuuWidgets.js';//Revisar url correcta
        h.parentNode.insertBefore(j, h);
        j.addEventListener('load', () => {
            console.log("Hemos cargado uhuuWidgets.js")
            /*if( !window.UhuuChat ){
                setTimeout(function(){ 
                    window.UhuuChatUrl = "https://ea06-177-232-83-239.ngrok.io";
                    console.log("handleUhuuBtn -- uhuuchat : afterload script - window.UHUUWidget = ",window.UHUUWidget)
                    //window.UHUUWidget.setUhuuWidgetOption( option.name, option.urlApp, option.params )
                    var h2 = document.getElementsByTagName('script')[0], j2 = document.createElement('script');
                    j2.async = false; 
                    j2.src = 'https://ea06-177-232-83-239.ngrok.io/uhuuchatmini.min.js';
                    h2.parentNode.insertBefore(j2, h2);
                    j2.addEventListener('load', () => {
                        //console.log("handleUhuuChatBtn -- UHUUWidget.options 1:: ", window.UHUUWidget.options)
                        console.log("Hemos cargado uhuuchatmini.min.js")
                    })
                },100)
            }*/

        })
    },500);
}