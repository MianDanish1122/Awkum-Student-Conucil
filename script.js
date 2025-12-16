// ========================================
// AWKUM STUDENT COUNCIL - JAVASCRIPT
// ========================================

// ========================================
// DATA - Societies Information
// ========================================
const societies = [
    {
        id: 'bits-bytes',
        name: 'Bits and Bytes Society',
        category: 'Technology',
        icon: '💻',
        color: '#3b82f6',
        description: 'Empowering students with coding skills and algorithmic thinking.',
        vision: 'To create a campus culture where every student speaks the language of the future.',
        goals: ['Host monthly hackathons', 'Provide peer-to-peer coding mentorship', 'Collaborate with industry leaders'],
        structure: {
            president: 'Sarah Khan',
            vicePresident: 'Ali Ahmed',
            coordinator: 'Bilal Tech'
        },
        events: ['CodeFest 2025', 'React Workshop', 'AI Seminar']
    },
    {
        id: 'tech-innovations',
        name: 'Tech Innovations',
        category: 'Technology',
        icon: '⚡',
        color: '#6366f1',
        description: 'Bridging the gap between theoretical knowledge and practical hardware application.',
        vision: 'Innovating for a smarter, sustainable tomorrow through hardware and IoT.',
        goals: ['Develop smart campus solutions', 'Robotics exhibition', 'Drone racing league'],
        structure: {
            president: 'Omer Farooq',
            vicePresident: 'Ayesha Din',
            coordinator: 'Hamza Electron'
        },
        events: ['RoboWars', 'IoT Bootcamp', 'Science Fair']
    },
    {
        id: 'culture-society',
        name: 'Culture Society',
        category: 'Arts',
        icon: '🎵',
        color: '#ec4899',
        description: 'Celebrating the diverse heritage and artistic talents of our student body.',
        vision: 'Unity through diversity, expression through art.',
        goals: ['Preserve local heritage', 'Promote inter-provincial harmony', 'Showcase talent'],
        structure: {
            president: 'Fatima Gul',
            vicePresident: 'Raza Shah',
            coordinator: 'Sana Art'
        },
        events: ['Cultural Night', 'Music Gala', 'Art Exhibition']
    },
    {
        id: 'peace-society',
        name: 'Peace Society',
        category: 'Social',
        icon: '❤️',
        color: '#10b981',
        description: 'Promoting tolerance, dialogue, and conflict resolution on campus.',
        vision: 'A campus free of conflict, full of understanding.',
        goals: ['Conflict resolution workshops', 'Interfaith dialogue', 'Charity drives'],
        structure: {
            president: 'Zain Malik',
            vicePresident: 'Hira Mani',
            coordinator: 'Peace Keeper'
        },
        events: ['Peace Walk', 'Debate on Tolerance', 'Blood Drive']
    },
    {
        id: 'debate-society',
        name: 'Debating Club',
        category: 'Academic',
        icon: '💬',
        color: '#f97316',
        description: 'Sharpening rhetoric and critical thinking skills.',
        vision: 'Voices that matter, arguments that convince.',
        goals: ['National debate championships', 'Public speaking training'],
        structure: {
            president: 'Kamran Akmal',
            vicePresident: 'Sadia Bee',
            coordinator: 'Talk Master'
        },
        events: ['Annual Declamation', 'Parliamentary Debate']
    },
    {
        id: 'entrepreneur-society',
        name: 'Young Entrepreneurs',
        category: 'Business',
        icon: '💼',
        color: '#059669',
        description: 'Fostering the next generation of business leaders and startups.',
        vision: 'From dorm room to board room.',
        goals: ['Startup incubator', 'Business plan competition'],
        structure: {
            president: 'Usman Ghani',
            vicePresident: 'Zara Biz',
            coordinator: 'Money Maker'
        },
        events: ['Shark Tank Awkum', 'Freelancing 101']
    }
];

// ========================================
// DATA - Members Information
// ========================================
const members = [
    { id: 1, name: 'Sarah Khan', role: 'President', society: 'Bits and Bytes', initials: 'SK' },
    { id: 2, name: 'Ali Ahmed', role: 'Vice President', society: 'Bits and Bytes', initials: 'AA' },
    { id: 3, name: 'Omer Farooq', role: 'President', society: 'Tech Innovations', initials: 'OF' },
    { id: 4, name: 'Fatima Gul', role: 'President', society: 'Culture Society', initials: 'FG' },
    { id: 5, name: 'Zain Malik', role: 'President', society: 'Peace Society', initials: 'ZM' },
    { id: 6, name: 'Usman Ghani', role: 'President', society: 'Young Entrepreneurs', initials: 'UG' },
];

// ========================================
// NAVIGATION FUNCTIONS
// ========================================

/**
 * Shows the selected view and hides all others
 * @param {string} viewName - The name of the view to show (home, societies, join, members, complaints)
 */
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view-content, .detail-view').forEach(view => {
        view.classList.add('hidden');
        view.classList.remove('active');
    });

    // Show selected view
    const viewElement = document.getElementById(`${viewName}-view`);
    if (viewElement) {
        viewElement.classList.remove('hidden');
        viewElement.classList.add('fade-in');
        
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Find and activate the correct nav item
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.textContent.toLowerCase() === viewName) {
                item.classList.add('active');
            }
        });
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu if open
    document.getElementById('navMenu').classList.remove('active');
}

/**
 * Toggles the mobile navigation menu
 */
function toggleMobileMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// ========================================
// SOCIETY CARD FUNCTIONS
// ========================================

/**
 * Creates HTML for a society card
 * @param {Object} society - Society object with all details
 * @returns {string} HTML string for the card
 */
function createSocietyCard(society) {
    return `
        <div class="society-card" onclick="showSocietyDetail('${society.id}')">
            <div class="card-accent" style="background: ${society.color}"></div>
            <div class="card-content">
                <div class="card-header">
                    <div class="card-icon" style="background: ${society.color}20; color: ${society.color}">
                        ${society.icon}
                    </div>
                    <span class="card-badge">${society.category}</span>
                </div>
                <h3 class="card-title">${society.name}</h3>
                <p class="card-description">${society.description}</p>
                <div class="card-footer">
                    View Details →
                </div>
            </div>
        </div>
    `;
}

// ========================================
// SOCIETY DETAIL VIEW
// ========================================

/**
 * Shows the detailed view of a selected society
 * @param {string} societyId - ID of the society to display
 */
function showSocietyDetail(societyId) {
    const society = societies.find(s => s.id === societyId);
    if (!society) return;

    const detailView = document.getElementById('detail-view');
    detailView.innerHTML = `
        <div class="detail-hero" style="background: linear-gradient(135deg, ${society.color} 0%, ${society.color}dd 100%);">
            <div class="detail-hero-content">
                <button class="back-button" onclick="showView('societies')">← Back to Directory</button>
                <div class="detail-title-section">
                    <div class="detail-icon">${society.icon}</div>
                    <div class="detail-title">
                        <h1>${society.name}</h1>
                        <p style="font-size: 1.25rem; opacity: 0.9;">${society.category}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-body">
            <div class="detail-grid">
                <div style="display: flex; flex-direction: column; gap: 2rem;">
                    <div class="detail-card">
                        <h2>🌍 Vision & Mission</h2>
                        <p style="color: #64748b; font-size: 1.125rem; line-height: 1.8;">${society.description}</p>
                        <div class="vision-box">
                            <h3>Vision</h3>
                            <p>"${society.vision}"</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <h2>📅 Programs & Events</h2>
                        <div class="events-list">
                            ${society.events.map(event => `
                                <div class="event-item">
                                    <span style="font-weight: 600;">${event}</span>
                                    <span class="event-badge">Upcoming</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2rem;">
                    <div class="detail-card">
                        <h2>👥 Leadership</h2>
                        <div class="leadership-list">
                            <div class="leader-item">
                                <div class="leader-avatar">P</div>
                                <div class="leader-info">
                                    <h4>${society.structure.president}</h4>
                                    <p>President</p>
                                </div>
                            </div>
                            <div class="leader-item">
                                <div class="leader-avatar">VP</div>
                                <div class="leader-info">
                                    <h4>${society.structure.vicePresident}</h4>
                                    <p>Vice President</p>
                                </div>
                            </div>
                            <div class="leader-item">
                                <div class="leader-avatar">C</div>
                                <div class="leader-info">
                                    <h4>${society.structure.coordinator}</h4>
                                    <p>Coordinator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-card cta-card">
                        <h3>Join ${society.name}</h3>
                        <p>Become a member today and start your journey of leadership and growth.</p>
                        <button class="btn btn-white" style="width: 100%;" onclick="showView('join')">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Hide all other views and show detail view
    document.querySelectorAll('.view-content').forEach(view => {
        view.classList.add('hidden');
    });
    detailView.classList.add('active');
    window.scrollTo(0, 0);
}

// ========================================
// SEARCH/FILTER FUNCTION
// ========================================

/**
 * Filters societies based on search input
 */
function filterSocieties() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = societies.filter(society => 
        society.name.toLowerCase().includes(searchTerm) ||
        society.category.toLowerCase().includes(searchTerm) ||
        society.description.toLowerCase().includes(searchTerm)
    );
    
    const container = document.getElementById('allSocieties');
    container.innerHTML = filtered.map(society => createSocietyCard(society)).join('');
}

// ========================================
// FORM RENDERING FUNCTIONS
// ========================================

/**
 * Renders the membership application form
 */
function renderJoinForm() {
    const container = document.getElementById('joinFormContainer');
    container.innerHTML = `
        <div class="form-card">
            <form id="joinForm" onsubmit="submitJoinForm(event)">
                <div class="form-body">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" required placeholder="John Doe">
                        </div>
                        <div class="form-group">
                            <label>Registration Number</label>
                            <input type="text" required placeholder="2022-CS-101">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Department</label>
                        <select>
                            <option>Computer Science</option>
                            <option>Engineering</option>
                            <option>Business Administration</option>
                            <option>Arts & Humanities</option>
                            <option>Natural Sciences</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Select Society</label>
                        <select>
                            ${societies.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Why do you want to join?</label>
                        <textarea rows="4" placeholder="Tell us about your interests and what you hope to achieve..."></textarea>
                    </div>
                </div>
                <div class="form-footer">
                    <button type="submit" class="btn btn-primary">📨 Submit Application</button>
                </div>
            </form>
        </div>
    `;
}

/**
 * Handles the submission of the join form
 * @param {Event} event - Form submit event
 */
function submitJoinForm(event) {
    event.preventDefault();
    const container = document.getElementById('joinFormContainer');
    container.innerHTML = `
        <div class="success-message fade-in">
            <div class="success-icon">✓</div>
            <h3>Application Submitted!</h3>
            <p>Your application has been received. The society president will review it shortly.</p>
            <button class="btn btn-primary" onclick="renderJoinForm()">Submit another application</button>
        </div>
    `;
}

/**
 * Renders the complaints submission form
 */
function renderComplaintsForm() {
    const container = document.getElementById('complaintsFormContainer');
    container.innerHTML = `
        <div class="form-card">
            <form id="complaintsForm" onsubmit="submitComplaint(event)">
                <div class="form-body">
                    <div class="form-group">
                        <label>Topic</label>
                        <select>
                            <option>Society Activity Issue</option>
                            <option>Administrative Complaint</option>
                            <option>Suggestion for Improvement</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Subject</label>
                        <input type="text" required placeholder="Brief summary of the issue">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea required rows="5" placeholder="Please provide detailed information..."></textarea>
                    </div>
                    <div class="form-group">
                        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                            <input type="checkbox" style="width: auto;">
                            <span style="font-weight: normal;">Submit anonymously</span>
                        </label>
                    </div>
                </div>
                <div class="form-footer">
                    <button type="submit" class="btn" style="background: #1e293b; color: white; width: 100%;">Submit Complaint</button>
                </div>
            </form>
        </div>
    `;
}

/**
 * Handles the submission of the complaints form
 * @param {Event} event - Form submit event
 */
function submitComplaint(event) {
    event.preventDefault();
    const container = document.getElementById('complaintsFormContainer');
    container.innerHTML = `
        <div class="success-message fade-in">
            <div class="success-icon">💬</div>
            <h3>Feedback Received</h3>
            <p>Thank you for helping us improve.</p>
            <button class="btn btn-primary" onclick="renderComplaintsForm()">Submit another</button>
        </div>
    `;
}

// ========================================
// MEMBERS DIRECTORY
// ========================================

/**
 * Renders the members directory grid
 */
function renderMembers() {
    const container = document.getElementById('membersGrid');
    container.innerHTML = members.map(member => `
        <div class="member-card">
            <div class="member-avatar"></div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <div class="member-role">${member.role}</div>
                <div class="member-society">${member.society}</div>
            </div>
        </div>
    `).join('');
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize the website when the page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render featured societies on home page
    const featuredContainer = document.getElementById('featuredSocieties');
    featuredContainer.innerHTML = societies.slice(0, 3).map(society => createSocietyCard(society)).join('');

    // Render all societies
    const allSocietiesContainer = document.getElementById('allSocieties');
    allSocietiesContainer.innerHTML = societies.map(society => createSocietyCard(society)).join('');

    // Render forms
    renderJoinForm();
    renderComplaintsForm();

    // Render members
    renderMembers();

    // Set up navigation event listeners
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});