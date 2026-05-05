/**
 * ============================================
 * TECH-NO-LIMITS WEBSITE
 * Complete JavaScript Implementation
 * ============================================
 * 
 * Features:
 * - Team member management (dynamic rendering)
 * - Knowledge/content management (dynamic rendering)
 * - Hidden Events System (ready to enable)
 * - Contact form handling
 * - Navigation management
 * - API Integration placeholders for future Glooc API
 * - Smooth scrolling
 * - Mobile menu functionality
 */

// ============================================
// CONFIGURATION & SETTINGS
// ============================================

const CONFIG = {
    ENABLE_EVENTS: false, // Set to true to show events section
    API_BASE_URL: 'https://api.glooc.com/v1', // Future API integration point
    ANIMATIONS_ENABLED: true,
    SMOOTH_SCROLL: true,
};

// ============================================
// TEAM DATA MANAGEMENT
// ============================================

/**
 * Team members array
 * Structure: { id, name, role, bio, image, links }
 * Images: Replace placeholder with actual image path
 * 
 * HOW TO ADD A TEAM MEMBER:
 * 1. Add new object to teamMembers array below
 * 2. Set image path to your team member's photo
 * 3. JavaScript will automatically render it
 */
const teamMembers = [
    {
        id: 1,
        name: 'Rosaria Kapya',
        role: 'Founder & Executive Director',
        bio: 'Passionate educator and innovator dedicated to breaking barriers in technology education. Founder of Tech-No-Limits.',
        image: 'gives_u_a_short_to_go_abroad.jpeg', // Replace with actual team member photo
        links: {
            tiktok: 'https://www.tiktok.com/@rosiariakapya',
            email: 'essah.zulu@cs.unza.zm'
        }
    },
    {
        id: 2,
        name: 'Team Member Name',
        role: 'Program Coordinator',
        bio: 'Experienced coordinator ensuring seamless execution of all programs and bootcamps.',
        image: 'https://via.placeholder.com/400x400?text=Team+Member+2', // Replace with actual image
        links: {
            email: 'coordinator@tech-no-limits.com'
        }
    },
    {
        id: 3,
        name: 'Team Member Name',
        role: 'Tech Instructor',
        bio: 'Skilled instructor with expertise in Computer Science and practical tech skills training.',
        image: 'https://via.placeholder.com/400x400?text=Team+Member+3', // Replace with actual image
        links: {
            email: 'instructor@tech-no-limits.com'
        }
    }
];

/**
 * Render team members to the DOM
 * Called automatically on page load
 */
function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;

    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-card" data-member-id="${member.id}">
            <div class="team-image-wrapper">
                <img src="${member.image}" alt="${member.name}" class="team-image">
            </div>
            <div class="team-content">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio">${member.bio}</p>
                ${member.links ? `
                    <div class="team-links" style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                        ${member.links.email ? `<a href="mailto:${member.links.email}" title="Email" style="font-size: 1.2rem;">📧</a>` : ''}
                        ${member.links.tiktok ? `<a href="${member.links.tiktok}" target="_blank" rel="noopener noreferrer" title="TikTok" style="font-size: 1.2rem;">🎵</a>` : ''}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Trigger animation for team cards
    if (CONFIG.ANIMATIONS_ENABLED) {
        const cards = teamGrid.querySelectorAll('.team-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
}

/**
 * Add a new team member dynamically
 * 
 * EXAMPLE USAGE:
 * addTeamMember('John Doe', 'Developer', 'Passionate about code', 'path/to/image.jpg')
 */
function addTeamMember(name, role, bio, imageUrl) {
    const newMember = {
        id: teamMembers.length + 1,
        name: name,
        role: role,
        bio: bio,
        image: imageUrl,
        links: {}
    };
    teamMembers.push(newMember);
    renderTeamMembers();
    console.log(`✓ Team member added: ${name}`);
}

// ============================================
// KNOWLEDGE / CONTENT MANAGEMENT
// ============================================

/**
 * Knowledge topics/articles array
 * Structure: { id, title, category, description, link }
 * 
 * HOW TO ADD KNOWLEDGE CONTENT:
 * 1. Add new object to knowledgeTopics array
 * 2. Set category to one of: 'Scholarship', 'Tech', 'Career', 'Skills', 'Events'
 * 3. JavaScript will automatically render and categorize it
 */
const knowledgeTopics = [
    {
        id: 1,
        title: 'Getting Started with Computer Science',
        category: 'Tech',
        description: 'Learn the fundamentals of Computer Science and begin your tech journey. Perfect for beginners.',
        link: '#'
    },
    {
        id: 2,
        title: 'Top International Scholarships for Students',
        category: 'Scholarship',
        description: 'Discover the best scholarship opportunities available globally and how to apply effectively.',
        link: '#'
    },
    {
        id: 3,
        title: 'Building Confidence and Self-Reliance',
        category: 'Skills',
        description: 'Develop independence and practical life skills to succeed in any environment.',
        link: '#'
    },
    {
        id: 4,
        title: 'Tech Career Pathways in 2024',
        category: 'Career',
        description: 'Explore promising career paths in technology and plan your professional development.',
        link: '#'
    },
    {
        id: 5,
        title: 'Summer Programs You Should Know About',
        category: 'Scholarship',
        description: 'Comprehensive guide to summer programs that can boost your academic profile.',
        link: '#'
    },
    {
        id: 6,
        title: 'Developing Leadership Through Extracurriculars',
        category: 'Skills',
        description: 'How to strengthen your profile through meaningful extracurricular activities.',
        link: '#'
    }
];

/**
 * Get unique categories from knowledge topics
 */
function getCategories() {
    return [...new Set(knowledgeTopics.map(topic => topic.category))];
}

/**
 * Get color/style for category badge
 */
function getCategoryStyle(category) {
    const styles = {
        'Tech': { bg: '#E0E7FF', color: '#6366F1' },
        'Scholarship': { bg: '#DCE8F1', color: '#3B82F6' },
        'Career': { bg: '#FEE2E2', color: '#EF4444' },
        'Skills': { bg: '#D1FAE5', color: '#10B981' },
        'Events': { bg: '#FEF08A', color: '#F59E0B' }
    };
    return styles[category] || styles['Tech'];
}

/**
 * Render knowledge topics to the DOM
 * Called automatically on page load
 */
function renderKnowledgeTopics() {
    const knowledgeGrid = document.getElementById('knowledge-grid');
    if (!knowledgeGrid) return;

    knowledgeGrid.innerHTML = knowledgeTopics.map((topic, index) => {
        const style = getCategoryStyle(topic.category);
        return `
            <div class="knowledge-card" data-topic-id="${topic.id}" data-category="${topic.category}">
                <span class="knowledge-tag" style="background-color: ${style.bg}; color: ${style.color};">
                    ${topic.category}
                </span>
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                <a href="${topic.link}" class="knowledge-link">
                    Read More →
                </a>
            </div>
        `;
    }).join('');

    // Trigger animations
    if (CONFIG.ANIMATIONS_ENABLED) {
        const cards = knowledgeGrid.querySelectorAll('.knowledge-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
}

/**
 * Add new knowledge topic
 * 
 * EXAMPLE USAGE:
 * addKnowledgeTopic('Title', 'Tech', 'Description text', '#link')
 */
function addKnowledgeTopic(title, category, description, link = '#') {
    const newTopic = {
        id: knowledgeTopics.length + 1,
        title: title,
        category: category,
        description: description,
        link: link
    };
    knowledgeTopics.push(newTopic);
    renderKnowledgeTopics();
    console.log(`✓ Knowledge topic added: ${title}`);
}

/**
 * Filter knowledge topics by category
 */
function filterKnowledgeByCategory(category) {
    const cards = document.querySelectorAll('.knowledge-card');
    cards.forEach(card => {
        if (category === 'All' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// EVENTS MANAGEMENT SYSTEM
// ============================================

/**
 * HIDDEN EVENTS SYSTEM
 * 
 * HOW TO USE:
 * 1. Add events using: addEvent('Title', 'Date', 'Description', 'image-url')
 * 2. To show events section: Set CONFIG.ENABLE_EVENTS = true
 * 3. Or uncomment: document.getElementById('events').style.display = 'block';
 * 
 * NOTE: Events section is hidden by default (display: none in CSS)
 * This allows you to build events independently without showing on main site
 */

const events = [];

/**
 * Add a new event
 * 
 * EXAMPLE USAGE:
 * addEvent(
 *     'Python Bootcamp',
 *     'March 20-25, 2024',
 *     'Learn Python programming fundamentals in 5 days',
 *     'https://image-url.com/event.jpg'
 * );
 */
function addEvent(title, date, description, imageUrl = 'https://via.placeholder.com/400x300?text=Event') {
    const newEvent = {
        id: events.length + 1,
        title: title,
        date: date,
        description: description,
        image: imageUrl,
        registrationLink: '#contact' // Links to contact form for registration
    };
    events.push(newEvent);
    console.log(`✓ Event added: ${title}`);
    
    // Render if events section is visible
    if (CONFIG.ENABLE_EVENTS) {
        renderEvents();
    }
}

/**
 * Render events to the DOM
 */
function renderEvents() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;

    eventsGrid.innerHTML = events.map((event, index) => `
        <div class="event-card" data-event-id="${event.id}">
            <div class="event-image-wrapper">
                <img src="${event.image}" alt="${event.title}" class="event-image">
            </div>
            <div class="event-content">
                <p class="event-date">📅 ${event.date}</p>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <a href="${event.registrationLink}" class="event-register-btn">Register Now</a>
            </div>
        </div>
    `).join('');

    // Trigger animations
    if (CONFIG.ANIMATIONS_ENABLED) {
        const cards = eventsGrid.querySelectorAll('.event-card');
        cards.forEach((card, idx) => {
            card.style.animationDelay = `${idx * 0.1}s`;
        });
    }
}

/**
 * Enable/Show events section
 * Call this function when you want to enable events
 */
function enableEventsSection() {
    CONFIG.ENABLE_EVENTS = true;
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
        eventsSection.style.display = 'block';
        renderEvents();
        console.log('✓ Events section enabled');
    }
}

/**
 * Disable/Hide events section
 */
function disableEventsSection() {
    CONFIG.ENABLE_EVENTS = false;
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
        eventsSection.style.display = 'none';
        console.log('✓ Events section disabled');
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

/**
 * Handle contact form submission
 * 
 * FUTURE API INTEGRATION:
 * Replace the alert/console.log with actual API call to Glooc API
 * 
 * API ENDPOINT: POST /api/contact/messages
 * PAYLOAD: { name, email, subject, message, timestamp }
 */
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // ============================================
            // FUTURE API INTEGRATION POINT
            // ============================================
            // Replace this section with actual Glooc API call:
            // const response = await fetch(`${CONFIG.API_BASE_URL}/contact/messages`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer YOUR_API_KEY'
            //     },
            //     body: JSON.stringify(formData)
            // });
            // const result = await response.json();
            
            // For now, simulate success with local storage
            await simulateFormSubmission(formData);

            // Show success message
            showFormStatus('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
            form.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            showFormStatus('Oops! There was an error sending your message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

/**
 * Simulate form submission (for now)
 * Replace with actual API call when Glooc API is ready
 */
async function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            // Store in localStorage for demonstration
            const submissions = JSON.parse(localStorage.getItem('tnl_form_submissions') || '[]');
            submissions.push(data);
            localStorage.setItem('tnl_form_submissions', JSON.stringify(submissions));
            console.log('Form data stored:', data);
            resolve();
        }, 500);
    });
}

/**
 * Display form status message
 */
function showFormStatus(message, type) {
    const statusDiv = document.getElementById('form-status');
    if (!statusDiv) return;

    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;
    statusDiv.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 5000);
}

// ============================================
// NAVIGATION MANAGEMENT
// ============================================

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Setup smooth scrolling for internal links
 */
function setupSmoothScrolling() {
    if (!CONFIG.SMOOTH_SCROLL) return;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
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
}

// ============================================
// API INTEGRATION PLACEHOLDERS
// ============================================

/**
 * FUTURE: Fetch team members from Glooc API
 * 
 * EXAMPLE:
 * async function fetchTeamFromAPI() {
 *     try {
 *         const response = await fetch(`${CONFIG.API_BASE_URL}/team`, {
 *             headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
 *         });
 *         const data = await response.json();
 *         // Update teamMembers array with data
 *         renderTeamMembers();
 *     } catch (error) {
 *         console.error('Error fetching team:', error);
 *     }
 * }
 */

/**
 * FUTURE: Fetch knowledge topics from Glooc API
 * 
 * EXAMPLE:
 * async function fetchKnowledgeFromAPI() {
 *     try {
 *         const response = await fetch(`${CONFIG.API_BASE_URL}/knowledge`, {
 *             headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
 *         });
 *         const data = await response.json();
 *         // Update knowledgeTopics array with data
 *         renderKnowledgeTopics();
 *     } catch (error) {
 *         console.error('Error fetching knowledge:', error);
 *     }
 * }
 */

/**
 * FUTURE: Fetch events from Glooc API
 * 
 * EXAMPLE:
 * async function fetchEventsFromAPI() {
 *     try {
 *         const response = await fetch(`${CONFIG.API_BASE_URL}/events`, {
 *             headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
 *         });
 *         const data = await response.json();
 *         // Update events array with data
 *         renderEvents();
 *     } catch (error) {
 *         console.error('Error fetching events:', error);
 *     }
 * }
 */

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the website
 * This function runs when the page loads
 */
function initializeWebsite() {
    console.log('🚀 Tech-No-Limits Website Initializing...');

    // Render all content
    renderTeamMembers();
    renderKnowledgeTopics();

    // Setup interactions
    setupMobileMenu();
    setupSmoothScrolling();
    setupContactForm();
    updateActiveNavLink();

    // Enable events if configured
    if (CONFIG.ENABLE_EVENTS) {
        enableEventsSection();
    }

    console.log('✓ Website initialized successfully');
    console.log('✓ Team members loaded:', teamMembers.length);
    console.log('✓ Knowledge topics loaded:', knowledgeTopics.length);
    console.log('✓ Events system ready. Events hidden:', events.length === 0 ? 'No events yet' : events.length);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}

// ============================================
// UTILITY FUNCTIONS FOR DEVELOPER
// ============================================

/**
 * Get all data (for debugging/admin)
 * Usage: window.getAppData()
 */
window.getAppData = () => ({
    config: CONFIG,
    team: teamMembers,
    knowledge: knowledgeTopics,
    events: events,
    submissions: JSON.parse(localStorage.getItem('tnl_form_submissions') || '[]')
});

/**
 * Quick add team member (for testing)
 * Usage: window.quickAddTeamMember('Name', 'Role', 'Bio', 'image-url')
 */
window.quickAddTeamMember = addTeamMember;

/**
 * Quick add knowledge topic (for testing)
 * Usage: window.quickAddKnowledge('Title', 'Category', 'Description')
 */
window.quickAddKnowledge = addKnowledgeTopic;

/**
 * Quick add event (for testing)
 * Usage: window.quickAddEvent('Title', 'Date', 'Description', 'image-url')
 */
window.quickAddEvent = addEvent;

/**
 * Quick toggle events section (for testing)
 * Usage: window.toggleEvents()
 */
window.toggleEvents = () => CONFIG.ENABLE_EVENTS ? disableEventsSection() : enableEventsSection();

console.log('💡 Pro Tips:');
console.log('   - View all data: window.getAppData()');
console.log('   - Add team member: window.quickAddTeamMember(name, role, bio, image)');
console.log('   - Add knowledge topic: window.quickAddKnowledge(title, category, description)');
console.log('   - Add event: window.quickAddEvent(title, date, description, image)');
console.log('   - Toggle events: window.toggleEvents()');