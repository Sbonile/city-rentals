// Application State
const AppState = {
    currentUser: null,
    favorites: [],
    properties: [
        {
            id: 1,
            title: "Modern Bachelor in Cosmo City",
            price: 3500,
            location: "Cosmo City, Johannesburg",
            beds: 1,
            baths: 1,
            size: 45,
            type: "bachelor",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "Featured",
            description: "A modern bachelor apartment perfect for singles or students. Features include a fully equipped kitchenette, built-in wardrobes, and secure parking.",
            amenities: ["WiFi", "Parking", "Security", "Laundry"]
        },
        {
            id: 2,
            title: "Spacious Family House",
            price: 5800,
            location: "Cosmo City, Johannesburg",
            beds: 3,
            baths: 2,
            size: 120,
            type: "house",
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "Popular",
            description: "Perfect for families, this spacious house features a large backyard, modern kitchen, and plenty of storage space.",
            amenities: ["Garden", "Parking", "Security", "Pet-friendly"]
        },
        {
            id: 3,
            title: "Cozy Garden Cottage",
            price: 4200,
            location: "Cosmo City, Johannesburg",
            beds: 2,
            baths: 1,
            size: 65,
            type: "cottage",
            image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "A charming garden cottage with a private entrance and beautiful garden views. Perfect for couples or small families.",
            amenities: ["Garden", "Private Entrance", "Parking"]
        },
        {
            id: 4,
            title: "Luxury Apartment",
            price: 7500,
            location: "Cosmo City, Johannesburg",
            beds: 2,
            baths: 2,
            size: 85,
            type: "apartment",
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            badge: "New",
            description: "Modern luxury apartment with high-end finishes, balcony, and access to communal facilities including a pool and gym.",
            amenities: ["Pool", "Gym", "Parking", "Security", "Balcony"]
        },
        {
            id: 5,
            title: "Student Accommodation",
            price: 2800,
            location: "Cosmo City, Johannesburg",
            beds: 1,
            baths: 1,
            size: 35,
            type: "bachelor",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Affordable student accommodation with study desk and easy access to public transport.",
            amenities: ["WiFi", "Study Desk", "Security"]
        },
        {
            id: 6,
            title: "Family Townhouse",
            price: 6200,
            location: "Cosmo City, Johannesburg",
            beds: 3,
            baths: 2,
            size: 110,
            type: "house",
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Modern townhouse in a secure complex, perfect for families with children.",
            amenities: ["Security", "Parking", "Playground", "Pet-friendly"]
        }
    ],
    blogs: [
        {
            id: 1,
            title: "10 Tips for First-Time Renters",
            excerpt: "Essential advice for those renting their first property...",
            content: "Renting your first property can be both exciting and overwhelming. Here are 10 essential tips to help you navigate the process: 1. Understand your budget and stick to it. 2. Check the neighborhood at different times of day. 3. Read the lease agreement carefully. 4. Document the property's condition before moving in. 5. Get renters insurance. 6. Know your rights as a tenant. 7. Communicate openly with your landlord. 8. Understand maintenance responsibilities. 9. Be a good neighbor. 10. Plan for moving costs beyond just the rent.",
            date: "2023-11-15",
            author: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "How to Maintain Good Tenant-Landlord Relations",
            excerpt: "Building positive relationships for a better rental experience...",
            content: "A positive relationship with your landlord can make your rental experience much more pleasant. Here are some tips: Communicate promptly about issues, pay rent on time, respect the property, give proper notice before moving out, and be reasonable with requests. Remember that landlords appreciate tenants who treat their property with care and respect.",
            date: "2023-11-10",
            author: "Michael Brown",
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Understanding Your Lease Agreement",
            excerpt: "Key terms and conditions every tenant should know...",
            content: "Your lease agreement is a legally binding contract. Key elements to understand include: lease duration, rent amount and due date, security deposit details, maintenance responsibilities, pet policies, subletting rules, and termination conditions. Don't hesitate to ask for clarification on any points you don't understand before signing.",
            date: "2023-11-05",
            author: "Lisa Williams",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    faqs: [
        {
            question: "How do I apply for a property?",
            answer: "To apply for a property, click on the 'Book Now' button on any property listing. You'll need to create an account and fill out an application form with your personal details, employment information, and references."
        },
        {
            question: "What documents do I need to rent?",
            answer: "Typically, you'll need: a valid ID, proof of income (3 months bank statements or payslips), proof of residence, and references from previous landlords or employers."
        },
        {
            question: "How long does the application process take?",
            answer: "Once you submit your application with all required documents, the approval process usually takes 2-5 business days. We'll contact you as soon as your application is reviewed."
        },
        {
            question: "Can I view a property before applying?",
            answer: "Absolutely! We encourage all potential tenants to view properties before applying. You can schedule a viewing by clicking 'View Details' on any property and selecting your preferred viewing time."
        },
        {
            question: "What is the deposit amount?",
            answer: "The deposit is typically equal to one month's rent. This amount is refundable at the end of your lease, subject to property inspection and no damages."
        },
        {
            question: "Are pets allowed?",
            answer: "Pet policies vary by property. Some landlords allow pets with an additional deposit, while others don't allow pets at all. Check the property details or contact us for specific pet policies."
        }
    ]
};

// Navigation System
function navigateTo(page) {
    document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    const pageElement = document.getElementById(page + 'Page');
    if (pageElement) {
        pageElement.classList.add('active');
        document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
        
        const breadcrumb = document.getElementById('breadcrumb');
        breadcrumb.innerHTML = `<span>${page.charAt(0).toUpperCase() + page.slice(1)}</span>`;
        
        if (window.innerWidth <= 1024) {
            document.getElementById('sidebar').classList.remove('active');
        }
        
        window.scrollTo(0, 0);
    }
}

// Render Property Card
function renderPropertyCard(property) {
    const isFavorite = AppState.favorites.includes(property.id);
    return `
        <div class="property-card">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                ${property.badge ? `<div class="property-badge">${property.badge}</div>` : ''}
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${property.id}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price">R${property.price.toLocaleString()}<span>/month</span></div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-features">
                    <span><i class="fas fa-bed"></i> ${property.beds} Bed${property.beds > 1 ? 's' : ''}</span>
                    <span><i class="fas fa-bath"></i> ${property.baths} Bath${property.baths > 1 ? 's' : ''}</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.size}m²</span>
                </div>
                <div class="property-actions">
                    <button class="btn btn-outline view-details-btn" data-id="${property.id}">View Details</button>
                    <button class="btn btn-primary book-now-btn" data-id="${property.id}">Book Now</button>
                </div>
            </div>
        </div>
    `;
}

// Render Property Detail View
function renderPropertyDetail(propertyId) {
    const property = AppState.properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const detailHTML = `
        <section>
            <div class="section-header">
                <button class="btn btn-secondary" id="backToBrowse"><i class="fas fa-arrow-left"></i> Back to Properties</button>
                <h2>${property.title}</h2>
                <p>${property.location}</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                <div>
                    <div class="property-image" style="height: 400px;">
                        <img src="${property.image}" alt="${property.title}">
                        ${property.badge ? `<div class="property-badge">${property.badge}</div>` : ''}
                        <button class="favorite-btn ${AppState.favorites.includes(property.id) ? 'active' : ''}" data-id="${property.id}">
                            <i class="${AppState.favorites.includes(property.id) ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                </div>
                
                <div>
                    <div class="property-price" style="font-size: 2.5rem;">R${property.price.toLocaleString()}<span style="font-size: 1.25rem;">/month</span></div>
                    
                    <div class="property-features" style="margin: 1.5rem 0;">
                        <span><i class="fas fa-bed"></i> ${property.beds} Bed${property.beds > 1 ? 's' : ''}</span>
                        <span><i class="fas fa-bath"></i> ${property.baths} Bath${property.baths > 1 ? 's' : ''}</span>
                        <span><i class="fas fa-ruler-combined"></i> ${property.size}m²</span>
                    </div>
                    
                    <div style="margin-bottom: 2rem;">
                        <h3>Description</h3>
                        <p>${property.description}</p>
                    </div>
                    
                    <div style="margin-bottom: 2rem;">
                        <h3>Amenities</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${property.amenities.map(amenity => `
                                <span style="background: var(--background); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem;">
                                    <i class="fas fa-check"></i> ${amenity}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="property-actions">
                        <button class="btn btn-primary book-now-btn" data-id="${property.id}" style="flex: 1;">Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    const browsePage = document.getElementById('browsePage');
    browsePage.innerHTML = detailHTML;
    
    // Add event listeners
    document.getElementById('backToBrowse').addEventListener('click', () => {
        renderBrowsePage();
    });
    
    document.querySelector('.favorite-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(property.id);
    });
    
    document.querySelector('.book-now-btn').addEventListener('click', () => {
        handleBookNow(property.id);
    });
}

// Render Browse Page
function renderBrowsePage() {
    const browsePage = document.getElementById('browsePage');
    browsePage.innerHTML = `
        <section>
            <div class="section-header">
                <h2>Browse All Properties</h2>
                <p>Find your perfect rental home</p>
            </div>
            <div class="properties-grid" id="allProperties"></div>
        </section>
    `;
    
    const allGrid = document.getElementById('allProperties');
    allGrid.innerHTML = AppState.properties.map(renderPropertyCard).join('');
    attachPropertyListeners();
}

// Render Blog Detail View
function renderBlogDetail(blogId) {
    const blog = AppState.blogs.find(b => b.id === blogId);
    if (!blog) return;
    
    const blogHTML = `
        <section>
            <div class="section-header">
                <button class="btn btn-secondary" id="backToBlog"><i class="fas fa-arrow-left"></i> Back to Blog</button>
                <h2>${blog.title}</h2>
                <div class="blog-meta" style="justify-content: center;">
                    <span><i class="fas fa-calendar"></i> ${blog.date}</span>
                    <span><i class="fas fa-user"></i> ${blog.author}</span>
                </div>
            </div>
            
            <div style="max-width: 800px; margin: 0 auto;">
                <div class="blog-image" style="height: 400px; margin-bottom: 2rem;">
                    <img src="${blog.image}" alt="${blog.title}">
                </div>
                
                <div style="font-size: 1.125rem; line-height: 1.8;">
                    ${blog.content.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
                </div>
            </div>
        </section>
    `;
    
    const blogPage = document.getElementById('blogPage');
    blogPage.innerHTML = blogHTML;
    
    document.getElementById('backToBlog').addEventListener('click', () => {
        renderBlogPage();
    });
}

// Render Blog Page
function renderBlogPage() {
    const blogPage = document.getElementById('blogPage');
    blogPage.innerHTML = `
        <section>
            <div class="section-header">
                <h2>Latest Articles</h2>
                <p>Tips, guides, and insights for renters and landlords</p>
            </div>
            <div class="blog-grid" id="blogGrid"></div>
        </section>
    `;
    
    renderBlogs();
}

// Render Properties
function renderProperties() {
    const featuredGrid = document.getElementById('featuredProperties');
    const allGrid = document.getElementById('allProperties');
    
    if (featuredGrid) {
        featuredGrid.innerHTML = AppState.properties.slice(0, 3).map(renderPropertyCard).join('');
    }
    
    if (allGrid) {
        allGrid.innerHTML = AppState.properties.map(renderPropertyCard).join('');
    }
    
    attachPropertyListeners();
}

// Render Favorites
function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const emptyFavorites = document.getElementById('emptyFavorites');
    
    const favoriteProperties = AppState.properties.filter(p => AppState.favorites.includes(p.id));
    
    if (favoriteProperties.length === 0) {
        favoritesGrid.style.display = 'none';
        emptyFavorites.style.display = 'block';
    } else {
        favoritesGrid.style.display = 'grid';
        emptyFavorites.style.display = 'none';
        favoritesGrid.innerHTML = favoriteProperties.map(renderPropertyCard).join('');
        attachPropertyListeners();
    }
    
    updateFavoritesCount();
}

// Update Favorites Count
function updateFavoritesCount() {
    const badge = document.getElementById('favoritesCount');
    badge.textContent = AppState.favorites.length;
}

// Toggle Favorite
function toggleFavorite(propertyId) {
    const index = AppState.favorites.indexOf(propertyId);
    if (index > -1) {
        AppState.favorites.splice(index, 1);
    } else {
        AppState.favorites.push(propertyId);
    }
    renderProperties();
    renderFavorites();
    updateFavoritesCount();
}

// Attach Property Event Listeners
function attachPropertyListeners() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            toggleFavorite(id);
        });
    });
    
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            renderPropertyDetail(id);
            navigateTo('browse');
        });
    });
    
    document.querySelectorAll('.book-now-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            handleBookNow(id);
        });
    });
}

// Handle Book Now
function handleBookNow(propertyId) {
    if (!AppState.currentUser) {
        alert('Please log in to book a property.');
        navigateTo('login');
        return;
    }
    
    const property = AppState.properties.find(p => p.id === propertyId);
    if (property) {
        alert(`Booking request submitted for ${property.title}. Our team will contact you shortly to complete the process.`);
    }
}

// Render Blog Posts
function renderBlogs() {
    const blogGrid = document.getElementById('blogGrid');
    if (blogGrid) {
        blogGrid.innerHTML = AppState.blogs.map(blog => `
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${blog.image}" alt="${blog.title}">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="fas fa-calendar"></i> ${blog.date}</span>
                        <span><i class="fas fa-user"></i> ${blog.author}</span>
                    </div>
                    <h3 class="blog-title">${blog.title}</h3>
                    <p class="blog-excerpt">${blog.excerpt}</p>
                    <button class="btn btn-outline read-more-btn" data-id="${blog.id}">Read More</button>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.read-more-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                renderBlogDetail(id);
                navigateTo('blog');
            });
        });
    }
}

// Render FAQs
function renderFAQs() {
    const faqList = document.getElementById('faqList');
    if (faqList) {
        faqList.innerHTML = AppState.faqs.map((faq, index) => `
            <div class="faq-item" data-index="${index}">
                <div class="faq-question">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer">
                    ${faq.answer}
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }
}

// Search Functionality
function performSearch() {
    const location = document.getElementById('searchLocation').value.toLowerCase();
    const type = document.getElementById('searchType').value;
    const priceRange = document.getElementById('searchPrice').value;
    
    let filtered = AppState.properties;
    
    if (location) {
        filtered = filtered.filter(p => p.location.toLowerCase().includes(location));
    }
    
    if (type) {
        filtered = filtered.filter(p => p.type === type);
    }
    
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(s => s.replace('+', ''));
        filtered = filtered.filter(p => {
            if (max) {
                return p.price >= parseInt(min) && p.price <= parseInt(max);
            } else {
                return p.price >= parseInt(min);
            }
        });
    }
    
    const allGrid = document.getElementById('allProperties');
    if (filtered.length > 0) {
        allGrid.innerHTML = filtered.map(renderPropertyCard).join('');
        attachPropertyListeners();
    } else {
        allGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem;"><h3>No properties found</h3><p style="color: var(--text-secondary);">Try adjusting your search criteria</p></div>';
    }
    
    navigateTo('browse');
}

// Profile Tabs Functionality
function setupProfileTabs() {
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabName = tab.getAttribute('data-tab');
            const profileContent = document.getElementById('profileTabInfo');
            
            if (tabName === 'info') {
                profileContent.innerHTML = `
                    <h3>Personal Information</h3>
                    <form id="profileForm">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" id="profileFormName" placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="profileFormEmail" placeholder="your@email.com">
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="tel" id="profileFormPhone" placeholder="+27 12 345 6789">
                        </div>
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                    </form>
                `;
                
                // Re-attach form handler
                document.getElementById('profileForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    if (AppState.currentUser) {
                        AppState.currentUser.name = document.getElementById('profileFormName').value;
                        AppState.currentUser.email = document.getElementById('profileFormEmail').value;
                        AppState.currentUser.phone = document.getElementById('profileFormPhone').value;
                        updateUserInterface();
                        alert('Profile updated successfully!');
                    }
                });
                
                // Populate form with current user data
                if (AppState.currentUser) {
                    document.getElementById('profileFormName').value = AppState.currentUser.name;
                    document.getElementById('profileFormEmail').value = AppState.currentUser.email;
                    document.getElementById('profileFormPhone').value = AppState.currentUser.phone || '';
                }
            } else if (tabName === 'properties') {
                const favoriteProperties = AppState.properties.filter(p => AppState.favorites.includes(p.id));
                
                if (favoriteProperties.length > 0) {
                    profileContent.innerHTML = `
                        <h3>My Favorite Properties</h3>
                        <div class="properties-grid">
                            ${favoriteProperties.map(renderPropertyCard).join('')}
                        </div>
                    `;
                    attachPropertyListeners();
                } else {
                    profileContent.innerHTML = `
                        <div style="text-align: center; padding: 2rem;">
                            <i class="fas fa-heart" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                            <h3>No favorite properties yet</h3>
                            <p style="color: var(--text-secondary);">Properties you add to your favorites will appear here.</p>
                            <a class="btn btn-primary" data-page="browse" style="margin-top: 1rem;">Browse Properties</a>
                        </div>
                    `;
                }
            } else if (tabName === 'settings') {
                profileContent.innerHTML = `
                    <h3>Account Settings</h3>
                    <div style="margin-bottom: 2rem;">
                        <h4>Notification Preferences</h4>
                        <div class="form-group">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" checked> Email notifications
                            </label>
                        </div>
                        <div class="form-group">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" checked> SMS notifications
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Privacy</h4>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Manage your privacy settings</p>
                        <button class="btn btn-outline">Privacy Settings</button>
                    </div>
                `;
            }
        });
    });
}

// Login Form Handler
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    AppState.currentUser = {
        name: email.split('@')[0],
        email: email
    };
    
    updateUserInterface();
    navigateTo('home');
});

// Signup Form Handler
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    
    AppState.currentUser = {
        name: name,
        email: email,
        phone: document.getElementById('signupPhone').value
    };
    
    updateUserInterface();
    navigateTo('home');
});

// Profile Form Handler
document.getElementById('profileForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (AppState.currentUser) {
        AppState.currentUser.name = document.getElementById('profileFormName').value;
        AppState.currentUser.email = document.getElementById('profileFormEmail').value;
        AppState.currentUser.phone = document.getElementById('profileFormPhone').value;
        updateUserInterface();
        alert('Profile updated successfully!');
    }
});

// Contact Form Handler
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const alertDiv = document.getElementById('contactAlert');
    alertDiv.innerHTML = '<div class="alert alert-success"><i class="fas fa-check-circle"></i> Message sent successfully! We\'ll get back to you soon.</div>';
    e.target.reset();
    setTimeout(() => {
        alertDiv.innerHTML = '';
    }, 5000);
});

// Update User Interface
function updateUserInterface() {
    const userName = document.getElementById('userName');
    const userStatus = document.getElementById('userStatus');
    const userActions = document.getElementById('userActions');
    const loginLink = document.getElementById('loginLink');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    
    if (AppState.currentUser) {
        userName.textContent = AppState.currentUser.name;
        userStatus.textContent = 'Logged in';
        userActions.innerHTML = '<button class="btn btn-secondary" id="logoutBtn">Log Out</button>';
        
        if (profileName) profileName.textContent = AppState.currentUser.name;
        if (profileEmail) profileEmail.textContent = AppState.currentUser.email;
        
        document.getElementById('logoutBtn').addEventListener('click', () => {
            AppState.currentUser = null;
            updateUserInterface();
            navigateTo('home');
        });
        
        // Update profile form if it exists
        if (document.getElementById('profileFormName')) {
            document.getElementById('profileFormName').value = AppState.currentUser.name;
            document.getElementById('profileFormEmail').value = AppState.currentUser.email;
            document.getElementById('profileFormPhone').value = AppState.currentUser.phone || '';
        }
    } else {
        userName.textContent = 'Guest User';
        userStatus.textContent = 'Not logged in';
        userActions.innerHTML = '<a class="btn btn-primary" data-page="login">Log In</a><a class="btn btn-secondary" data-page="signup">Sign Up</a>';
        
        if (profileName) profileName.textContent = 'Guest User';
        if (profileEmail) profileEmail.textContent = 'Not logged in';
        
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(link.getAttribute('data-page'));
            });
        });
    }
}

// Mobile Menu Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Navigation Click Handlers
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        navigateTo(page);
    });
});

// Search Button
document.getElementById('searchBtn').addEventListener('click', performSearch);

// Enter key on search fields
['searchLocation', 'searchType', 'searchPrice'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// Initialize Application
function initApp() {
    renderProperties();
    renderFavorites();
    renderBlogs();
    renderFAQs();
    updateUserInterface();
    updateFavoritesCount();
    setupProfileTabs();
}

// Run on page load
window.addEventListener('DOMContentLoaded', initApp);

// Extended Application State
        AppState.extendedProperties = AppState.properties.map(prop => ({
            ...prop,
            description: `This beautiful ${prop.type} in ${prop.location} offers ${prop.beds} bedroom${prop.beds > 1 ? 's' : ''} and ${prop.baths} bathroom${prop.baths > 1 ? 's' : ''}. With ${prop.size} square meters of living space, it's perfect for ${prop.type === 'bachelor' ? 'students or young professionals' : prop.type === 'apartment' ? 'couples or small families' : 'families'}. The property features modern finishes and is located in a safe, convenient neighborhood with easy access to public transport, shopping centers, and schools.`,
            amenities: [
                'WiFi Ready',
                'Secure Parking',
                '24/7 Security',
                'Water Included',
                'Prepaid Electricity',
                'Garden',
                'Braai Area',
                'Pet Friendly'
            ].slice(0, Math.floor(Math.random() * 4) + 4), // Random 4-7 amenities
            images: [
                prop.image,
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ]
        }));
        
        AppState.extendedBlogs = AppState.blogs.map(blog => ({
            ...blog,
            content: `
                <p>${blog.excerpt}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>Key Points to Consider</h3>
                <ul>
                    <li>Always read the lease agreement thoroughly</li>
                    <li>Document the property condition before moving in</li>
                    <li>Understand your rights and responsibilities as a tenant</li>
                    <li>Communicate openly with your landlord about any issues</li>
                </ul>
                <p>By following these guidelines, you can ensure a positive rental experience and build a good relationship with your landlord.</p>
            `
        }));
        
        AppState.userProperties = [
            {
                id: 101,
                title: "My Cosmo City Apartment",
                price: 3500,
                status: "Rented",
                tenant: "John Smith",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ];

        // Modal Management
        function openPropertyModal(propertyId) {
            const property = AppState.extendedProperties.find(p => p.id === propertyId);
            if (!property) return;
            
            document.getElementById('modalPropertyTitle').textContent = property.title;
            document.getElementById('modalPropertyPrice').textContent = `R${property.price.toLocaleString()}/month`;
            document.getElementById('modalPropertyLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${property.location}`;
            document.getElementById('modalPropertyDescription').textContent = property.description;
            document.getElementById('modalBookingPrice').textContent = `R${property.price.toLocaleString()}/month`;
            
            // Set main image
            document.getElementById('modalMainImage').src = property.images[0];
            
            // Set thumbnails
            const thumbs = document.querySelectorAll('.gallery-thumb img');
            property.images.slice(1).forEach((img, index) => {
                if (thumbs[index]) {
                    thumbs[index].src = img;
                    thumbs[index].parentElement.onclick = () => {
                        document.getElementById('modalMainImage').src = img;
                    };
                }
            });
            
            // Update features
            const featuresHTML = `
                <span><i class="fas fa-bed"></i> ${property.beds} Bed${property.beds > 1 ? 's' : ''}</span>
                <span><i class="fas fa-bath"></i> ${property.baths} Bath${property.baths > 1 ? 's' : ''}</span>
                <span><i class="fas fa-ruler-combined"></i> ${property.size}m²</span>
                <span><i class="fas fa-home"></i> ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
            `;
            document.getElementById('modalPropertyFeatures').innerHTML = featuresHTML;
            
            // Update amenities
            const amenitiesHTML = property.amenities.map(amenity => 
                `<div class="amenity-item"><i class="fas fa-check"></i> ${amenity}</div>`
            ).join('');
            document.getElementById('modalPropertyAmenities').innerHTML = amenitiesHTML;
            
            // Show modal
            document.getElementById('propertyModal').style.display = 'block';
        }
        
        function openBlogModal(blogId) {
            const blog = AppState.extendedBlogs.find(b => b.id === blogId);
            if (!blog) return;
            
            document.getElementById('modalBlogTitle').textContent = blog.title;
            document.getElementById('modalBlogDate').textContent = blog.date;
            document.getElementById('modalBlogAuthor').textContent = blog.author;
            document.getElementById('modalBlogImage').src = blog.image;
            document.getElementById('modalBlogContent').innerHTML = blog.content;
            
            document.getElementById('blogModal').style.display = 'block';
        }
        
        function closeModals() {
            document.getElementById('propertyModal').style.display = 'none';
            document.getElementById('blogModal').style.display = 'none';
        }
        
        // Toast Notification System
        function showToast(message, type = 'info') {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            `;
            
            document.getElementById('toastContainer').appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            }, 4000);
        }
        
        // Enhanced Property Card with click handlers
        function renderPropertyCard(property) {
            const isFavorite = AppState.favorites.includes(property.id);
            return `
                <div class="property-card">
                    <div class="property-image">
                        <img src="${property.image}" alt="${property.title}">
                        ${property.badge ? `<div class="property-badge">${property.badge}</div>` : ''}
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${property.id}">
                            <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                    <div class="property-info">
                        <div class="property-price">R${property.price.toLocaleString()}<span>/month</span></div>
                        <h3 class="property-title">${property.title}</h3>
                        <div class="property-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.location}
                        </div>
                        <div class="property-features">
                            <span><i class="fas fa-bed"></i> ${property.beds} Bed${property.beds > 1 ? 's' : ''}</span>
                            <span><i class="fas fa-bath"></i> ${property.baths} Bath${property.baths > 1 ? 's' : ''}</span>
                            <span><i class="fas fa-ruler-combined"></i> ${property.size}m²</span>
                        </div>
                        <div class="property-actions">
                            <button class="btn btn-outline view-details-btn" data-id="${property.id}">View Details</button>
                            <button class="btn btn-primary book-now-btn" data-id="${property.id}">Book Now</button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // Enhanced Blog Card
        function renderBlogCard(blog) {
            return `
                <div class="blog-card">
                    <div class="blog-image">
                        <img src="${blog.image}" alt="${blog.title}">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="fas fa-calendar"></i> ${blog.date}</span>
                            <span><i class="fas fa-user"></i> ${blog.author}</span>
                        </div>
                        <h3 class="blog-title">${blog.title}</h3>
                        <p class="blog-excerpt">${blog.excerpt}</p>
                        <button class="btn btn-outline read-more-btn" data-id="${blog.id}">Read More</button>
                    </div>
                </div>
            `;
        }
        
        // Render User Properties in Profile
        function renderUserProperties() {
            const container = document.getElementById('profileTabProperties');
            if (!container) return;
            
            if (AppState.userProperties.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <i class="fas fa-home" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                        <h3>No Properties Listed</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">You haven't listed any properties yet.</p>
                        <button class="btn btn-primary" id="addPropertyBtn">Add Your First Property</button>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <div class="properties-list">
                        ${AppState.userProperties.map(property => `
                            <div class="property-item">
                                <div class="property-item-image">
                                    <img src="${property.image}" alt="${property.title}">
                                </div>
                                <div class="property-item-info">
                                    <h4>${property.title}</h4>
                                    <div class="property-price">R${property.price.toLocaleString()}/month</div>
                                    <div class="property-status">Status: <span style="color: ${property.status === 'Rented' ? 'var(--success)' : 'var(--text-secondary)'}">${property.status}</span></div>
                                    ${property.tenant ? `<div class="property-tenant">Tenant: ${property.tenant}</div>` : ''}
                                </div>
                                <div class="property-item-actions">
                                    <button class="btn btn-outline">Edit</button>
                                    <button class="btn btn-secondary">Manage</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
        }
        
        // Render Settings Tab
        function renderSettingsTab() {
            const container = document.getElementById('profileTabSettings');
            if (!container) return;
            
            container.innerHTML = `
                <div class="settings-form">
                    <h3>Account Settings</h3>
                    <form id="settingsForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Email Notifications</label>
                                <select>
                                    <option>All Notifications</option>
                                    <option>Important Only</option>
                                    <option>None</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Language</label>
                                <select>
                                    <option>English</option>
                                    <option>Afrikaans</option>
                                    <option>Zulu</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Current Password</label>
                            <input type="password" placeholder="Enter current password">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>New Password</label>
                                <input type="password" placeholder="New password">
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm new password">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Settings</button>
                    </form>
                    
                    <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                        <h3>Danger Zone</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Once you delete your account, there is no going back. Please be certain.</p>
                        <button class="btn" style="background: var(--error); color: white;">Delete Account</button>
                    </div>
                </div>
            `;
        }
        
        // Profile Tab Management
        function setupProfileTabs() {
            document.querySelectorAll('.profile-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabName = tab.getAttribute('data-tab');
                    
                    // Hide all tab contents
                    document.querySelectorAll('[id^="profileTab"]').forEach(content => {
                        content.style.display = 'none';
                    });
                    
                    // Show selected tab content
                    document.getElementById(`profileTab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).style.display = 'block';
                    
                    // Update active tab
                    document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Load tab content if needed
                    if (tabName === 'properties') {
                        renderUserProperties();
                    } else if (tabName === 'settings') {
                        renderSettingsTab();
                    }
                });
            });
        }
        
        // Enhanced Search with Filters
        function setupSearchFilters() {
            const locationInput = document.getElementById('searchLocation');
            const typeSelect = document.getElementById('searchType');
            const priceSelect = document.getElementById('searchPrice');
            
            // Clear filters button
            const clearFilters = () => {
                locationInput.value = '';
                typeSelect.value = '';
                priceSelect.value = '';
                performSearch();
            };
            
            // Add clear button if not exists
            if (!document.getElementById('clearFiltersBtn')) {
                const searchBox = document.querySelector('.search-box');
                const clearBtn = document.createElement('button');
                clearBtn.id = 'clearFiltersBtn';
                clearBtn.className = 'btn btn-outline';
                clearBtn.innerHTML = '<i class="fas fa-times"></i> Clear Filters';
                clearBtn.style.marginTop = '1rem';
                clearBtn.onclick = clearFilters;
                searchBox.appendChild(clearBtn);
            }
        }
        
        // Initialize Enhanced Features
        function initEnhancedFeatures() {
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal')) {
                    closeModals();
                }
            });
            
            // Close modal buttons
            document.getElementById('closePropertyModal').addEventListener('click', closeModals);
            document.getElementById('closeBlogModal').addEventListener('click', closeModals);
            
            // Property booking form
            document.getElementById('bookingForm').addEventListener('submit', (e) => {
                e.preventDefault();
                if (!AppState.currentUser) {
                    showToast('Please log in to book a viewing', 'error');
                    navigateTo('login');
                    closeModals();
                    return;
                }
                
                // Simulate booking process
                showToast('Viewing request submitted successfully!', 'success');
                closeModals();
            });
            
            // Enhanced blog rendering
            const blogGrid = document.getElementById('blogGrid');
            if (blogGrid) {
                blogGrid.innerHTML = AppState.extendedBlogs.map(renderBlogCard).join('');
                
                // Add click handlers to Read More buttons
                document.querySelectorAll('.read-more-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const blogId = parseInt(btn.getAttribute('data-id'));
                        openBlogModal(blogId);
                    });
                });
            }
            
            // Add click handlers to property buttons
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-details-btn') || 
                    e.target.parentElement.classList.contains('view-details-btn')) {
                    const btn = e.target.classList.contains('view-details-btn') ? 
                        e.target : e.target.parentElement;
                    const propertyId = parseInt(btn.getAttribute('data-id'));
                    openPropertyModal(propertyId);
                }
                
                if (e.target.classList.contains('book-now-btn') || 
                    e.target.parentElement.classList.contains('book-now-btn')) {
                    const btn = e.target.classList.contains('book-now-btn') ? 
                        e.target : e.target.parentElement;
                    const propertyId = parseInt(btn.getAttribute('data-id'));
                    
                    if (!AppState.currentUser) {
                        showToast('Please log in to book a property', 'error');
                        navigateTo('login');
                        return;
                    }
                    
                    openPropertyModal(propertyId);
                }
            });
            
            // Setup profile tabs
            setupProfileTabs();
            
            // Enhanced search
            setupSearchFilters();
        }
        
        // Update initialization
        function initApp() {
            renderProperties();
            renderFavorites();
            renderBlogs();
            renderFAQs();
            updateUserInterface();
            updateFavoritesCount();
            initEnhancedFeatures();
        }

        // Run on page load
        window.addEventListener('DOMContentLoaded', initApp);
