var e=document.querySelector(".logo"),n=document.createElement("div");n.classList.add("message"),new Promise(function(n,t){e.addEventListener("click",function(){n("Promise was resolved!")})}).then(function(e){n.innerText=e,document.body.appendChild(n)}),new Promise(function(e,n){setTimeout(function(){n("Promise was rejected!")},3e3)}).catch(function(e){n.classList.add("error-message"),n.innerText=e,document.body.appendChild(n)});
//# sourceMappingURL=index.a3fb4dc1.js.map
