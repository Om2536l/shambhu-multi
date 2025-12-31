// Service Documents Data
const serviceData = {
    pan: {
        title: "पॅन कार्ड (नवीन / दुरुस्ती / डुप्लीकेट)",
        documents: [
            "आधार कार्ड (मूळ व फोटोकॉपी)",
            "पासपोर्ट साईज फोटो (२ प्रती)",
            "मोबाईल नंबर",
            "ईमेल आयडी",
            "पत्ता पुरावा (जर वेगळा असेल तर)"
        ]
    },
    aadhar: {
        title: "आधार कार्ड सेवा",
        documents: [
            "आधार कार्ड (जर असेल तर)",
            "ओळख पुरावा (पॅन कार्ड, पासपोर्ट, ड्रायव्हिंग लायसन्स)",
            "पत्ता पुरावा (रजिस्टर्ड, मतदार ओळखपत्र, बिजली बिल)",
            "जन्म दाखला (१० वीचा मार्कशीट, जन्म प्रमाणपत्र)",
            "पासपोर्ट साईज फोटो"
        ]
    },
    voting: {
        title: "मतदार ओळखपत्र",
        documents: [
            "आधार कार्ड",
            "पत्ता पुरावा",
            "फोटो",
            "जन्म दाखला",
            "जुने मतदार ओळखपत्र (दुरुस्तीसाठी)"
        ]
    },
    dl: {
        title: "ड्रायव्हिंग लायसन्स",
        documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "१० वीचा मार्कशीट",
            "मेडिकल सर्टिफिकेट",
            "पासपोर्ट साईज फोटो (४ प्रती)",
            "रेशन कार्ड / मतदार ओळखपत्र"
        ]
    },
    passport: {
        title: "पासपोर्ट सेवा",
        documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "मतदार ओळखपत्र",
            "१० वीचा मार्कशीट",
            "जन्म प्रमाणपत्र",
            "पत्ता पुरावा",
            "पासपोर्ट साईज फोटो"
        ]
    },
    gazette: {
        title: "राजपत्र सेवा (नाव/जन्मतारीख बदल)",
        documents: [
            "जुने कागदपत्र",
            "शपथपत्र",
            "आधार कार्ड",
            "मतदार ओळखपत्र",
            "साक्षीदार (२ जण)",
            "जन्म दाखला"
        ]
    },
    ayushman: {
        title: "आयुष्मान भारत कार्ड",
        documents: [
            "आधार कार्ड",
            "रेशन कार्ड",
            "मोबाईल नंबर",
            "पासपोर्ट साईज फोटो",
            "घराचा पत्ता"
        ]
    },
    eshram: {
        title: "ई-श्रम कार्ड",
        documents: [
            "आधार कार्ड",
            "मोबाईल नंबर",
            "बँक खाते माहिती",
            "फोटो",
            "पत्ता पुरावा"
        ]
    },
    udyam: {
        title: "उद्योग आधार (MSME) नोंदणी",
        documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "बँक खाते माहिती",
            "व्यवसायाचा पत्ता",
            "मोबाईल नंबर",
            "ईमेल आयडी"
        ]
    },
    shopact: {
        title: "शॉप ॲक्ट",
        documents: [
            "आधार कार्ड",
            "दुकान पुरावा (किरकोळ करी, भाडेकरार)",
            "पत्ता पुरावा",
            "फोटो",
            "मोबाईल नंबर"
        ]
    },
    income: {
        title: "आयप्रमाणपत्र",
        documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "मतदार ओळखपत्र",
            "बँक पासबुक",
            "जातीचा दाखला",
            "पूर्वीचे आयप्रमाणपत्र (जर असेल तर)"
        ]
    },
    residence: {
        title: "निवास प्रमाणपत्र",
        documents: [
            "आधार कार्ड",
            "पत्ता पुरावा",
            "मतदार ओळखपत्र",
            "जुने निवास प्रमाणपत्र",
            "फोटो"
        ]
    },
    caste: {
        title: "जातीचा दाखला",
        documents: [
            "आधार कार्ड",
            "शाळेचा दाखला",
            "पालकांचा जातीचा दाखला",
            "मतदार ओळखपत्र",
            "जन्म दाखला"
        ]
    },
    caste_validity: {
        title: "जातीची वैधता",
        documents: [
            "आधार कार्ड",
            "जातीचा दाखला",
            "शैक्षणिक दाखले",
            "फोटो",
            "मतदार ओळखपत्र"
        ]
    },
    non_creamy: {
        title: "नॉन-क्रिमी लेयर प्रमाणपत्र",
        documents: [
            "आधार कार्ड",
            "जातीचा दाखला",
            "आयप्रमाणपत्र",
            "मतदार ओळखपत्र",
            "शैक्षणिक दाखले"
        ]
    },
    nationality: {
        title: "राष्ट्रीयत्व प्रमाणपत्र",
        documents: [
            "आधार कार्ड",
            "जन्म दाखला",
            "पासपोर्ट",
            "मतदार ओळखपत्र",
            "पत्ता पुरावा"
        ]
    },
    domicile: {
        title: "डोमिसाईल प्रमाणपत्र",
        documents: [
            "आधार कार्ड",
            "मतदार ओळखपत्र",
            "पत्ता पुरावा",
            "जन्म दाखला",
            "फोटो"
        ]
    },
    pf: {
        title: "पीएफ फॉर्म",
        documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "नोकरीचा दाखला",
            "बँक खाते माहिती",
            "फोटो"
        ]
    },
    food: {
        title: "फूड लायसन्स",
        documents: [
            "आधार कार्ड",
            "दुकान कागदपत्र",
            "पत्ता पुरावा",
            "फोटो",
            "मोबाईल नंबर"
        ]
    },
    scholarship: {
        title: "स्कॉलरशिप फॉर्म",
        documents: [
            "मार्कशीट (मागील वर्ष)",
            "आधार कार्ड",
            "बँक पासबुक",
            "आयप्रमाणपत्र",
            "जातीप्रमाणपत्र",
            "पासपोर्ट साईज फोटो"
        ]
    },
    loan: {
        title: "एज्युकेशन लोन",
        documents: [
            "ॲडमिशन लेटर",
            "फी स्ट्रक्चर",
            "मार्कशीट (१०वी, १२वी, ग्रेज्युएशन)",
            "आधार कार्ड",
            "पॅन कार्ड",
            "पालकांचे आयप्रमाणपत्र",
            "पत्ता पुरावा"
        ]
    },
    aadhar_payment: {
        title: "आधार क्रेडिट/डेबिट",
        documents: [
            "आधार कार्ड",
            "मोबाईल नंबर",
            "बँक खाते माहिती",
            "बायोमेट्रिक वेरिफिकेशन"
        ]
    },
    bike_insurance: {
        title: "बाइक इन्शुरन्स",
        documents: [
            "वाहन प्रमाणपत्र (RC)",
            "आधार कार्ड",
            "ड्रायव्हिंग लायसन्स",
            "पूर्व विमा दाखला",
            "वाहनाचे फोटो"
        ]
    },
    car_insurance: {
        title: "कार इन्शुरन्स",
        documents: [
            "वाहन प्रमाणपत्र (RC)",
            "आधार कार्ड",
            "ड्रायव्हिंग लायसन्स",
            "पूर्व विमा दाखला",
            "वाहनाचे फोटो"
        ]
    },
    bank: {
        title: "बँकिंग फॉर्म",
        documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "पासपोर्ट साईज फोटो (२ प्रती)",
            "पत्ता पुरावा",
            "मोबाईल नंबर",
            "ईमेल आयडी"
        ]
    },
    job: {
        title: "नोकरी अर्ज फॉर्म",
        documents: [
            "शैक्षणिक कागदपत्र",
            "आधार कार्ड",
            "फोटो",
            "जातीचा दाखला",
            "आयप्रमाणपत्र",
            "निवास प्रमाणपत्र"
        ]
    },
    rail: {
        title: "रेल्वे तिकीट बुकिंग",
        documents: [
            "ओळख पुरावा (आधार / पॅन / ड्रायव्हिंग लायसन्स)",
            "मोबाईल नंबर",
            "ईमेल आयडी",
            "प्रवास तपशील (तारीख, ठिकाण)"
        ]
    },
    flight: {
        title: "विमान तिकीट बुकिंग",
        documents: [
            "पासपोर्ट (आंतरराष्ट्रीय प्रवासासाठी)",
            "आधार कार्ड",
            "मोबाईल नंबर",
            "ईमेल आयडी",
            "प्रवास तपशील"
        ]
    },
    printing: {
        title: "प्रिंटिंग व फोटो सेवा",
        documents: [
            "मूळ दस्तऐवज (झेरॉक्ससाठी)",
            "सॉफ्ट कॉपी (प्रिंटिंगसाठी)",
            "फोटो (डिजिटल / प्रिंट)",
            "पासपोर्ट साईज फोटो (फोटोसाठी)"
        ]
    }
};

// DOM Elements
const modal = document.getElementById('docModal');
const modalTitle = document.getElementById('modalTitle');
const documentsList = document.getElementById('documentsList');
const closeModal = document.querySelector('.close-modal');
const serviceSearch = document.getElementById('serviceSearch');
const clearSearch = document.getElementById('clearSearch');
const serviceCards = document.querySelectorAll('.service-card');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Show Service Documents
function showServiceDocs(serviceId) {
    if (serviceData[serviceId]) {
        const data = serviceData[serviceId];
        modalTitle.textContent = data.title;
        
        documentsList.innerHTML = data.documents.map(doc => `
            <li>${doc}</li>
        `).join('');
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Search Functionality
serviceSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const services = document.querySelectorAll('.service-card');
    let hasResults = false;
    
    // Show/hide clear button
    if (searchTerm.length > 0) {
        clearSearch.classList.add('active');
    } else {
        clearSearch.classList.remove('active');
    }
    
    services.forEach(service => {
        const serviceName = service.querySelector('h4').textContent.toLowerCase();
        const serviceDesc = service.querySelector('p').textContent.toLowerCase();
        
        if (serviceName.includes(searchTerm) || serviceDesc.includes(searchTerm)) {
            service.style.display = 'block';
            hasResults = true;
        } else {
            service.style.display = 'none';
        }
    });
    
    // Show no results message if needed
    const categories = document.querySelectorAll('.service-category');
    categories.forEach(category => {
        const visibleServices = category.querySelectorAll('.service-card[style*="block"]');
        if (visibleServices.length === 0) {
            if (!category.querySelector('.no-results')) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.innerHTML = `<p style="text-align: center; color: #666; padding: 40px;">कोणतीही सेवा सापडली नाही</p>`;
                category.appendChild(noResults);
            }
        } else {
            const existingNoResults = category.querySelector('.no-results');
            if (existingNoResults) {
                existingNoResults.remove();
            }
        }
    });
});

// Clear Search
clearSearch.addEventListener('click', function() {
    serviceSearch.value = '';
    clearSearch.classList.remove('active');
    
    // Show all services
    serviceCards.forEach(card => {
        card.style.display = 'block';
    });
    
    // Remove no results messages
    document.querySelectorAll('.no-results').forEach(el => el.remove());
    
    serviceSearch.focus();
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Focus search on '/' key press
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement !== serviceSearch) {
            e.preventDefault();
            serviceSearch.focus();
        }
    });
    
    // Service cards animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Escape key closes modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});