!function(){var t=null,n={body:document.body,startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};n.startBtn.addEventListener("click",(function(){t=setInterval((function(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),n.startBtn.disabled=!0}),1e3)})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.stopBtn.disabled=!1,n.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.9707234a.js.map