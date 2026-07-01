(function() {
  'use strict';

  const GAMES = [
    { name: 'Cyberpunk 2077 Ultimate Edition', gradient: 'linear-gradient(135deg, #fcee21, #f09b22)' },
    { name: 'Elden Ring Deluxe Edition',       gradient: 'linear-gradient(135deg, #6b3fa0, #2d1b4e)' },
    { name: 'Grand Theft Auto V Enhanced',      gradient: 'linear-gradient(135deg, #f5a623, #e07b1a)' },
    { name: 'Call of Duty Modern Warfare II',   gradient: 'linear-gradient(135deg, #c0392b, #6b1a12)' },
    { name: 'Red Dead Redemption 2',            gradient: 'linear-gradient(135deg, #c62828, #4a0e0e)' },
    { name: 'Alan Wake 2 Deluxe Edition',       gradient: 'linear-gradient(135deg, #1a1a2e, #0d0d1a)' },
    { name: 'Baldur\'s Gate 3 Deluxe Edition',  gradient: 'linear-gradient(135deg, #8b4513, #3e1a00)' },
    { name: 'Marvel\'s Spider-Man Miles Morales',gradient: 'linear-gradient(135deg, #e63946, #8a1a24)' },
    { name: 'Horizon Forbidden West',           gradient: 'linear-gradient(135deg, #457b9d, #1d3557)' },
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
        <div class="game-card">
          <div class="game-thumb-placeholder" style="background: ${game.gradient}">
            <span style="text-shadow: 0 2px 8px rgba(0,0,0,.5);">${game.name.split(' ').slice(0, 2).join(' ')}</span>
          </div>
          <div class="game-info">
            <div class="game-name">${game.name}</div>
            <div class="game-stars">${renderStars(4 + Math.round(Math.random()))}</div>
            <a href="https://www.tiktok.com/@ladyfragile" class="game-link" target="_blank">
              &#9654; Watch on TikTok
            </a>
          </div>
        </div>
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
