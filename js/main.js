// Data Storage with localStorage
let rooms = JSON.parse(localStorage.getItem('rooms')) || [
    {
        id: 1,
        title: "Modern Bachelor in Cosmo City",
        type: "bachelor",
        price: 2500,
        bedrooms: 1,
        bathrooms: 1,
        description: "Beautiful modern bachelor apartment with all amenities. Perfect for singles.",
        available: true,
        landlordId: 2,
        image: "🏠"
    },
    {
        id: 2,
        title: "Spacious Family House",
        type: "house",
        price: 4500,
        bedrooms: 2,
        bathrooms: 2,
        description: "Large house with open-plan living area, modern kitchen, and secure parking.",
        available: true,
        landlordId: 2,
        image: "🏠"
    },
    {
        id: 3,
        title: "Charming Cottage with Garden",
        type: "cottage",
        price: 5500,
        bedrooms: 2,
        bathrooms: 1,
        description: "Lovely cottage with garden and cozy atmosphere.",
        available: true,
        landlordId: 2,
        image: "🏠"
    }
];

let bookings = JSON.parse(localStorage.getItem('bookings')) || [
    {
        id: 1,
        roomId: 1,
        roomTitle: "Modern Bachelor in Cosmo City",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+27 12 345 6789",
        checkin: "2025-10-15",
        checkout: "2026-01-15",
        notes: "Looking forward to moving in!",
        status: 'approved',
        date: new Date().toLocaleDateString(),
        tenantId: 1
    }
];

let notifications = JSON.parse(localStorage.getItem('notifications')) || [
    {
        id: 1,
        message: "Your booking request for 'Charming Cottage with Garden' has been submitted successfully!",
        date: new Date().toLocaleString(),
        type: 'info',
        userId: 1
    }
];

let users = JSON.parse(localStorage.getItem('users')) || [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+27 12 345 6789",
        role: "tenant",
        password: "password123"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+27 98 765 4321",
        role: "landlord",
        password: "password123"
    },
    {
        id: 3,
        name: "Admin User",
        email: "admin@example.com",
        phone: "+27 11 222 3333",
        role: "superadmin",
        password: "admin123"
    }
];

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

let currentUserId = parseInt(localStorage.getItem('currentUserId')) || null;
let currentRoomForBooking = null;

// Save Data to localStorage
function saveData() {
    localStorage.setItem('rooms', JSON.stringify(rooms));
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('notifications', JSON.stringify(notifications));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('currentUserId', currentUserId);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Protect dashboard pages
    const protectedPages = ['tenant.html', 'landlord.html', 'superadmin.html'];
    const currentPage = window.location.pathname.split('/').pop();
    if (protectedPages.includes(currentPage) && !currentUserId) {
        window.location.href = 'login.html';
        return;
    }

    // Initialize pages
if (currentPage === 'index.html' || currentPage === '') {
    setupNavbarToggle();
    setupContactForm();
} else if (currentPage === 'signup.html') {
    setupSignupForm();
    setupNavbarToggle();
} else if (currentPage === 'login.html') {
    setupLoginForm();
    setupNavbarToggle();
} else if (currentPage === 'tenant.html') {
        const user = users.find(u => u.id === currentUserId);
        if (user && user.role !== 'tenant') {
            showToast('Unauthorized access', 'error');
            window.location.href = getDashboardUrl(user.role);
            return;
        }
        displayRooms(rooms);
        updateBookingsList();
        updateNotificationsList();
        setupEventListeners();
        document.getElementById('profileName').value = user.name;
        document.getElementById('profileEmail').value = user.email;
        document.getElementById('profilePhone').value = user.phone;
    } else if (currentPage === 'landlord.html') {
        const user = users.find(u => u.id === currentUserId);
        if (user && user.role !== 'landlord') {
            showToast('Unauthorized access', 'error');
            window.location.href = getDashboardUrl(user.role);
            return;
        }
        updateLandlordRoomsList();
        updateRequestsList();
        updateAnalytics();
        setupEventListeners();
    } else if (currentPage === 'superadmin.html') {
        const user = users.find(u => u.id === currentUserId);
        if (user && user.role !== 'superadmin') {
            showToast('Unauthorized access', 'error');
            window.location.href = getDashboardUrl(user.role);
            return;
        }
        updateUsersList();
        updateAllRoomsList();
        updateSystemAnalytics();
        setupEventListeners();
    }
});

// Get Dashboard URL based on role
function getDashboardUrl(role) {
    switch (role) {
        case 'tenant': return 'tenant.html';
        case 'landlord': return 'landlord.html';
        case 'superadmin': return 'superadmin.html';
        default: return 'index.html';
    }
}

// Setup Navbar Toggle
function setupNavbarToggle() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const userMenu = document.querySelector('.user-menu');
    if (navbarToggle && userMenu) {
        navbarToggle.addEventListener('click', () => {
            userMenu.classList.toggle('active');
        });
    }
}

// Setup Login Form
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
}

// Handle Login Submission
function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUserId = user.id;
        saveData();
        showToast('Login successful!', 'success');
        window.location.href = getDashboardUrl(user.role);
    } else {
        showToast('Invalid email or password', 'error');
    }
}

// Logout
function logout() {
    currentUserId = null;
    saveData();
    showToast('Logged out successfully', 'success');
    window.location.href = 'index.html';
}

// Setup Event Listeners
function setupEventListeners() {
    if (document.getElementById('bookingForm')) {
        document.getElementById('bookingForm').addEventListener('submit', handleBookingSubmit);
    }
    if (document.getElementById('addRoomForm')) {
        document.getElementById('addRoomForm').addEventListener('submit', handleAddRoomSubmit);
    }
    if (document.getElementById('profileForm')) {
        document.getElementById('profileForm').addEventListener('submit', handleProfileUpdate);
    }
    if (document.getElementById('addUserForm')) {
        document.getElementById('addUserForm').addEventListener('submit', handleAddUserSubmit);
    }
    if (document.querySelector('.filters')) {
        document.querySelectorAll('.filters select').forEach(select => {
            select.addEventListener('change', applyFilters);
        });
    }
    if (document.getElementById('bookingCheckin')) {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('bookingCheckin').min = today;
        document.getElementById('bookingCheckout').min = today;
    }
}

// Display Rooms
function displayRooms(roomsToDisplay) {
    const grid = document.getElementById('roomsGrid');
    if (!grid) return;

    if (roomsToDisplay.length === 0) {
        grid.innerHTML = '<div class="no-results">No rooms found matching your criteria.</div>';
        return;
    }

    grid.innerHTML = roomsToDisplay.map(room => `
        <div class="room-card" onclick="openBookingModal(${room.id})">
            <div class="room-image">${room.image}</div>
            <div class="room-info">
                <span class="room-type">${room.type.toUpperCase()}</span>
                <div class="room-title">${room.title}</div>
                <div class="room-price">R${room.price.toLocaleString()}/month</div>
                <div class="room-details">
                    <span>🛏️ ${room.bedrooms} Bed</span>
                    <span>🚿 ${room.bathrooms} Bath</span>
                </div>
                <div class="room-description">${room.description}</div>
                <button class="btn btn-primary" style="width: 100%; margin-top: auto;">
                    <span>📅</span>
                    <span>Book Now</span>
                </button>
            </div>
        </div>
    `).join('');
}

// Apply Filters
function applyFilters() {
    const type = document.getElementById('filterType')?.value;
    const priceRange = document.getElementById('filterPrice')?.value;
    const bedrooms = document.getElementById('filterBedrooms')?.value;
    const bathrooms = document.getElementById('filterBathrooms')?.value;

    let filtered = rooms.filter(room => {
        if (type && room.type !== type) return false;
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            if (room.price < min || room.price > max) return false;
        }
        if (bedrooms) {
            const beds = parseInt(bedrooms);
            if (beds === 3 && room.bedrooms < 3) return false;
            if (beds !== 3 && room.bedrooms !== beds) return false;
        }
        if (bathrooms) {
            const baths = parseInt(bathrooms);
            if (baths === 3 && room.bathrooms < 3) return false;
            if (baths !== 3 && room.bathrooms !== baths) return false;
        }
        return true;
    });

    displayRooms(filtered);
}

// Open Booking Modal
function openBookingModal(roomId) {
    if (!currentUserId) {
        showToast('Please log in to book a room', 'error');
        window.location.href = 'login.html';
        return;
    }
    currentRoomForBooking = rooms.find(r => r.id === roomId);
    const modal = document.getElementById('bookingModal');
    const modalInfo = document.getElementById('modalRoomInfo');
    
    if (!modal || !modalInfo) return;

    modalInfo.innerHTML = `
        <div style="background: var(--forge-light); padding: 15px; border-radius: 10px;">
            <h3>${currentRoomForBooking.title}</h3>
            <p style="color: var(--forge-primary); font-size: 20px; font-weight: bold; margin-top: 10px;">
                R${currentRoomForBooking.price.toLocaleString()}/month
            </p>
            <p style="margin-top: 10px; color: var(--forge-dark);">${currentRoomForBooking.description}</p>
        </div>
    `;
    
    const user = users.find(u => u.id === currentUserId);
    document.getElementById('bookingName').value = user.name;
    document.getElementById('bookingEmail').value = user.email;
    document.getElementById('bookingPhone').value = user.phone;
    
    modal.classList.add('active');
}

// Close Booking Modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('bookingForm')?.reset();
    }
}

// Handle Booking Form Submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const booking = {
        id: bookings.length + 1,
        roomId: currentRoomForBooking.id,
        roomTitle: currentRoomForBooking.title,
        name: document.getElementById('bookingName').value,
        email: document.getElementById('bookingEmail').value,
        phone: document.getElementById('bookingPhone').value,
        checkin: document.getElementById('bookingCheckin').value,
        checkout: document.getElementById('bookingCheckout').value,
        notes: document.getElementById('bookingNotes').value,
        status: 'pending',
        date: new Date().toLocaleDateString(),
        tenantId: currentUserId
    };
    
    bookings.push(booking);
    
    notifications.push({
        id: notifications.length + 1,
        message: `Your booking request for "${currentRoomForBooking.title}" has been submitted successfully!`,
        date: new Date().toLocaleString(),
        type: 'info',
        userId: currentUserId
    });
    
    saveData();
    showToast('Booking request submitted successfully!', 'success');
    closeBookingModal();
    updateBookingsList();
    updateNotificationsList();
}

// Show Toast Notification
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// Switch Tenant Dashboard Tab
function switchTab(tab) {
    document.querySelectorAll('#tenantDashboard .dashboard-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('myBookings')?.classList.add('hidden');
    document.getElementById('notifications')?.classList.add('hidden');
    document.getElementById('profile')?.classList.add('hidden');
    document.getElementById('browseRooms')?.classList.add('hidden');
    document.getElementById(tab)?.classList.remove('hidden');
}

// Switch Landlord Dashboard Tab
function switchLandlordTab(tab) {
    document.querySelectorAll('#landlordDashboard .dashboard-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('myRooms')?.classList.add('hidden');
    document.getElementById('bookingRequests')?.classList.add('hidden');
    document.getElementById('addRoom')?.classList.add('hidden');
    document.getElementById('analytics')?.classList.add('hidden');
    document.getElementById(tab)?.classList.remove('hidden');
    
    if (tab === 'analytics') {
        updateAnalytics();
    }
}

// Switch Superadmin Dashboard Tab
function switchSuperadminTab(tab) {
    document.querySelectorAll('#superadminDashboard .dashboard-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('manageUsers')?.classList.add('hidden');
    document.getElementById('manageRooms')?.classList.add('hidden');
    document.getElementById('systemAnalytics')?.classList.add('hidden');
    document.getElementById(tab)?.classList.remove('hidden');
    
    if (tab === 'systemAnalytics') {
        updateSystemAnalytics();
    }
}

// Update Bookings List
function updateBookingsList() {
    const list = document.getElementById('bookingsList');
    if (!list) return;

    const userBookings = bookings.filter(b => b.tenantId === currentUserId);
    
    if (userBookings.length === 0) {
        list.innerHTML = '<p style="color: var(--forge-dark);">No bookings yet. Browse rooms and make your first booking!</p>';
        return;
    }
    
    list.innerHTML = userBookings.map(booking => `
        <div class="booking-item">
            <h4>${booking.roomTitle}</h4>
            <p><strong>Dates:</strong> ${booking.checkin} to ${booking.checkout}</p>
            <p><strong>Submitted:</strong> ${booking.date}</p>
            <span class="booking-status status-${booking.status}">${booking.status.toUpperCase()}</span>
        </div>
    `).join('');
}

// Update Notifications List
function updateNotificationsList() {
    const list = document.getElementById('notificationsList');
    if (!list) return;

    const userNotifications = notifications.filter(n => n.userId === currentUserId);
    
    if (userNotifications.length === 0) {
        list.innerHTML = '<p style="color: var(--forge-dark);">No notifications yet.</p>';
        return;
    }
    
    list.innerHTML = userNotifications.map(notif => `
        <div class="notification">
            <p>${notif.message}</p>
            <small style="color: var(--forge-text-light);">${notif.date}</small>
        </div>
    `).join('');
}

// Update Landlord Rooms List
function updateLandlordRoomsList() {
    const list = document.getElementById('landlordRoomsList');
    if (!list) return;

    const landlordRooms = rooms.filter(r => r.landlordId === currentUserId);
    
    if (landlordRooms.length === 0) {
        list.innerHTML = '<p style="color: var(--forge-dark);">You haven\'t listed any rooms yet.</p>';
        return;
    }
    
    list.innerHTML = landlordRooms.map(room => `
        <div class="booking-item">
            <h4>${room.title}</h4>
            <p><strong>Type:</strong> ${room.type} | <strong>Price:</strong> R${room.price.toLocaleString()}</p>
            <p><strong>Bedrooms:</strong> ${room.bedrooms} | <strong>Bathrooms:</strong> ${room.bathrooms}</p>
            <p>${room.description}</p>
            <div style="margin-top: 10px;">
                <button class="btn btn-secondary" onclick="editRoom(${room.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteRoom(${room.id})" style="margin-left: 10px;">Delete</button>
            </div>
        </div>
    `).join('');
}

// Update Requests List
function updateRequestsList() {
    const list = document.getElementById('requestsList');
    if (!list) return;

    const landlordRooms = rooms.filter(r => r.landlordId === currentUserId);
    const roomIds = landlordRooms.map(r => r.id);
    const relevantBookings = bookings.filter(b => roomIds.includes(b.roomId));
    
    if (relevantBookings.length === 0) {
        list.innerHTML = '<p style="color: var(--forge-dark);">No booking requests yet.</p>';
        return;
    }
    
    list.innerHTML = relevantBookings.map(booking => `
        <div class="booking-item">
            <h4>${booking.roomTitle}</h4>
            <p><strong>Tenant:</strong> ${booking.name} (${booking.email})</p>
            <p><strong>Phone:</strong> ${booking.phone}</p>
            <p><strong>Dates:</strong> ${booking.checkin} to ${booking.checkout}</p>
            <p><strong>Notes:</strong> ${booking.notes || 'None'}</p>
            <span class="booking-status status-${booking.status}">${booking.status.toUpperCase()}</span>
            ${booking.status === 'pending' ? `
                <div style="margin-top: 10px;">
                    <button class="btn btn-success" onclick="approveBooking(${booking.id})">Approve</button>
                    <button class="btn btn-danger" onclick="rejectBooking(${booking.id})" style="margin-left: 10px;">Reject</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Update Analytics
function updateAnalytics() {
    const landlordRooms = rooms.filter(r => r.landlordId === currentUserId);
    const roomIds = landlordRooms.map(r => r.id);
    const pendingRequests = bookings.filter(b => roomIds.includes(b.roomId) && b.status === 'pending').length;
    const activeBookings = bookings.filter(b => roomIds.includes(b.roomId) && b.status === 'approved').length;
    const monthlyRevenue = landlordRooms.reduce((sum, room) => sum + room.price, 0);
    
    if (document.getElementById('totalListings')) {
        document.getElementById('totalListings').textContent = landlordRooms.length;
        document.getElementById('pendingRequests').textContent = pendingRequests;
        document.getElementById('activeBookings').textContent = activeBookings;
        document.getElementById('monthlyRevenue').textContent = monthlyRevenue.toLocaleString();
    }
}

// Update Users List
function updateUsersList() {
    const list = document.getElementById('usersList');
    if (!list) return;

    if (users.length === 0) {
        list.innerHTML = '<p style="color: var(--forge-dark);">No users registered.</p>';
        return;
    }

    list.innerHTML = users.map(user => `
        <div class="booking-item">
            <h4>${user.name}</h4>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Role:</strong> ${user.role}</p>
            <div style="margin-top: 10px;">
                <button class="btn btn-secondary" onclick="editUser(${user.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${user.id})" style="margin-left: 10px;">Delete</button>
            </div>
        </div>
    `).join('');
}

// Update All Rooms List
function updateAllRoomsList() {
    const list = document.getElementById('allRoomsList');
    if (!list) return;

    if (rooms.length === 0) {
        list.innerHTML = '<p style="color: var(--forge-dark);">No rooms listed.</p>';
        return;
    }

    list.innerHTML = rooms.map(room => `
        <div class="booking-item">
            <h4>${room.title}</h4>
            <p><strong>Type:</strong> ${room.type} | <strong>Price:</strong> R${room.price.toLocaleString()}</p>
            <p><strong>Bedrooms:</strong> ${room.bedrooms} | <strong>Bathrooms:</strong> ${room.bathrooms}</p>
            <p><strong>Landlord:</strong> ${users.find(u => u.id === room.landlordId)?.name || 'Unknown'}</p>
            <p>${room.description}</p>
            <div style="margin-top: 10px;">
                <button class="btn btn-secondary" onclick="editRoom(${room.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteRoom(${room.id})" style="margin-left: 10px;">Delete</button>
            </div>
        </div>
    `).join('');
}

// Update System Analytics
function updateSystemAnalytics() {
    const totalRevenue = bookings
        .filter(b => b.status === 'approved')
        .reduce((sum, b) => {
            const room = rooms.find(r => r.id === b.roomId);
            return sum + (room ? room.price : 0);
        }, 0);

    if (document.getElementById('totalUsers')) {
        document.getElementById('totalUsers').textContent = users.length;
        document.getElementById('totalRooms').textContent = rooms.length;
        document.getElementById('totalBookings').textContent = bookings.length;
        document.getElementById('totalRevenue').textContent = totalRevenue.toLocaleString();
    }
}

// Approve Booking
function approveBooking(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    booking.status = 'approved';
    
    notifications.push({
        id: notifications.length + 1,
        message: `Great news! Your booking for "${booking.roomTitle}" has been APPROVED! 🎉`,
        date: new Date().toLocaleString(),
        type: 'success',
        userId: booking.tenantId
    });
    
    saveData();
    updateRequestsList();
    showToast('Booking approved successfully!', 'success');
}

// Reject Booking
function rejectBooking(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    booking.status = 'rejected';
    
    notifications.push({
        id: notifications.length + 1,
        message: `Unfortunately, your booking for "${booking.roomTitle}" has been declined.`,
        date: new Date().toLocaleString(),
        type: 'error',
        userId: booking.tenantId
    });
    
    saveData();
    updateRequestsList();
    showToast('Booking rejected.', 'info');
}

// Add Room Form Handler
function handleAddRoomSubmit(e) {
    e.preventDefault();
    
    const newRoom = {
        id: rooms.length + 1,
        title: document.getElementById('newRoomTitle').value,
        type: document.getElementById('newRoomType').value,
        price: parseInt(document.getElementById('newRoomPrice').value),
        bedrooms: parseInt(document.getElementById('newRoomBedrooms').value),
        bathrooms: parseInt(document.getElementById('newRoomBathrooms').value),
        description: document.getElementById('newRoomDescription').value,
        image: document.getElementById('newRoomImage').value || '🏠',
        available: true,
        landlordId: currentUserId
    };
    
    rooms.push(newRoom);
    
    saveData();
    showToast('Room added successfully!', 'success');
    document.getElementById('addRoomForm').reset();
    updateLandlordRoomsList();
    updateAnalytics();
    updateAllRoomsList();
}

// Edit Room
function editRoom(roomId) {
    showToast('Edit functionality would be implemented here', 'info');
}

// Delete Room
function deleteRoom(roomId) {
    if (confirm('Are you sure you want to delete this room?')) {
        rooms = rooms.filter(r => r.id !== roomId);
        saveData();
        showToast('Room deleted successfully', 'success');
        updateLandlordRoomsList();
        updateAllRoomsList();
        updateAnalytics();
        updateSystemAnalytics();
        displayRooms(rooms);
    }
}

// Handle Profile Update
function handleProfileUpdate(e) {
    e.preventDefault();
    const user = users.find(u => u.id === currentUserId);
    user.name = document.getElementById('profileName').value;
    user.email = document.getElementById('profileEmail').value;
    user.phone = document.getElementById('profilePhone').value;
    
    saveData();
    showToast('Profile updated successfully!', 'success');
}

// Handle Add User Form Submission
function handleAddUserSubmit(e) {
    e.preventDefault();
    
    const newUser = {
        id: users.length + 1,
        name: document.getElementById('newUserName').value,
        email: document.getElementById('newUserEmail').value,
        phone: document.getElementById('newUserPhone').value,
        role: document.getElementById('newUserRole').value,
        password: document.getElementById('newUserPassword').value
    };
    
    users.push(newUser);
    
    saveData();
    showToast('User added successfully!', 'success');
    document.getElementById('addUserForm').reset();
    updateUsersList();
    updateSystemAnalytics();
}

// Edit User
function editUser(userId) {
    showToast('Edit user functionality would be implemented here', 'info');
}

// Delete User
function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        users = users.filter(u => u.id !== userId);
        bookings = bookings.filter(b => b.tenantId !== userId);
        rooms = rooms.filter(r => r.landlordId !== userId);
        notifications = notifications.filter(n => n.userId !== userId);
        
        saveData();
        showToast('User deleted successfully', 'success');
        updateUsersList();
        updateAllRoomsList();
        updateSystemAnalytics();
        updateLandlordRoomsList();
        updateBookingsList();
        updateNotificationsList();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (modal && event.target === modal) {
        closeBookingModal();
    }
}

// Setup Signup Form
function setupSignupForm() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupSubmit);
    }
}

// Handle Signup Submission
function handleSignupSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const role = document.getElementById('signupRole').value;
    const password = document.getElementById('signupPassword').value;

    // Check if email already exists
    if (users.some(u => u.email === email)) {
        showToast('Email already registered. Please use a different email.', 'error');
        return;
    }

    // Validate password length
    if (password.length < 8) {
        showToast('Password must be at least 8 characters long.', 'error');
        return;
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        phone,
        role,
        password
    };

    users.push(newUser);
    saveData();
    showToast('Account created successfully! Please log in.', 'success');
    document.getElementById('signupForm').reset();
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Remove the 'contacts' array from the top (no longer needed for storage)

// In saveData(), remove the contacts line (if present)

// Updated Setup Contact Form and Handler
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Handle Contact Form Submission - Send to WhatsApp
function handleContactSubmit(e) {
    e.preventDefault();
    
    // Validate form fields
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    if (!name || !email || !phone || !subject || !message) {
        showToast('Please fill in all fields.', 'error');
        return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    // WhatsApp support number (replace with your actual number, e.g., +27123456789)
    const whatsappNumber = '27123456789'; // International format without '+'
    
    // Construct the pre-filled message
    const whatsappMessage = `*Cosmo City Rentals Inquiry*\n\n` +
                           `*Name:* ${name}\n` +
                           `*Email:* ${email}\n` +
                           `*Phone:* ${phone}\n` +
                           `*Subject:* ${subject}\n\n` +
                           `*Message:*\n${message}\n\n` +
                           `---\n*Sent via Cosmo City Rentals Website*`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
    
    // Show success toast and reset form
    showToast('Opening WhatsApp... Your message is ready to send!', 'success');
    document.getElementById('contactForm').reset();
}