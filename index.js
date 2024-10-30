(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const a={backwardBtn:document.querySelector(".backward-icon"),forwardBtn:document.querySelector(".forward-icon"),playControl:document.querySelector(".play-control")},o=document.getElementById("progress"),r=document.getElementById("song");let n=!1;r.onloadedmetadata=function(){o.max=r.duration,o.value=r.currentTime};a.playControl.addEventListener("click",s);function s(){n?(r.pause(),a.playControl.innerHTML=`<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="play icon"
            >
              <path d="m6 4 20 12L6 28z"></path>
            </svg>`,n=!1):(r.play(),a.playControl.innerHTML=`<svg
              class="icon play-icon"
              width="40"
              height="40"
              aria-label="pause icon"
            >
              <path d="M4 4h10v24H4zm14 0h10v24H18z"></path>
            </svg>`,n=!0)}r.addEventListener("timeupdate",function(){o.value=r.currentTime});o.oninput=function(){r.play(),r.currentTime=o.value,n=!1,s()};
//# sourceMappingURL=index.js.map
