const slides=[...document.querySelectorAll('.hero-slide')];const dots=[...document.querySelectorAll('.dot')];let current=0,timer;
function showSlide(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));dots.forEach((d,n)=>d.classList.toggle('active',n===current));}
function resetTimer(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),7000)}
document.getElementById('prev').addEventListener('click',()=>{showSlide(current-1);resetTimer()});
document.getElementById('next').addEventListener('click',()=>{showSlide(current+1);resetTimer()});
dots.forEach(d=>d.addEventListener('click',()=>{showSlide(Number(d.dataset.slide));resetTimer()}));resetTimer();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
