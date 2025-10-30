const components = {
    header: `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <a class="navbar-brand animate-brand" href="index.html">
                    <span class="brand-text">HIS</span>
                    <span class="year-text">2025</span>
                </a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-lg-center">
                        <li class="nav-item">
                            <a class="nav-link active animate-link" href="index.html">HOME</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle animate-link" href="pages/call.html" id="callDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CALL
                            </a>
                            <ul class="dropdown-menu animate slideIn" aria-labelledby="callDropdown">
                                <li><a class="dropdown-item" href="pages/call.html">Call for Papers</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle animate-link" href="pages/" id="orgDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ORGANIZATION
                            </a>
                            <ul class="dropdown-menu animate slideIn" aria-labelledby="orgDropdown">
                                <li><a class="dropdown-item" href="pages/organizing-committee.html">Organizing Committee</a></li>
                                <li><a class="dropdown-item" href="pages/program-committee.html">Program Committee</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle animate-link" href="pages/agenda.html" id="agendaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                AGENDA
                            </a>
                            <ul class="dropdown-menu animate slideIn" aria-labelledby="agendaDropdown">
                                <li><a class="dropdown-item" href="pages/conference-program.html">Conference Schedule</a></li>
                                <li><a class="dropdown-item" href="pages/keynotes.html">Keynote Speakers</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle animate-link" href="pages/participant.html" id="participantDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PARTICIPANT INFO
                            </a>
                            <ul class="dropdown-menu animate slideIn" aria-labelledby="participantDropdown">
                                <li><a class="dropdown-item" href="pages/conference-venue.html">Venue & Accommodation</a></li>
                                <li><a class="dropdown-item" href="pages/travel-information.html">Travel Information</a></li>
                                <li><a class="dropdown-item" href="pages/things-to-do.html">Sight seeing and Culture Tour</a></li>
                                <li><a class="dropdown-item" href="pages/hotel.html">Hotel Booking</a></li>
                            </ul>
                        </li>
                        <li class="nav-item ms-lg-3">
                            <a class="btn-registration" href="pages/registration.html">
                                <i class="fas fa-user-plus me-2"></i>REGISTRATION
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <style>
            .btn-registration {
                background: linear-gradient(135deg, #008251 0%, #00a566 100%);
                color: white !important;
                padding: 0.6rem 1.5rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 600;
                font-size: 0.9rem;
                display: inline-flex;
                align-items: center;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0, 130, 81, 0.3);
                white-space: nowrap;
            }
            
            .btn-registration:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 130, 81, 0.4);
                background: linear-gradient(135deg, #00a566 0%, #008251 100%);
                color: white !important;
            }
            
            .btn-registration i {
                font-size: 0.9rem;
                color: white;
            }
            
            @media (max-width: 991px) {
                .btn-registration {
                    margin-top: 1rem;
                    margin-bottom: 0.5rem;
                    justify-content: center;
                }
            }
        </style>
    `,
    hotelBookingModal: `
        <div class="modal fade" id="hotelBookingModal" tabindex="-1" aria-labelledby="hotelBookingModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0 justify-content-center">
                        <h5 class="modal-title text-success" id="hotelBookingModalLabel">
                            <i class="fas fa-hotel me-2"></i>Hotel Booking Information
                        </h5>
                    </div>
                    <div class="modal-body text-center py-4">
                        <div class="registration-info-icon mb-3">
                            <i class="fas fa-bed fa-3x "></i>
                        </div>
                        <h4 class="mb-3">Hotel Booking Coming Soon</h4>
                        <p class="mb-4">Our hotel booking service for HIS 2025 is currently being prepared. We are partnering with hotels near the conference venue to provide special rates for conference attendees.</p>
                        <p class="mb-4">Recommended hotels and booking options will be available here in the coming months.</p>
                        <p class="small text-muted mb-0">For urgent accommodation inquiries, please contact us at <a href="mailto:his2025@ideas-lab.org">his2025@ideas-lab.org</a></p>
                    </div>
                    <div class="modal-footer border-0 justify-content-center">
                        <button type="button" class="btn btn-success px-4" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    sidebar: `
       <div class="sidebar-box">
        <div class="time-display mb-4">
            <h2 class="time-heading">
                <i class="far fa-clock me-2"></i>Countdown to Conference
            </h2>
            <div class="date-display" id="date">HIS 2025 Conference Starts In:</div>
            <div class="digital-clock">
                <div class="time-segment">
                    <span id="days">00</span>
                    <span class="time-label">Days</span>
                </div>
                <span class="time-separator">:</span>
                <div class="time-segment">
                    <span id="hours">00</span>
                    <span class="time-label">Hours</span>
                </div>
                <span class="time-separator">:</span>
                <div class="time-segment">
                    <span id="minutes">00</span>
                    <span class="time-label">Minutes</span>
                </div>
                <span class="time-separator">:</span>
                <div class="time-segment">
                    <span id="seconds">00</span>
                    <span class="time-label">Seconds</span>
                </div>
            </div>
        </div>

            <div class="previous-conferences-box">
    <h2 class="conf-heading">
        <i class="fas fa-history me-2"></i>Previous Conferences
    </h2>
    <div class="conferences-container text-center">
        <ul class="conference-list list-unstyled" id="conferenceList">
        </ul>
    </div>
</div>
    `,

    footer: `
    <footer class="footer w-100">
           <div class="container-fluid">
               <div class="row mb-5">
                   <div class="col-12 text-center mb-4">
                       <h2 class="section-title text-center">Conference Organization</h2>
                       <div class="section-divider mx-auto mb-4"></div>
                   </div>
                   
                   <div class="col-md-6 mb-4">
                       <div class="organization-box">
                           <h3 class="organization-title">Organized by</h3>
                           <div class="organizer-logos">
                               <div class="organizer-logo-container">
                                   <img src="assets/images/ideaslab.png" alt="IDEAS LAB Logo" class="img-fluid">
                               </div>
                               <div class="organizer-logo-container" style="width: 180px; height: 120px;">
                                   <img src="assets/images/ukm.png" alt="Universitas Maranatha Logo" class="img-fluid" style="width: 180px !important; max-width: 100%;">
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div class="col-md-6 mb-4">
                       <div class="organization-box">
                           <h3 class="organization-title">Co-organized by</h3>
                           <div class="organizer-logos">
                               <div class="organizer-logo-container">
                                   <img src="assets/images/cologo.jpeg" alt="ITSB Logo" class="img-fluid">
                               </div>
                               <div class="organizer-logo-container">
                                   <img src="assets/images/cologo2.png" alt="Binus Logo" class="img-fluid">
                               </div>
                               <div class="organizer-logo-container">
                                   <img src="assets/images/cologo8.png" alt="Partner Logo" class="img-fluid">
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               
               <div class="row footer-info-section mx-0">
                   <div class="col-lg-4 mb-4">
                       <h3 class="footer-heading">About HIS 2025</h3>
                       <p class="footer-text">14th International Conference on Health Information Science (HIS 2025) provides a forum for disseminating and exchanging multidisciplinary research results in computer science/information technology and health science & services.</p>
                   </div>
                   
                   <div class="col-lg-4 mb-4">
                       <h3 class="footer-heading">Contact Us</h3>
                       <ul class="footer-contact-list">
                           <li>
                               <i class="fas fa-envelope"></i>
                               <a href="mailto:his2025@ideas-lab.org">his2025@ideas-lab.org</a>
                           </li>
                           <li>
                               <i class="fas fa-phone"></i>
                               <a href="tel:+62897940078">+62 897 9400 787</a>
                           </li>
                           <li>
                               <i class="fas fa-map-marker-alt"></i>
                               <span>Universitas Kristen Maranatha<br>Jl. Surya Sumantri No.65, Bandung,<br>West Java, Indonesia</span>
                           </li>
                       </ul>
                   </div>
                   
                   <div class="col-lg-4 mb-4">
                       <h3 class="footer-heading">Important Links</h3>
                       <ul class="footer-links">
                           <li><a href="index.html">Home</a></li>
                           <li><a href="pages/call.html">Call for Papers</a></li>
                           <li><a href="pages/organizing-committee.html">Organizing Committee</a></li>
                           <li><a href="pages/conference-program.html">Conference Schedule</a></li>
                           <li><a href="pages/conference-venue.html">Venue & Accommodation</a></li>
                           <li><a href="pages/registration.html">Registration</a></li>
                       </ul>
                   </div>
               </div>
           </div>
           
           <div class="footer-bottom w-100">
               <div class="container-fluid">
                   <div class="row">
                       <div class="col-md-6 ps-4">
                           <p>&copy; 2025 HIS Conference. All rights reserved.</p>
                       </div>
                       <div class="col-md-6 text-md-end pe-4">
                           <p>Co-located with <a href="https://icot2025.org" target="_blank">ICOT 2025</a></p>
                       </div>
                   </div>
               </div>
           </div>
       </footer>
   `
};

function loadComponent(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const isInPagesDirectory = window.location.pathname.includes('/pages/');
    let componentHtml = components[elementId];

    if (isInPagesDirectory) {
        componentHtml = componentHtml
            .replace(/href="index.html"/g, 'href="../index.html"')
            .replace(/href="pages\//g, 'href="')
            .replace(/src="assets\/images\//g, 'src="../assets/images/');
    } else {
        componentHtml = componentHtml
            .replace(/src="..\/assets\/images\//g, 'src="assets/images/');
    }

    element.innerHTML = componentHtml;

    if (elementId === 'header') {
        setTimeout(updateActiveNavLink, 100);
    }
    if (elementId === 'sidebar') {
        renderConferences();
    }
}

function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    navLinks.forEach(link => link.classList.remove('active'));
    dropdownItems.forEach(item => item.classList.remove('active'));

    dropdownItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath && currentPath.includes(itemPath.split('/').pop())) {
            item.classList.add('active');
            const parentDropdown = item.closest('.dropdown').querySelector('.nav-link');
            if (parentDropdown) parentDropdown.classList.add('active');
        }
    });

    if (currentPath === '/' || currentPath.endsWith('index.html')) {
        document.querySelector('a[href$="index.html"]')?.classList.add('active');
    }
}

async function renderConferences() {
    const conferenceList = document.getElementById('conferenceList');
    if (!conferenceList) return;

    try {
        const conferences = await window.dbOperations.getPreviousConferences();
        
        if (!conferences || conferences.length === 0) {
            conferenceList.innerHTML = '<li>No conference data available</li>';
            return;
        }

        conferenceList.innerHTML = conferences
            .map(conf => `
                <li>
                    <a href="${conf.url || '#'}" class="conf-link">
                        HIS ${conf.year}
                    </a> - ${conf.location}
                </li>
            `).join('');

    } catch (err) {
        console.error('Error:', err);
        conferenceList.innerHTML = '<li>Failed to load conference data</li>';
    }
}

let hotelModalInstance = null;

function initializeModals() {
    if (!document.getElementById('hotelBookingModal')) {
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = components.hotelBookingModal;
        document.body.appendChild(modalDiv);
    }

    document.querySelectorAll('a[href*="hotel-booking"], a[href*="Hotel Booking"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showModal('hotel');
        });
    });

    setupModalCleanup('hotelBookingModal');
}

function showModal(type) {
    const modalId = 'hotelBookingModal';
    const modalElement = document.getElementById(modalId);
    
    if (hotelModalInstance) {
        hotelModalInstance.dispose();
        hotelModalInstance = null;
    }

    const newModal = new bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: true
    });

    hotelModalInstance = newModal;
    newModal.show();
}

function setupModalCleanup(modalId) {
    const modalElement = document.getElementById(modalId);
    if (!modalElement) return;

    modalElement.addEventListener('hidden.bs.modal', function() {
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('padding-right');
        
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }

        if (modalId === 'hotelBookingModal' && hotelModalInstance) {
            hotelModalInstance.dispose();
            hotelModalInstance = null;
        }
    });

    const closeButton = modalElement.querySelector('.btn-success[data-bs-dismiss="modal"]');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const registerButtons = document.querySelectorAll('a[href="#register"]');
    registerButtons.forEach(button => {
        button.setAttribute('href', 'pages/registration.html');
    });
    
    ['header', 'footer', 'sidebar'].forEach(id => {
        loadComponent(id);
    });
    
    initializeModals();
});