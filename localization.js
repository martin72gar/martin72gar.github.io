const translations = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "Welcome.",
    "hero.intro": "My name is <span class=\"highlight\">Martin Siregar</span>, a software developer focused on building modern mobile and web applications with high performance and smooth user experiences.",
    "hero.sub": "Developing products from idea to production-ready, using technologies like Flutter, JavaScript, TypeScript, and modern frameworks.",
    "hero.btn.projects": "Projects",
    "hero.btn.contact": "Contact Me",
    "hero.img.alt": "Laptop and code illustration",
    
    // About Section
    "about.title": "About Me",
    "about.p1": "Software developer based in Jakarta, Indonesia, experienced in working on various projects ranging from internal company applications, analytics dashboards, to SaaS products for global clients.",
    "about.p2": "Focused on clean codebases, scalable architecture, and effective collaboration with design and business teams.",
    
    // Projects Section
    "projects.title": "Selected Projects",
    "project1.title": "Dashboard Analytics",
    "project1.desc": "Interactive dashboard for monitoring business metrics in real-time with responsive data visualizations.",
    "project1.stack": "React • TypeScript • Node.js",
    "project2.title": "Platform Booking",
    "project2.desc": "Online booking platform with payment integration and automated notification system.",
    "project2.stack": "Next.js • MySQL • Tailwind",
    "project3.title": "Internal applications",
    "project3.desc": "Internal applications for automating operational processes and reporting within the company environment.",
    "project3.stack": "Laravel • PHP • MySQL",
    
    // Contact Section
    "contact.title": "Contact",
    "contact.desc": "Interested in collaborating or want to discuss a project? Feel free to reach out via email or one of the following platforms.",
    
    // Footer
    "footer.rights": "All rights reserved."
  },
  id: {
    // Navbar
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    
    // Hero Section
    "hero.title": "Selamat Datang.",
    "hero.intro": "Nama saya <span class=\"highlight\">Martin Siregar</span>, seorang software developer yang fokus membangun aplikasi mobile dan web modern dengan performa tinggi dan pengalaman pengguna yang mulus.",
    "hero.sub": "Mengembangkan produk dari ide hingga siap produksi, menggunakan teknologi seperti Flutter, JavaScript, TypeScript, dan framework modern.",
    "hero.btn.projects": "Proyek",
    "hero.btn.contact": "Hubungi Saya",
    "hero.img.alt": "Ilustrasi laptop dan kode",
    
    // About Section
    "about.title": "Tentang Saya",
    "about.p1": "Software developer yang berbasis di Jakarta, Indonesia, berpengalaman mengerjakan berbagai proyek mulai dari aplikasi internal perusahaan, dashboard analytics, hingga produk SaaS untuk klien global.",
    "about.p2": "Fokus pada codebase yang bersih, arsitektur yang scalable, dan kolaborasi efektif dengan tim desain dan bisnis.",
    
    // Projects Section
    "projects.title": "Proyek Pilihan",
    "project1.title": "Dashboard Analytics",
    "project1.desc": "Dashboard interaktif untuk memantau metrik bisnis secara real-time dengan visualisasi data yang responsif.",
    "project1.stack": "React • TypeScript • Node.js",
    "project2.title": "Platform Booking",
    "project2.desc": "Platform booking online dengan integrasi pembayaran dan sistem notifikasi otomatis.",
    "project2.stack": "Next.js • MySQL • Tailwind",
    "project3.title": "Aplikasi Internal",
    "project3.desc": "Aplikasi internal untuk mengotomatisasi proses operasional dan pelaporan dalam lingkungan perusahaan.",
    "project3.stack": "Laravel • PHP • MySQL",
    
    // Contact Section
    "contact.title": "Kontak",
    "contact.desc": "Tertarik untuk berkolaborasi atau ingin mendiskusikan proyek? Jangan ragu untuk menghubungi saya melalui email atau salah satu platform berikut.",
    
    // Footer
    "footer.rights": "Hak cipta dilindungi."
  }
};

let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Update img alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    if (translations[lang][key]) {
      element.alt = translations[lang][key];
    }
  });
  
  // Update language toggle button
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'ID' : 'EN';
    langBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Indonesian' : 'Switch to English');
  }
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'id' : 'en');
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  // Add language toggle button click handler
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
});
