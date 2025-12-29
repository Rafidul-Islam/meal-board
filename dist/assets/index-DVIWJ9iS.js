(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const a=async e=>await(await fetch(e)).json(),u=()=>{document.getElementById("details-card").innerHTML="",document.getElementById("details-card").style.display="none"},p=2e3,g=e=>{const n=document.getElementById("details-card");n.innerHTML="";let r="";for(let o=1;o<=20;o++){const t=e[`strIngredient${o}`],s=e[`strMeasure${o}`];t&&t.trim()!==""&&(r+=`${s||""} ${t},  `)}n.innerHTML=`
        <button id="closePopUp"><i class="ri-arrow-left-double-fill"></i></button>

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

            <p style=""><b>Ingredients : </b>${r}</p>
          </div>

          <div style="width: 30%">
            <img width="100%" src="${e.strMealThumb}" alt="" />
          </div>
        </div>
  `,document.getElementById("closePopUp").addEventListener("click",()=>u())},h=e=>{a(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`).then(n=>g(n.meals[0])),document.getElementById("details-card").style.display="block"},m=(e,n,r="",o="card",t="")=>{const s=document.createElement("div");s.classList.add(o),s.id=t;const c=document.createElement("img");c.src=e;const i=document.createElement("h2");if(i.innerText=n,s.append(c,i),r){const l=document.createElement("p");l.innerText=r,s.appendChild(l)}const d=document.createElement("button");return d.innerText="Details",d.classList.add("btn"),s.appendChild(d),d.addEventListener("click",()=>h(t)),s},y=(e,n)=>{const r=document.getElementById(n);r.style.display="grid",r.innerHTML="";for(let o of e){const t=m(o.strMealThumb,o.strMeal,"","card",o.idMeal);r.appendChild(t)}},f=e=>{a(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`).then(n=>{y(n.meals,"meals")})},b=(e,n)=>{const r=document.getElementById(n);r.innerHTML="";for(let o of e){const t=m(o.strCategoryThumb,o.strCategory);r.appendChild(t),t.addEventListener("click",()=>f(o.strCategory))}},E="https://www.themealdb.com/api/json/v1/1/categories.php";a(E).then(e=>{b(e.categories,"categories")});const I=()=>document.getElementById("search-bar").value,v=e=>{document.getElementById("back-btn").style.display="block",a(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`).then(n=>y(n.meals,"meals"))};document.getElementById("search-bar").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.value!==""){document.getElementById("hero").style.display="none",document.getElementById("categories-container").style.display="none",document.getElementById("about").style.display="none",document.getElementById("contact").style.display="none";let n=I();v(n)}});document.getElementById("back-btn").addEventListener("click",()=>{document.getElementById("meals").style.display="none",document.getElementById("back-btn").style.display="none",document.getElementById("hero").style.display="flex",document.getElementById("categories-container").style.display="",document.getElementById("about").style.display="flex",document.getElementById("contact").style.display="flex"});
