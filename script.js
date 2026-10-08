const games=[
{name:"Badshah Saves",cat:"Arcade",version:"1.0",size:"~916 KB",icon:"👑",desc:"Tap to flap, dodge the towers and beat your best score.",url:"games/badshah-saves.html",action:"PLAY NOW"},
{name:"Coming Soon",cat:"Action",version:"1.0",size:"—",icon:"🚀",desc:"Your next action game will appear here.",url:"#",action:"DOWNLOAD APK"},
{name:"New Game",cat:"Arcade",version:"1.0",size:"—",icon:"👾",desc:"Fast, fun and ready for mobile players.",url:"#",action:"DOWNLOAD APK"},
{name:"Racing Zone",cat:"Racing",version:"1.0",size:"—",icon:"🏎️",desc:"Get ready to race and beat your best time.",url:"#",action:"DOWNLOAD APK"}
];
const grid=document.querySelector("#games"),search=document.querySelector("#search");
let category="All";
function render(){const q=search.value.toLowerCase();const list=games.filter(g=>(category==="All"||g.cat===category)&&g.name.toLowerCase().includes(q));grid.innerHTML=list.length?list.map(g=>`<article class="card"><div class="cover">${g.icon}</div><div class="title">${g.name}</div><div class="meta">${g.cat} • v${g.version} • ${g.size}</div><div class="desc">${g.desc}</div><a class="download" href="${g.url}">${g.action}</a></article>`).join(""):'<div class="empty">No games found. Try another search.</div>'}
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{document.querySelector(".chip.active").classList.remove("active");b.classList.add("active");category=b.dataset.cat;render()});search.oninput=render;render();