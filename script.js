const translations = {
    'en': {
        'home': 'Home',
        'wildlife': 'Wildlife',
        'water': 'Water',
        'heroes': 'Nature Heroes',
        'main_title': 'Preserving the Soul of Earth',
        'sub_title': 'Join us in protecting wildlife, rivers, and our future.',
        'wildlife_title': 'Sanctuaries & National Parks',
        'card1_title': 'Biodiversity',
        'card1_text': 'Protecting endangered species across global sanctuaries.',
        'card2_title': 'Conservation',
        'card2_text': 'Restoring forest covers to balance the ecosystem.',
        'river_title': 'River Cleaning & Water Storage',
        'water_text': 'We focus on innovative river cleaning processes and sustainable water storage systems.'
    },
    'hi': {
        'home': 'मुख्य पृष्ठ',
        'wildlife': 'वन्यजीव',
        'water': 'जल संरक्षण',
        'heroes': 'प्रकृति के नायक',
        'main_title': 'धरती की आत्मा को बचाएं',
        'sub_title': 'वन्यजीवों, नदियों और हमारे भविष्य की रक्षा में हमारे साथ जुड़ें।',
        'wildlife_title': 'अभयारण्य और राष्ट्रीय उद्यान',
        'card1_title': 'जैव विविधता',
        'card1_text': 'वैश्विक अभयारण्यों में लुप्तप्राय प्रजातियों की रक्षा करना।',
        'card2_title': 'संरक्षण',
        'card2_text': 'पारिस्थितिकी तंत्र को संतुलित करने के लिए वन क्षेत्र को बहाल करना।',
        'river_title': 'नदी सफाई और जल भंडारण',
        'water_text': 'हम नवीन नदी सफाई प्रक्रियाओं और टिकाऊ जल भंडारण प्रणालियों पर ध्यान केंद्रित करते हैं।'
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// Simple Scroll Animation for Cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});