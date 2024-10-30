(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const c={backwardBtn:document.querySelector(".backward-icon"),forwardBtn:document.querySelector(".forward-icon"),playControl:document.querySelector(".play-control")},n=document.getElementById("progress"),o=document.getElementById("song");let i=!1;o.onloadedmetadata=function(){n.max=o.duration,n.value=o.currentTime};c.playControl.addEventListener("click",u);function u(){i?(o.pause(),c.playControl.innerHTML=l(),i=!1):(o.play(),c.playControl.innerHTML=r(),i=!0);function l(){return`<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="play icon"
            >
              <use href="./img/icons.svg#icon-play3"></use>
            </svg>`}function r(){return`<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="pause icon"
            >
              <use href="./img/icons.svg#icon-pause2"></use>
            </svg>`}}o.addEventListener("timeupdate",function(){n.value=o.currentTime});n.oninput=function(){o.play(),o.currentTime=n.value,i=!1,u()};
//# sourceMappingURL=index.js.map
