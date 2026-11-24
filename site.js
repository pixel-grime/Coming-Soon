  { if (/[?&]sent=1/.test(location.search)) { const n=document.getElementById('sent-note'); if (n) { n.hidden=false; } } }
  { const v=document.querySelector('.hero-video');
    if (v) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); }
      else {
        v.muted = true; v.defaultMuted = true; v.setAttribute('muted','');
        const tryPlay = () => { if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(()=>{}); } };
        tryPlay();
        v.addEventListener('loadeddata', tryPlay);
        v.addEventListener('canplay', tryPlay);
        ['pointerdown','touchstart','scroll','keydown'].forEach(e => window.addEventListener(e, tryPlay, {passive:true}));
        document.addEventListener('visibilitychange', () => { if (!document.hidden) tryPlay(); });
      }
    } }
  { const lb=document.getElementById('lb'), fr=lb.querySelector('.lb-frame');
    const close=()=>{lb.hidden=true; fr.innerHTML='';};
    document.querySelectorAll('.vthumb').forEach(b=>b.addEventListener('click',()=>{
      fr.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+b.dataset.id+'?autoplay=1&rel=0" title="Video player" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
      lb.hidden=false; lb.querySelector('.lb-close').focus(); }));
    lb.addEventListener('click',e=>{ if(e.target===lb||e.target.classList.contains('lb-close')) close(); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&!lb.hidden) close(); });
  }
