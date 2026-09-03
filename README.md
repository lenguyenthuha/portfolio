# Le Nguyen Thu Ha — Academic & Art Portfolio

A dual-focus personal portfolio website combining **Academic** and **Art**.

---

## Highlights & Architecture

1. **Desktop Canvas (`index.html`)**:
   - Editorial Warm Cream canvas simulating a tactile retro-modern digital workstation.
   - Distinctive typography blending an organic script with bold sans-serif display typography.
   - **Two Interactive Mac-style Folders**:
     - **`academic`**: Leads directly to computer science publications, research profile, and curriculum vitae.
     - **`art & visuals`**: Leads to digital illustrations, drawings, and photography.
   - **Floating Desktop Artifacts**: Draggable/tilt previews of code, research profile, artwork, and app icons with retro vector cursor arrow.

2. **Academic & Research Dossier (`academic.html`)**:
   - Comprehensive scholar card with dynamic typewriter text cycling through core domains (*Machine Learning, Deep Learning, Research*).
   - Direct links to [LinkedIn], [GitHub], and 1-click email copy.
   - Sticky jump navigation tabs (`01_Publications`, `02_Experience`, `03_Education`, `04_Competences`).
   - Peer-reviewed research publication entries featuring PDF, DOI, PyTorch code links, and **1-click BibTeX citation viewer & copy button**.
   - Chronological experience and educational background timeline.

3. **Creative Art & Aesthetics Gallery (`art.html`)**:
   - Interactive category filter pills: `all_works.*`, `digital_art.psd`, `social_media.psd`, `web_design.fig`, `digital_art.png`.
   - Responsive Masonry grid layout with file metadata tags and creation years.
   - **Mac OS Preview Lightbox Window**: Complete with macOS traffic light buttons (close, minimize, expand), image details, metadata badges, and keyboard shortcuts (`←`, `→` to navigate, `Esc` to close).

4. **Personal Memo & CV (`about.html`)**:
   - Editorial `README.TXT` memo card detailing the harmony between algorithmic logic and creative aesthetics.
   - Direct Curriculum Vitae (CV) PDF download button.
   - Interactive collaboration and contact cards.

5. **Smart Theme Switching**:
   - Seamless toggling between **Editorial Warm Cream** (Light mode) and **Dark Slate Archive** (Dark mode).
   - Theme persistence preserved across browser sessions via `localStorage`.

---

## Local Preview

This project is built with **100% vanilla HTML5, CSS3, and JavaScript** — no Node.js dependencies, package managers, or build steps required.

### Quick Start:
1. Double-click [`index.html`](./index.html) in your file manager to open it in any web browser.
2. Or spin up a local server:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---

## Deploying to GitHub Pages (Free Hosting)

Deploy your personal portfolio directly to your GitHub account in 3 steps:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Create a new repository:
   - For `https://lenguyenthuha.github.io`: name the repo `lenguyenthuha.github.io`.
   - For `https://lenguyenthuha.github.io/portfolio`: name the repo `portfolio` (or any custom name).
3. Set the repository to **Public** and create it.

### Step 2: Push the Code
In your local terminal at this directory:
```bash
git init
git add .
git commit -m "feat: launch academic and art portfolio"
git branch -M main
git remote add origin https://github.com/lenguyenthuha/<your-repo-name>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub and open **Settings** > **Pages**.
2. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
3. Click **Save**.
4. In approximately 1–2 minutes, your website will be live!

---

## Customization Guide

- **Profile Details**: Edit your bio and affiliations directly in `academic.html` and `about.html`.
- **Publications**: Add new papers by duplicating an `<article class="glass-card pub-card">` block in `academic.html` and pasting your BibTeX entry into `<pre class="bibtex-box">`.
- **Artworks**: Place your images into `assets/images/` and add corresponding `<article class="art-card">` entries in `art.html`.
- **CV PDF**: Place your resume PDF in the root directory (e.g. `CV_LeNguyenThuHa.pdf`) and link it in `about.html` and `academic.html`.

---

## File Structure

```
academic-art-profile/
├── index.html           # Desktop Canvas landing page with Academic & Art folders
├── academic.html        # Computer Science & Research dossier with BibTeX viewer
├── art.html             # Creative visual portfolio with filters & Mac Preview modal
├── about.html           # Personal philosophy memo, CV download, and contact card
├── README.md            # Documentation and deployment guide
├── css/
│   ├── style.css        # Core design system, themes, and global typography
│   ├── desktop.css      # Desktop canvas, folder 3D physics, and floating artifacts
│   └── components.css   # Dossier headers, publication cards, timeline, and modal
├── js/
│   ├── main.js          # Theme persistence, mobile navigation, toast alerts, copy email
│   ├── academic.js      # Typewriter effect, BibTeX toggle, and jump navigation
│   └── art-gallery.js   # Filter pills, masonry interactions, and OS lightbox modal
└── assets/
    ├── icons/           # Mac folder, Notion, Figma, Safari, Code, and Cursor vectors
    └── images/          # Avatar and sample high-resolution creative artworks
```

---
© 2026 Le Nguyen Thu Ha. Published under the MIT License.
