function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("1GAPJ");function l(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=t.target.elements.delay.value,n=t.target.elements.step.value,r=t.target.elements.amount.value;for(let t=1;t<=r;t++)l(t,Number(o)+Number(n*(t-1))).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o} ms`)}),(({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o} ms`)})),console.log(`created promise ${t} with delay ${Number(o)+Number(n*(t-1))}`)}));
//# sourceMappingURL=03-promises.045bd386.js.map