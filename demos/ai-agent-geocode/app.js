
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

// 成品入口：保持原页面内容、结构、图片和分享功能不变，仅增加跳转到实际工具页。
const toolDemo=document.querySelector('.browser');
const toolRun=toolDemo?.querySelector('.run');
function openRealTool(e){
  if(e){e.preventDefault();e.stopPropagation();}
  window.location.href='./tool.html';
}
if(toolDemo){
  toolDemo.style.cursor='pointer';
  toolDemo.setAttribute('aria-label','点击进入调查点位快速定位工具');
  toolDemo.addEventListener('click',openRealTool);
  toolDemo.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){openRealTool(e)}
  });
}
if(toolRun){
  toolRun.style.cursor='pointer';
  toolRun.setAttribute('role','link');
  toolRun.setAttribute('tabindex','0');
  toolRun.addEventListener('click',openRealTool);
  toolRun.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){openRealTool(e)}
  });
}


// 高德控制台 HTML 仿真：点击放大
const amapConsoleTrigger=document.querySelector('.console-zoom-trigger');
if(amapConsoleTrigger){
  const modal=document.createElement('div');
  modal.className='amap-console-modal';
  modal.setAttribute('aria-hidden','true');
  modal.innerHTML='<button class="amap-console-modal-close" type="button" aria-label="关闭">×</button><div class="amap-console-modal-card"></div>';
  document.body.appendChild(modal);
  const modalCard=modal.querySelector('.amap-console-modal-card');
  const closeBtn=modal.querySelector('.amap-console-modal-close');
  function openAmapConsole(){
    modalCard.innerHTML='';
    const clone=amapConsoleTrigger.cloneNode(true);
    clone.removeAttribute('tabindex');
    clone.removeAttribute('role');
    clone.removeAttribute('aria-label');
    clone.classList.remove('console-zoom-trigger');
    modalCard.appendChild(clone);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('amap-modal-open');
    closeBtn.focus({preventScroll:true});
  }
  function closeAmapConsole(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('amap-modal-open');
    setTimeout(()=>{modalCard.innerHTML=''},220);
  }
  amapConsoleTrigger.addEventListener('click',openAmapConsole);
  amapConsoleTrigger.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();openAmapConsole();}
  });
  closeBtn.addEventListener('click',closeAmapConsole);
  modal.addEventListener('click',e=>{if(e.target===modal)closeAmapConsole();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeAmapConsole();});
}
