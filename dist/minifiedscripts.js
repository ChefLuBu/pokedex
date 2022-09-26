let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):console.log("pokemon is not correct")}function n(){return t}function o(t){pokemonRepository.loadDetails(t).then(function(){var e,n;let o,i,a,r,p,l,s,c;e=t,o=$(".modal-body"),i=$(".modal-title"),a=$(".modal-header"),i.empty(),o.empty(),a.empty(),r=$("<h1>"+e.name+"</h1>"),p=$('<img class="modal-img">'),p.attr("src",e.imageUrl),s=$("<p>Height: "+e.height+"</p>"),c=$("<p>Types: "+(n=e.types,l="",n.forEach((t,e)=>{0===e?l+=t.type.name:l+=`/${t.type.name}`}),l)+"</p>"),i.append(r),o.append(p),o.append(s),o.append(c),a.append(r)})}return{getAll:n,add:e,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),i=document.createElement("li"),a=document.createElement("button");a.innerText=e.name,a.classList.add("button"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#modal-container"),i.appendChild(a),n.appendChild(i),a.addEventListener("click",function(){o(e)})},showDetails:o,loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=950").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:function t(e){return fetch(e.detailsUrl).then(function(t){return t.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types}).catch(function(t){console.error(t)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});