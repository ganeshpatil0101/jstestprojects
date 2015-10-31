$(document).ready(function() {
	var parentIframe = window.parent.document.getElementById("clickcloudiframe");
	console.log(parentIframe);
	var colorboxOption = {
            iframe: true,
            open: true,
            width: "100%",
            height: "100%",
            initialHeight:"100%",
            initialWidth:"100%",
            opacity: 0.7,
            speed: 2,
            fadeOut: 10,
            fastIframe: false,
            onOpen: function() {
            	console.log("onOpen callback called ");
                $("#colorbox").hide();
            },
            onComplete:function() {
                console.log("onComplete called  ");                
                $("#colorbox").show();
            },
            onClosed:function() {
            	console.log("onClosed called ");
            },
            onCleanup: function() {
            	console.log("onCleanup");
            	parentIframe.style.width = "200px";
        		parentIframe.style.height = "60px";
        		parentIframe.style.position = "";
            },
            onLoad: function() {
            	console.log("onload called ");	
            }
        };

	$("a#clickcoudlink").click(function() {
        parentIframe.style.width = "100%";
        parentIframe.style.height = "100%";
        parentIframe.style.position = "absolute";
        parentIframe.style.top = 0;
        parentIframe.style.left = 0;

		var iframeSrc = $(this).data("modalLoad");
        $(this).attr('href', iframeSrc);
        $(this).load(function() {
        	console.log("loaded");
        });
        $(this).colorbox(colorboxOption);
        return false;
	});
});