const dropdown = document.querySelector('.dropdown');

const toggleDropdown = () => {
  dropdown.classList.toggle('active');
};

const closeDropdownOnClickOutside = (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
};

const handleKeyboardAccessibility = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault(); // Prevent scrolling when space is pressed
    toggleDropdown();
  }
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Add ARIA attributes
dropdown.setAttribute('role', 'button');
dropdown.setAttribute('aria-expanded', 'false');

dropdown.addEventListener('click', debounce(toggleDropdown, 300));
document.addEventListener('click', debounce(closeDropdownOnClickOutside, 300));
dropdown.addEventListener('keydown', handleKeyboardAccessibility);
dropdown.addEventListener('click', () => {
  const isExpanded = dropdown.classList.contains('active');
  dropdown.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
});


