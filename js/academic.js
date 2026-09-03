/**
 * ACADEMIC & RESEARCH SCRIPTS — LE NGUYEN THU HA
 * Typewriter effect, BibTeX viewer/copy, and section navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. TYPEWRITER EFFECT
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const words = [
      'Machine Learning & Applied Science',
      'Computer Science & Algorithms',
      'Data Science & Research'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
      } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1600; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400; // Pause before new word
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  // 2. BIBTEX ACCORDION & COPY ACTION
  const bibtexButtons = document.querySelectorAll('.btn-toggle-bibtex');
  bibtexButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const box = document.getElementById(targetId);
      if (box) {
        const isShown = box.classList.toggle('show');
        btn.textContent = isShown ? 'Hide BibTeX' : 'View BibTeX';
      }
    });
  });

  const copyBibButtons = document.querySelectorAll('.btn-copy-bib');
  copyBibButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-bib-id');
      const box = document.getElementById(targetId);
      if (box) {
        navigator.clipboard.writeText(box.textContent.trim()).then(() => {
          if (window.showToast) {
            window.showToast('BibTeX citation copied to clipboard!');
          }
        });
      }
    });
  });

  // 3. QUICK JUMP TAB HIGHLIGHT ON SCROLL
  const jumpTabs = document.querySelectorAll('.jump-tab');
  const sections = document.querySelectorAll('section[id]');

  if (jumpTabs.length > 0 && sections.length > 0) {
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPos = window.scrollY + 140;

      sections.forEach((sec) => {
        if (sec.offsetTop <= scrollPos) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      jumpTabs.forEach((tab) => {
        const href = tab.getAttribute('href').replace('#', '');
        if (href === currentSectionId) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    });
  }
});
