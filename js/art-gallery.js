/**
 * ART & VISUAL PORTFOLIO SCRIPTS
 * Category filtering, responsive masonry interaction, and OS-style Lightbox Preview modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. CATEGORY FILTERING
  const filterPills = document.querySelectorAll('.art-filter-pill');
  const artCards = document.querySelectorAll('.art-card');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filterCategory = pill.getAttribute('data-filter');

      artCards.forEach((card) => {
        const itemCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || itemCategory === filterCategory) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 2. MACOS PREVIEW LIGHTBOX MODAL
  const modal = document.getElementById('art-lightbox-modal');
  const modalImg = document.getElementById('os-preview-img');
  const modalTitle = document.getElementById('os-preview-title');
  const modalFilename = document.getElementById('os-window-filename');
  const modalMeta = document.getElementById('os-preview-meta');
  const modalDesc = document.getElementById('os-preview-desc');
  const closeBtn = document.querySelector('.traffic-dot.close');
  const prevBtn = document.getElementById('btn-prev-art');
  const nextBtn = document.getElementById('btn-next-art');

  let currentIndex = -1;
  const visibleCards = () => Array.from(artCards).filter((c) => c.style.display !== 'none');

  function openLightbox(card) {
    if (!modal) return;
    const cards = visibleCards();
    currentIndex = cards.indexOf(card);

    updateModalContent(card);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent page scroll while viewing
  }

  function updateModalContent(card) {
    if (!card) return;
    const img = card.querySelector('.art-thumb-img');
    const title = card.getAttribute('data-title') || 'Untitled Artwork';
    const filename = card.getAttribute('data-filename') || 'artwork.svg';
    const medium = card.getAttribute('data-medium') || 'Digital Artwork';
    const year = card.getAttribute('data-year') || '2025';
    const desc = card.getAttribute('data-desc') || 'Exploration of form, light, and computational aesthetics.';

    if (modalImg && img) modalImg.src = img.src;
    if (modalTitle) modalTitle.textContent = title;
    if (modalFilename) modalFilename.textContent = filename;
    if (modalMeta) modalMeta.textContent = `${medium} • ${year}`;
    if (modalDesc) modalDesc.textContent = desc;
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNext() {
    const cards = visibleCards();
    if (cards.length === 0) return;
    currentIndex = (currentIndex + 1) % cards.length;
    updateModalContent(cards[currentIndex]);
  }

  function showPrev() {
    const cards = visibleCards();
    if (cards.length === 0) return;
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateModalContent(cards[currentIndex]);
  }

  // Card click event
  artCards.forEach((card) => {
    card.addEventListener('click', () => openLightbox(card));
  });

  // Modal controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
