// Get the button and sidebar elements
const togglesidebtn = document.getElementById('togglesidebtn');
const sidebar = document.getElementById('show');

// Add click event listener to the button
togglesidebtn.addEventListener('click', function() {
    // Toggle the 'show-side' class on the sidebar
    sidebar.classList.toggle('show-side');
});