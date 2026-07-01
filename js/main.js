(function() {
  'use strict';

  const GAMES = [
    { name: 'Cyberpunk 2077 Ultimate Edition', img: 'images/cyberpunk-2077.png', slug: 'cyberpunk-2077' },
    { name: 'Elden Ring Deluxe Edition',       img: 'images/elden-ring.png', slug: 'elden-ring' },
    { name: 'Grand Theft Auto V Enhanced',      img: 'images/grand-theft-auto.png', slug: 'grand-theft-auto' },
    { name: 'Final Fantasy VII Rebirth',        img: 'images/final-fantasy.png', slug: 'final-fantasy' },
    { name: 'Call of Duty Modern Warfare II',   img: 'images/call-of-duty.png', slug: 'call-of-duty' },
    { name: 'Days Gone',                        img: 'images/days-gone.png', slug: 'days-gone' },
    { name: 'Detroit Become Human',             img: 'images/detroit-become-human.png', slug: 'detroit-become-human' },
    { name: 'Dead Island 2 Ultimate Edition',   img: 'images/dead-island-2.png', slug: 'dead-island-2' },
    { name: 'Tekken 8',                         img: 'images/tekken-8.png', slug: 'tekken-8' },
    { name: 'Stellar Blade',                    img: 'images/stellar-blade.png', slug: 'stellar-blade' },
    { name: 'Alien Isolation Complete Edition', img: 'images/alien-isolation.png', slug: 'alien-isolation' },
    { name: 'Borderlands 4 Deluxe Edition',     img: 'images/borderlands-4.png', slug: 'borderlands-4' },
  ];

  const REVIEWS = [
    {
      name: 'Carlos M.', color: '#fe2c55',
      text: 'The quality of these game videos is incredible. I\'ve discovered so many new games through this TikTok channel. The Spanish voiceover makes it even better.',
      stars: 5,
    },
    {
      name: 'Ana G.', color: '#5b9aff',
      text: 'Love the consistency! Every day there\'s a new game video with great editing, banner, and description. Really well done automated pipeline.',
      stars: 5,
    },
    {
      name: 'Luis R.', color: '#f5a623',
      text: 'The banner designs are fire. Clean, informative, and the videos always have the download link in the bio. Exactly what the gaming community needs.',
      stars: 4,
    },
    {
      name: 'Sofia K.', color: '#6b3fa0',
      text: 'I follow this channel for game recommendations. The automated reviews with gameplay footage help me decide what to play next. Highly recommended.',
      stars: 5,
    },
  ];

  function renderStars(rating) {
    return Array.from({ length: 5 }, (_, i) =>
      `<span class="star${i < rating ? ' active' : ''}">&#9733;</span>`
    ).join('');
  }

  function getInitials(name) {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('');
  }

  function init() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (gamesGrid) {
      gamesGrid.innerHTML = GAMES.map(game => `
        <a href="https://www.tiktok.com/@ladyfragile1" target="_blank" class="game-card-link">
          <div class="game-card">
            <img class="game-thumb" src="${game.img}" alt="${game.name}" loading="lazy">
            <div class="game-info">
              <div class="game-name">${game.name}</div>
              <div class="game-stars">${renderStars(4 + Math.round(Math.random()))}</div>
              <span class="game-link">&#9654; Watch on TikTok</span>
            </div>
          </div>
        </a>
      `).join('');
    }

    const reviewsGrid = document.getElementById('reviewsGrid');
    if (reviewsGrid) {
      reviewsGrid.innerHTML = REVIEWS.map(r => `
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar" style="background: ${r.color}">${getInitials(r.name)}</div>
            <div>
              <div class="review-author">${r.name}</div>
              <div class="review-stars">${renderStars(r.stars)}</div>
            </div>
          </div>
          <div class="review-text">${r.text}</div>
        </div>
      `).join('');
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
