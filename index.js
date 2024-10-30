(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const c={backwardBtn:document.querySelector(".backward-icon"),forwardBtn:document.querySelector(".forward-icon"),playControl:document.querySelector(".play-control")},r=document.getElementById("progress"),o=document.getElementById("song");let n=!1;o.onloadedmetadata=function(){r.max=o.duration,r.value=o.currentTime};c.playControl.addEventListener("click",a);function a(){n?(o.pause(),c.playControl.innerHTML=`<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="play icon"
            >
              <use href="/img/icons.svg#icon-play3"></use>
            </svg>`,n=!1):(o.play(),c.playControl.innerHTML=`<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="pause icon"
            >
              <use href="/img/icons.svg#icon-pause2"></use>
            </svg>`,n=!0)}o.addEventListener("timeupdate",function(){r.value=o.currentTime});r.oninput=function(){o.play(),o.currentTime=r.value,n=!1,a()};
//# sourceMappingURL=index.js.map
