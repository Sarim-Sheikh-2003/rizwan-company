(function(){
  var config=window.SITE_CONFIG;
  var htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"};

  function escapeHtml(value){
    return String(value).replace(/[&<>"']/g,function(character){return htmlEscapes[character]});
  }

  function brandMarkup(ariaLabel){
    return '<a class="brand" href="#top" aria-label="'+escapeHtml(ariaLabel)+'"><svg aria-hidden="true"><use href="#logo"/></svg><span>'+escapeHtml(config.company.brand)+'<small>'+escapeHtml(config.company.brandSubline)+'</small></span></a>';
  }

  function detailList(items){
    return items.map(function(item){
      return '<li><strong>'+escapeHtml(item.lead)+'</strong> '+escapeHtml(item.text)+'</li>';
    }).join('');
  }

  function renderPage(){
    var nav=config.navigation.map(function(item){
      return '<a href="'+escapeHtml(item.href)+'">'+escapeHtml(item.label)+'</a>';
    }).join('');
    var facts=config.about.facts.map(function(item){
      return '<div><dt>'+escapeHtml(item.label)+'</dt><dd>'+escapeHtml(item.value)+'</dd></div>';
    }).join('');
    var steps=config.process.steps.map(function(item){
      return '<li><span class="tag">'+escapeHtml(item.tag)+'</span><h3>'+escapeHtml(item.title)+'</h3><p>'+escapeHtml(item.description)+'</p></li>';
    }).join('');
    var benefitTabs=config.benefits.groups.map(function(group,index){
      return '<button class="tab" role="tab" id="t-'+escapeHtml(group.id)+'" aria-controls="p-'+escapeHtml(group.id)+'" aria-selected="'+(index===0)+'"'+(index===0?'':' tabindex="-1"')+'>'+escapeHtml(group.label)+'</button>';
    }).join('');
    var benefitPanels=config.benefits.groups.map(function(group,index){
      var items=group.items.map(function(item){
        return '<div class="benefit"><h3>'+escapeHtml(item.title)+'</h3><p>'+escapeHtml(item.description)+'</p></div>';
      }).join('');
      return '<div class="tabpanel" role="tabpanel" id="p-'+escapeHtml(group.id)+'" aria-labelledby="t-'+escapeHtml(group.id)+'"'+(index===0?'':' hidden')+'>'+items+'</div>';
    }).join('');
    var regulations=config.regulation.items.map(function(item){
      return '<div><span class="big">'+escapeHtml(item.title)+'</span><p>'+escapeHtml(item.description)+'</p></div>';
    }).join('');
    var board=config.board.members.map(function(member){
      return '<li><div class="mono" aria-hidden="true">'+escapeHtml(member.initials)+'</div><div class="name">'+escapeHtml(member.name)+'</div><div class="role">'+escapeHtml(member.role)+'</div></li>';
    }).join('');
    var office=config.contact.office;
    var people=config.contact.people.map(function(person){
      return '<div><h3>'+escapeHtml(person.name)+'</h3><p class="who">'+escapeHtml(person.role)+'</p><p><a href="tel:'+escapeHtml(person.phoneLink)+'">'+escapeHtml(person.phone)+'</a></p><p><a href="mailto:'+escapeHtml(person.email)+'">'+escapeHtml(person.email)+'</a></p></div>';
    }).join('');
    var aboutParagraphs=config.about.paragraphs.map(function(paragraph){return '<p>'+escapeHtml(paragraph)+'</p>'}).join('');
    var process=config.process;
    var benefits=config.benefits;
    var contact=config.contact;

    document.title=config.company.name;
    document.querySelector('meta[name="description"]').content=config.company.description;
    document.getElementById('app').innerHTML='<svg width="0" height="0" style="position:absolute" aria-hidden="true">'+config.logoSvg+'</svg>'+
      '<header class="site-header"><div class="wrap">'+brandMarkup(config.company.name+', home')+'<button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Open menu"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button><nav class="nav" id="nav" aria-label="Main">'+nav+'</nav></div></header>'+
      '<main id="top">'+
        '<section class="hero" aria-labelledby="hero-title" style="padding:0"><div class="hero-frame" aria-hidden="true"><span class="v l"></span><span class="v r"></span></div><div class="hero-inner"><svg class="mark" aria-hidden="true"><use href="#logo"/></svg><h1 class="wordmark" id="hero-title"><span class="wm-1">'+escapeHtml(config.hero.title[0])+'</span><span class="wm-2">'+escapeHtml(config.hero.title[1])+'</span><span class="wm-3">'+escapeHtml(config.hero.title[2])+'</span></h1><p class="tagline">'+escapeHtml(config.hero.tagline)+'</p><p class="hero-lede">'+escapeHtml(config.hero.description)+'</p><div class="btns"><a class="btn btn-gold" href="'+escapeHtml(config.hero.primaryAction.href)+'">'+escapeHtml(config.hero.primaryAction.label)+'</a><a class="btn btn-line" href="'+escapeHtml(config.hero.secondaryAction.href)+'">'+escapeHtml(config.hero.secondaryAction.label)+'</a></div></div><div class="hero-band" aria-hidden="true"><svg viewBox="0 0 1440 64" preserveAspectRatio="none"><path d="M0 64 V22 H730 L870 0 L900 22 H1440 V64 Z" fill="#A57E43"/></svg></div></section>'+
        '<section id="about"><div class="wrap about-grid"><div><div class="rule"></div><h2>'+escapeHtml(config.about.title)+'</h2></div><div class="about-text">'+aboutParagraphs+'<dl class="facts">'+facts+'</dl></div></div></section>'+
        '<section id="process" class="alt"><div class="wrap"><div class="sec-head"><div class="rule"></div><h2>'+escapeHtml(process.title)+'</h2><p>'+escapeHtml(process.description)+'</p></div><ol class="steps">'+steps+'</ol><div class="after"><div class="panel"><h3>'+escapeHtml(process.escrow.title)+'</h3><div class="split" role="img" aria-label="'+escapeHtml(process.escrow.chartLabel)+'"><div class="esc">'+escapeHtml(process.escrow.escrowLabel)+'</div><div class="ops">'+escapeHtml(process.escrow.operationsLabel)+'</div></div><div class="split-key"><span>'+escapeHtml(process.escrow.key[0])+'</span><span>'+escapeHtml(process.escrow.key[1])+'</span></div><ul>'+detailList(process.escrow.details)+'</ul></div><div class="panel"><h3>'+escapeHtml(process.merger.title)+'</h3><ul>'+detailList(process.merger.details)+'</ul></div></div></div></section>'+
        '<section id="benefits"><div class="wrap"><div class="sec-head"><div class="rule"></div><h2>'+escapeHtml(benefits.title)+'</h2><p>'+escapeHtml(benefits.description)+'</p></div><div class="tabs" role="tablist" aria-label="Benefits by group">'+benefitTabs+'</div>'+benefitPanels+'</div></section>'+
        '<section class="reg" aria-labelledby="reg-title"><div class="wrap"><div class="sec-head"><div class="rule"></div><h2 id="reg-title">'+escapeHtml(config.regulation.title)+'</h2><p>'+escapeHtml(config.regulation.description)+'</p></div><div class="reg-grid">'+regulations+'</div></div></section>'+
        '<section id="board" class="alt"><div class="wrap"><div class="sec-head"><div class="rule"></div><h2>'+escapeHtml(config.board.title)+'</h2></div><ul class="board">'+board+'</ul></div></section>'+
        '<section id="contact"><div class="wrap"><div class="sec-head"><div class="rule"></div><h2>'+escapeHtml(contact.title)+'</h2><p>'+escapeHtml(contact.description)+'</p></div><div class="contact-grid"><div><h3>'+escapeHtml(office.title)+'</h3><p>'+office.address.map(escapeHtml).join('<br>')+'</p><p style="margin-top:12px"><a href="'+escapeHtml(office.mapUrl)+'" target="_blank" rel="noopener">'+escapeHtml(office.mapLabel)+'</a></p></div>'+people+'</div></div></section>'+
      '</main><footer><div class="wrap"><div class="top">'+brandMarkup('Back to top')+'<span>&copy; <span id="yr">'+new Date().getFullYear()+'</span> '+escapeHtml(config.company.name)+'</span></div><p>'+escapeHtml(config.footerNotice)+'</p></div></footer>';
  }

  renderPage();

  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open menu');}
  });

  var tabs=[].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(x){
      var on=x===t;
      x.setAttribute('aria-selected',on);
      x.tabIndex=on?0:-1;
      document.getElementById(x.getAttribute('aria-controls')).hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t)});
    t.addEventListener('keydown',function(e){
      var n=null;
      if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];
      if(e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];
      if(n){e.preventDefault();select(n);n.focus();}
    });
  });
})();
