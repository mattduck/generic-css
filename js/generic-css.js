var genericCSSToggle;
(function () { 
    genericCSSToggle = function (mode){
        if (mode == "none"){
            // Disable all #generic-css-$mode stylesheets
            for (var i=0; i<document.getElementsByTagName("link").length; i++){
                var link = document.getElementsByTagName("link")[i];
                if (link.getAttribute("id").indexOf("generic-css") == 0){
                    link.disabled = true;
                }
            }
        }
        else {
            // Enable only the #generic-css-$mode stylesheet
            var this_css_link = document.getElementById('generic-css-' + mode);
            this_css_link.disabled = false;

            for (var i=0; i<document.getElementsByTagName("link").length; i++){
                var link = document.getElementsByTagName("link")[i];
                if (link.getAttribute("id").indexOf("generic-css") == 0){
                    if (link.getAttribute("href") != this_css_link.getAttribute("href")){
                        link.disabled = true;
                    }
                }
            }
        }
        if (window.localStorage){
            localStorage.setItem("generic-css-toggle", mode);
        }
        return;
    }


    if (window.localStorage){
        if (localStorage.getItem("generic-css-toggle")){
            genericCSSToggle(localStorage.getItem("generic-css-toggle"));
        }
    }


    window.onload = function(e){
        var old_html = document.body.innerHTML;
        var new_html = [
            "<button onclick='genericCSSToggle(\"light\")'>Light</button>",
            "<button onclick='genericCSSToggle(\"dark\")'>Dark</button>",
            "<button onclick='genericCSSToggle(\"none\")'>No style</button>",
            ].join('\n');
        document.body.innerHTML = new_html + old_html;
    }
})();
