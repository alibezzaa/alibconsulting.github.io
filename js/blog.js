/* blog.js — loads posts from data/posts.json, renders cards */

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const lang = document.documentElement.getAttribute('lang') || 'fr';
  const locale = lang === 'ar' ? 'ar-MA' : 'fr-FR';
  return d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

function getLang() {
  return document.documentElement.getAttribute('lang') || 'fr';
}

function createBlogCard(post) {
  const lang   = getLang();
  const title   = post['title_'  + lang] || post.title   || post.title_fr  || '';
  const excerpt = post['excerpt_'+ lang] || post.excerpt || post.excerpt_fr || '';
  const cat     = post['category_'+lang] || post.category || '';
  const readMore = lang === 'ar' ? 'اقرأ المزيد ←' : 'Lire la suite →';

  const imgEl = post.image
    ? `<img class="blog-card__img" src="${post.image}" alt="${title}" loading="lazy">`
    : `<div class="blog-card__img-placeholder">📝</div>`;

  return `
    <article class="blog-card reveal">
      ${imgEl}
      <div class="blog-card__body">
        <div class="blog-card__meta">
          <span class="badge">${cat}</span>
          <span class="blog-date">${formatDate(post.date)}</span>
        </div>
        <h3 class="blog-card__title">${title}</h3>
        <p class="blog-card__excerpt">${excerpt}</p>
        <span class="blog-card__link">${readMore}</span>
      </div>
    </article>`;
}

async function loadPosts(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const lang = getLang();
  const loadingText = lang === 'ar' ? 'جارٍ تحميل المقالات…' : 'Chargement des articles…';
  container.innerHTML = `<p class="blog-loading">${loadingText}</p>`;

  try {
    const res = await fetch('data/posts.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let posts = await res.json();

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (limit) posts = posts.slice(0, limit);

    if (!posts.length) {
      container.innerHTML = '<p class="blog-loading">Aucun article disponible.</p>';
      return;
    }

    container.innerHTML = posts.map(createBlogCard).join('');

    // Trigger reveal for new cards
    if (window.initRevealCards) window.initRevealCards(container);
    else {
      container.querySelectorAll('.reveal').forEach(el => {
        setTimeout(() => el.classList.add('visible'), 50);
      });
    }
  } catch {
    const lang = getLang();
    const isAr = lang === 'ar';
    container.innerHTML = `
      <div class="blog-error">
        <p>${isAr ? '⚠️ تعذّر تحميل المقالات.' : '⚠️ Impossible de charger les articles.'}</p>
        <p>${isAr ? 'المدونة تحتاج خادمًا محليًا لقراءة ملف JSON.' : 'Le blog nécessite un serveur local pour lire le fichier JSON.'}</p>
        <code>python3 -m http.server 8080</code>
        <p style="margin-top:10px;font-size:.82rem;">${isAr ? 'افتح:' : 'Puis ouvrir:'} <strong>http://localhost:8080</strong></p>
      </div>`;
  }
}
