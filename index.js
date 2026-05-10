// smooth scroll — renamed to goTo to avoid conflict with window.scrollTo
function goTo(id){
  const el=document.getElementById(id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
  return false;
}

// =========================================
// 🤖 כאן תשים את קישור הבוט שלך!
// function openBot(){ window.open('https://YOUR_BOT_URL_HERE','_blank'); }
// ואז שני את onclick="toggleChat()" ל onclick="openBot()"
// =========================================

const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{const o=mobileMenu.classList.toggle('open');hamburger.classList.toggle('open',o);hamburger.setAttribute('aria-expanded',o);});
function closeMobile(){mobileMenu.classList.remove('open');hamburger.classList.remove('open');hamburger.setAttribute('aria-expanded','false');}

function toggleChat(){const b=document.getElementById('chatBox'),btn=document.getElementById('chatToggle'),o=b.classList.toggle('open');btn.setAttribute('aria-expanded',o);}
const replies=['תודה על הפנייה! נחזור אליך בקרוב 😊','שמחים לעזור! תוכל/י לפנות גם למייל שלנו 📧','מעולה! רוצה להשאיר פרטים ונחזור אליך?','למידע נוסף — מלא/י את הטופס ונחזור אליך 🙏'];
let ri=0;
function sendMsg(){const i=document.getElementById('chatIn'),m=document.getElementById('chatMsgs'),t=i.value.trim();if(!t)return;const u=document.createElement('div');u.className='user-msg';u.innerHTML='<span>'+t+'</span>';m.appendChild(u);i.value='';setTimeout(()=>{const b=document.createElement('div');b.className='bot-msg';b.textContent=replies[ri%replies.length];ri++;m.appendChild(b);m.scrollTop=m.scrollHeight;},700);m.scrollTop=m.scrollHeight;}
function toggleRole(btn){const p=btn.getAttribute('aria-pressed')==='true';btn.setAttribute('aria-pressed',!p);btn.classList.toggle('selected',!p);}

const secs=['home','how','services','join','contact'];
window.addEventListener('scroll',()=>{let c='home';secs.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-80)c=id;});document.querySelectorAll('.nav-links a').forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+c);});},{passive:true});