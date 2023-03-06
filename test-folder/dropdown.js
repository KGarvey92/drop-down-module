function createDropdown(eventType = 'click', parentSelector='.dropdown-parent', childSelector='.dropdown-child') {
  const parents = document.querySelectorAll(parentSelector);

  parents.forEach((parent) => {
    const child = parent.querySelector(childSelector);

    // Add event listener to toggle dropdown
    if (eventType === 'click') {
      parent.addEventListener('click', () => {
        parent.classList.toggle('open');
      });
    } else if (eventType === 'hover') {
      parent.addEventListener('mouseover', () => {
        parent.classList.add('open');
      });

      parent.addEventListener('mouseout', () => {
        parent.classList.remove('open');
      });
    }
  });
}

export default createDropdown;
