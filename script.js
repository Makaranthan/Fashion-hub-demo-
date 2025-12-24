// PRODUCT DATABASE
const productData = [
    {
        id: 1, category: 'men',
        nameEn: 'Pure Linen Shirt', nameTa: 'சுத்தமான லினன் சட்டை',
        descEn: 'Breathable & Stylish', descTa: 'குளிர்ச்சியான மற்றும் ஸ்டைலான',
        img: 'https://images.unsplash.com/photo-1586363104864-50e2246b621e?auto=format&fit=crop&w=400'
    },
    {
        id: 2, category: 'women',
        nameEn: 'Kanchipuram Silk', nameTa: 'காஞ்சிபுரம் பட்டு',
        descEn: 'Elegant Bridal Saree', descTa: 'நேர்த்தியான திருமண புடவை',
        img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400'
    },
    {
        id: 3, category: 'kids',
        nameEn: 'Pattu Pavadai Set', nameTa: 'பட்டு பாவாடை சட்டை',
        descEn: 'Traditional Kids Wear', descTa: 'பாரம்பரிய குழந்தைகள் ஆடை',
        img: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=400'
    },
    {
        id: 4, category: 'party',
        nameEn: 'Slim Fit Blazer', nameTa: 'ஸ்லிம் ஃபிட் பிளேசர்',
        descEn: 'Perfect for Wedding', descTa: 'திருமணத்திற்கு ஏற்றது',
        img: 'https://images.unsplash.com/photo-1594932224456-802d02673397?auto=format&fit=crop&w=400'
    },
    {
        id: 5, category: 'men',
        nameEn: 'Casual Denim', nameTa: 'கேஷுவல் டெனிம்',
        descEn: 'Rugged Quality', descTa: 'சிறந்த தரம்',
        img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400'
    },
    {
        id: 6, category: 'women',
        nameEn: 'Cotton Kurti', nameTa: 'காட்டன் குர்தி',
        descEn: 'Daily Comfort Wear', descTa: 'தினசரி பயன்பாட்டிற்கு',
        img: 'https://images.unsplash.com/photo-1583391733956-6c7827447d40?auto=format&fit=crop&w=400'
    }
];

let currentLang = 'en';
let activeCategory = 'all';

// CORE FUNCTIONS
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = productData.filter(p => activeCategory === 'all' || p.category === activeCategory);

    filtered.forEach(p => {
        const title = currentLang === 'en' ? p.nameEn : p.nameTa;
        const desc = currentLang === 'en' ? p.descEn : p.descTa;
        
        grid.innerHTML += `
            <div class="product-card">
                <div class="p-img" style="background-image: url('${p.img}')"></div>
                <div class="p-info">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>
            </div>
        `;
    });
}

function filterProducts(cat) {
    activeCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
    });
    renderProducts();
}

function switchLang(lang) {
    currentLang = lang;
    
    // Switch Text Elements
    document.querySelectorAll('.lang').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Switch Form Placeholders
    const form = document.getElementById('contactForm');
    if(lang === 'ta') {
        form.querySelector('input[type="text"]').placeholder = 'உங்கள் பெயர்';
        form.querySelector('input[type="tel"]').placeholder = 'போன் எண்';
        form.querySelector('textarea').placeholder = 'செய்தி';
    } else {
        form.querySelector('input[type="text"]').placeholder = 'Name';
        form.querySelector('input[type="tel"]').placeholder = 'Mobile';
        form.querySelector('textarea').placeholder = 'Message';
    }

    // Toggle Buttons
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ta').classList.toggle('active', lang === 'ta');

    renderProducts();
}

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = currentLang === 'en' ? 'Message Sent Successfully!' : 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!';
    alert(msg);
});

// Init
window.onload = () => {
    renderProducts();
};