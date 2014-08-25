# jSugar

This is a fork of [phiggins42/plugd](https://github.com/phiggins42/plugd). Plugd
wanted to be a toy library, this one is more serious.

This **intends to be** a jquery compatility shim. The initial goal is to be
compatible enough to run [zurb.foundation](http://foundation.zurb.com). We are
not yet.






## Getting Started

Assuming you have a folder with dojo checked out along with jSugar.

```html
<html>
    <head>
        <title>Hello jSugar</title>
    </head>
    <body>
      <a href="#foo">foo</a>
      <script src="dojo/dojo.js"
        data-dojo-config="async: true, conflict: true"></script>
    <script>
    require(["jSugar/$", "dojo/domReady!"], function(){
      $("a").click(function(){
        console.log($(this).text(), "clicked");
        return false;
      });
    });
    </script>
  </body>
</html>
```





## How can I help?

To start, try it out! Plop `jSugar/$` into any Dojo-enabled page and play around
with the API's provided. If something doesn't work as you'd expect, or some 
convenient function is missing, mention it in the issue tracker. 






## License

_jSugar_ is derived from _plugd_, and is available under the same dual New BSD 
/ Academic Free License as Dojo - you are free to use it under the same 
[terms and conditions](http://dojotoolkit.org/license) of the "real" Dojo 
Project.
