(function(){if(!window.pmxbot){function i(){document.body.style.overflow="initial";e.parentNode.removeChild(e);window.pmxbot=false;m()}function g(c){if(c.which>31&&c.which<41&&c.target===document.body){c.preventDefault();c.stopImmediatePropagation()}}function k(c){c.preventDefault();c.stopImmediatePropagation()}function b(){window.addEventListener("DOMMouseScroll",k);window.addEventListener("keydown",g)}function m(){window.removeEventListener("DOMMouseScroll",k);window.removeEventListener("keydown",g)}var n="//ircbot.example.com/";window.pmxbot=true;b();var j=document.createElement("div"),e=document.createElement("div");e.setAttribute("style","position:absolute;width:100%;background-color:rgba(0,0,0,.5);z-index:2147483647;text-align:center");e.id="pmxover";e.style.height=window.innerHeight+"px";e.style.top=window.scrollY+"px";e.style.left=window.scrollX+"px";var r="padding:1em;background:#fff;border:1px #ccc solid;margin:.5em;width:90%;border-radius:0;",p="text-align:center;font-family:Helvetica,Arial;";j.setAttribute("style",p+"background-color:#eee;padding: 1em;width:25em;position:relative;top:50%;transform:translateY(-50%);margin:auto;box-shadow:0 0 30px #555;border-radius:0.25em;");e.appendChild(j);document.body.appendChild(e);document.body.style.overflow="hidden";var h=document.createElement("form"),u=document.createElement("input"),l=document.createElement("input");u.setAttribute("type","submit");l.setAttribute("type","button");h.innerHTML="<span style='font-size:2em;float:left;padding-left:.2em;color:#666;'>pmxbot</span><input id='pmxchn' placeholder='Channel' style='"+p+r+"'><br><input id='pmxmsg' placeholder='Message' style='"+p+r+"' value='"+document.URL+"'>";var a="all:initial;margin:.5em;width:42.5%;cursor:pointer;padding:.5em 0;";u.setAttribute("style",a+p+"background:#5dc251;border:0;box-shadow:0 3px 0 #409936;color:#dbf0df");l.setAttribute("style",a+p+"background:#f66;border:0;box-shadow:0 3px 0 #e01414;color:#fcc");u.setAttribute("value","Submit");l.setAttribute("value","Cancel");h.style.marginBottom="0";h.appendChild(u);h.appendChild(l);j.appendChild(h);document.getElementById("pmxmsg").focus();document.getElementById("pmxchn").value=localStorage.getItem("strchn")||"";document.getElementById("pmxchn").addEventListener("keyup",function(){localStorage.setItem("strchn",this.value)});h.addEventListener("submit",function(o){o.stopImmediatePropagation();o.preventDefault();var c=new XMLHttpRequest(),d=document.getElementById("pmxchn").value,f=document.getElementById("pmxmsg").value;c.open("POST",n+d,true);c.setRequestHeader("Content-type","text/plain");c.onreadystatechange=function(){if(c.readyState===4){if(c.status===200){i()}else{alert("Err: Received Code: "+c.status)}}};c.send(f)});e.addEventListener("click",function(c){c.stopImmediatePropagation();if(c.target.id==="pmxover"){i()}});e.addEventListener("keyup",function(c){if(c.which===27){i()}});l.addEventListener("click",function(c){c.stopImmediatePropagation();i()})}})();
