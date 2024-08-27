// Function to change language
function changeLanguage() {
    const language = document.getElementById('language-select').value;
    localStorage.setItem('language', language);
    applyTranslations(language);
}

// Apply translations based on the selected language
async function applyTranslations(language) {
    try {
        const response = await fetch('translations.json');
        const translations = await response.json();
        const trans = translations[language] || translations['en']; // Fallback to English if language is not found
        
        // Update all elements with data-translate attributes
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (trans[key]) {
                element.textContent = trans[key];
            } else {
                console.warn(`Missing translation for key: ${key}`);
            }
        });
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    document.getElementById('language-select').value = savedLanguage;
    applyTranslations(savedLanguage);
});

