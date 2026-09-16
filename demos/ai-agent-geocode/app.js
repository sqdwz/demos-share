
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));


// 图片：统一点击放大，支持 Enter / Space、Esc 关闭、点击背景关闭
const lightbox=document.getElementById('imageLightbox');
const lightboxImg=lightbox.querySelector('.image-lightbox-inner img');
const lightboxCaption=document.getElementById('imageLightboxCaption');
const lightboxClose=lightbox.querySelector('.image-lightbox-close');
function openLightbox(img){
  lightboxImg.src=img.currentSrc||img.src;
  lightboxImg.alt=img.alt||'图片预览';
  lightboxCaption.textContent=img.alt||'';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.classList.add('lightbox-open');
  lightboxClose.focus({preventScroll:true});
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.classList.remove('lightbox-open');
  window.setTimeout(()=>{lightboxImg.removeAttribute('src')},180);
}
document.querySelectorAll('img:not(.image-lightbox img)').forEach(img=>{
  img.classList.add('zoomable-image');
  img.setAttribute('tabindex',img.getAttribute('tabindex')||'0');
  img.setAttribute('role','button');
  img.setAttribute('aria-label',img.getAttribute('aria-label')||((img.alt||'图片')+'，点击放大'));
  img.addEventListener('click',()=>openLightbox(img));
  img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLightbox(img)}});
});
lightboxClose.addEventListener('click',closeLightbox);
lightboxImg.addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox()});

// 卡片：点击后保持轻微高亮；再次点击取消；一次只高亮一个。
const cardSelectors=['.card','.step','.agent-item','.take','.api-step','.prompt','.coord-card','.browser','.final'];
const cards=[...document.querySelectorAll(cardSelectors.join(','))];
cards.forEach(card=>{
  card.classList.add('interactive-card');
  if(!card.hasAttribute('tabindex')) card.tabIndex=0;
  card.setAttribute('role','button');
  card.setAttribute('aria-pressed','false');
  const toggle=()=>{
    const next=!card.classList.contains('is-active');
    cards.forEach(c=>{c.classList.remove('is-active');c.setAttribute('aria-pressed','false')});
    if(next){card.classList.add('is-active');card.setAttribute('aria-pressed','true')}
  };
  card.addEventListener('click',e=>{if(e.target.closest('a,button,input,select,textarea,img'))return;toggle()});
  card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('a,button,input,select,textarea,img')){e.preventDefault();toggle()}});
});
