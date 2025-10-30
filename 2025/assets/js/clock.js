function updateCountdown() {
    // Event date: December 2, 2025
    const eventDate = new Date('2025-12-02T00:00:00+07:00');
    const now = new Date();
    
    // Calculate time difference
    const diff = eventDate - now;
    
    // Convert to days, hours, minutes, seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update date display
    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.textContent = 'HIS 2025 Conference Starts In:';
    }
    
    // Update countdown elements with smooth transitions
    updateTimeSegment('days', days.toString().padStart(2, '0'));
    updateTimeSegment('hours', hours.toString().padStart(2, '0'));
    updateTimeSegment('minutes', minutes.toString().padStart(2, '0'));
    updateTimeSegment('seconds', seconds.toString().padStart(2, '0'));
}

function updateTimeSegment(id, newValue) {
    const element = document.getElementById(id);
    if (element && element.textContent !== newValue) {
        element.style.transform = 'translateY(-10px)';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }, 100);
    }
}

// Initialize the countdown
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Add transition styles dynamically
    const timeSegments = document.querySelectorAll('#days, #hours, #minutes, #seconds');
    timeSegments.forEach(segment => {
        segment.style.transition = 'transform 0.2s, opacity 0.2s';
    });
});