
// Rotating professional title on the homepage
const roleText = document.getElementById("roleText");
const roles = ["Journalist", "Communicator", "PR Professional", "Graphic Designer"];
let roleIndex = 0;
if (roleText) {
  setInterval(() => {
    roleText.classList.add("role-out");
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleText.textContent = roles[roleIndex];
      roleText.classList.remove("role-out");
      roleText.classList.add("role-in");
      setTimeout(() => roleText.classList.remove("role-in"), 500);
    }, 450);
  }, 2200);
}

const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{nav.classList.toggle("open");});
document.querySelectorAll(".more").forEach(b=>b.addEventListener("click",()=>{const x=document.getElementById(b.dataset.target);x.classList.toggle("show");b.textContent=x.classList.contains("show")?"Read Less ↑":"Read More →";}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
document.querySelectorAll(".filter").forEach(f=>f.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));f.classList.add("active");const c=f.dataset.filter;document.querySelectorAll(".project").forEach(p=>p.style.display=c==="all"||p.dataset.cat===c?"block":"none")}));
const modal=document.getElementById("modal");document.querySelectorAll(".project").forEach(p=>p.addEventListener("click",()=>{if(!modal)return;modal.querySelector("#modalImg").src=p.querySelector("img").src;modal.querySelector("#modalTitle").textContent=p.dataset.title;modal.querySelector("#modalDesc").textContent=p.dataset.desc;modal.querySelector("#modalCat").textContent=p.querySelector("small").textContent;modal.classList.add("show")}));
document.getElementById("close")?.addEventListener("click",()=>modal.classList.remove("show"));modal?.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("show")});document.addEventListener("keydown",e=>{if(e.key==="Escape")modal?.classList.remove("show")});
document.getElementById("form")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.target);const recipient="beatriceamwoit695@gmail.com";const body=`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")||""}\n\n${d.get("message")}`;location.href=`mailto:${recipient}?subject=${encodeURIComponent(d.get("subject"))}&body=${encodeURIComponent(body)}`;});
