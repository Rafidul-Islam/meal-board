(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const d=async e=>await(await fetch(e)).json(),h=()=>{document.getElementById("details-card").style.display="none"},p=2e3,g=e=>{const n=document.getElementById("details-card");n.innerHTML="";let o="";for(let r=1;r<=20;r++){const t=e[`strIngredient${r}`],s=e[`strMeasure${r}`];t&&t.trim()!==""&&(o+=`${s||""} ${t},  `)}n.innerHTML=`
        <button id="closePopUp">Close</button>

        <div id="meal-description">
          <div style="padding: 5px; width: 70%">
            <h2>${e.strMeal}</h2>
            <p>
              <b>Instruction :</b>${e.strInstructions.length>p?e.strInstructions.slice(0,p)+"...":e.strInstructions}",
            </p>

            <div style="display: flex; gap: 20px; padding: 10px 0">
              <p><b>Category</b> : ${e.strCategory}</p>
              <p><b>Origin</b> : ${e.strArea}</p>
              <a href="${e.strYoutube}"> Watch Recipie </a>
              <p>${e.strTags?"#"+e.strTags:""}</p>
            </div>

            <p style=""><b>Ingredients : </b>${o}</p>
          </div>

          <div style="width: 30%">
            <img width="100%" src="${e.strMealThumb}" alt="" />
          </div>
        </div>
  `,document.getElementById("closePopUp").addEventListener("click",()=>h())},m=e=>{document.getElementById("details-card").style.display="block",d(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`).then(n=>g(n.meals[0]))},u=(e,n,o="",r="card",t="")=>{const s=document.createElement("div");s.classList.add(r),s.id=t;const i=document.createElement("img");i.src=e;const a=document.createElement("h2");if(a.innerText=n,s.append(i,a),o){const l=document.createElement("p");l.innerText=o,s.appendChild(l)}const c=document.createElement("button");return c.innerText="Details",c.classList.add("btn"),s.appendChild(c),c.addEventListener("click",()=>m(t)),s},f=(e,n)=>{const o=document.getElementById(n);o.style.display="grid",o.innerHTML="";for(let r of e){const t=u(r.strMealThumb,r.strMeal,"","card",r.idMeal);o.appendChild(t)}},y=e=>{d(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`).then(n=>{f(n.meals,"meals")})},b=(e,n)=>{const o=document.getElementById(n);o.innerHTML="";for(let r of e){const t=u(r.strCategoryThumb,r.strCategory);o.appendChild(t),t.addEventListener("click",()=>y(r.strCategory))}},w="https://www.themealdb.com/api/json/v1/1/categories.php";d(w).then(e=>{b(e.categories,"categories")});fetchApi("https://www.themealdb.com/api/json/v1/1/categories.php").then(e=>{showCategories(e.categories,"categories")});
