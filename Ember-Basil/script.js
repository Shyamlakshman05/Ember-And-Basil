const menu={Pasta:[["Truffle Pappardelle","Wild mushrooms, parmesan & black truffle.","₽1,150"],["Bucatini Pomodoro","San Marzano tomatoes, basil & aged parmesan.","₽980"],["Lobster Linguine","Lobster, cherry tomatoes, garlic & chili.","₽1,450"]],Pizza:[["Margherita","San Marzano tomato, mozzarella & basil.","₽750"],["Diavola","Spicy salami, tomato, mozzarella & chili.","₽1,050"],["Prosciutto & Truffle","Prosciutto, mushrooms & truffle cream.","₽1,250"]],Mains:[["Herb-Crusted Sea Bass","Roasted sea bass, lemon butter & vegetables.","₽1,550"],["Tuscan Chicken","Roasted chicken, herbs & seasonal vegetables.","₽1,250"],["Milanese Veal","Crispy veal, rocket, lemon & parmesan.","₽1,650"]],Desserts:[["Tiramisu","Espresso, mascarpone, cocoa & dark chocolate.","₽650"],["Panna Cotta","Vanilla cream with seasonal berries.","₽600"],["Chocolate Tart","Dark chocolate, sea salt & vanilla cream.","₽700"]]};
const tabs=document.getElementById("tabs"),list=document.getElementById("menuList");let category="Pasta";
function renderMenu(){tabs.innerHTML=Object.keys(menu).map(k=>`<button class="${k===category?"active":""}" data-category="${k}">${k}</button>`).join("");list.innerHTML=menu[category].map(x=>`<div class="menu-item"><div><h3>${x[0]}</h3><p>${x[1]}</p></div><span>${x[2]}</span></div>`).join("")}renderMenu();
tabs.addEventListener("click",e=>{if(e.target.dataset.category){category=e.target.dataset.category;renderMenu()}});
const mobileNav=document.getElementById("mobileNav");document.getElementById("hamburger").addEventListener("click",()=>mobileNav.classList.toggle("open"));
document.querySelectorAll("[data-scroll]").forEach(b=>b.addEventListener("click",()=>{document.getElementById(b.dataset.scroll)?.scrollIntoView({behavior:"smooth"});mobileNav.classList.remove("open")}));
const modal=document.getElementById("modal");document.querySelectorAll("[data-reserve]").forEach(b=>b.addEventListener("click",()=>modal.classList.add("open")));document.getElementById("closeModal").addEventListener("click",()=>modal.classList.remove("open"));modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
document.getElementById("reservationForm").addEventListener("submit",e=>{e.preventDefault();alert("Reservation request received.");modal.classList.remove("open")});
document.getElementById("maps").addEventListener("click",()=>window.open("https://www.google.com/maps/search/?api=1&query=Bolshaya+Nikitskaya+Street+Moscow","_blank"));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
// Cinematic evening-section reveal + subtle scroll parallax
const evening=document.querySelector('.atmosphere');
const eveningBg=document.querySelector('.atmosphere-bg');
if(evening && eveningBg){
  const eveningObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  }),{threshold:.22});
  eveningObserver.observe(document.querySelector('.atmosphere-text'));
  let ticking=false;
  window.addEventListener('scroll',()=>{
    if(ticking)return; ticking=true;
    requestAnimationFrame(()=>{
      const r=evening.getBoundingClientRect();
      if(r.bottom>0 && r.top<window.innerHeight){
        const progress=(window.innerHeight-r.top)/(window.innerHeight+r.height);
        eveningBg.style.transform=`scale(1.1) translate3d(0,${(progress-.5)*22}px,0)`;
      }
      ticking=false;
    });
  },{passive:true});
}
