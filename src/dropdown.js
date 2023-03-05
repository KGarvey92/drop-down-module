import styles from './dropdown.css';

function createDropdown(parentSelector, childSelector, eventType = 'click') {
  const parents = document.querySelectorAll(parentSelector);

  parents.forEach((parent) => {
    const child = parent.querySelector(childSelector);

    // Add event listener to toggle dropdown
    if (eventType === 'click') {
      parent.addEventListener('click', () => {
        parent.classList.toggle(styles['open']);
      });
    } else if (eventType === 'hover') {
      parent.addEventListener('mouseover', () => {
        parent.classList.add(styles['open']);
      });

      parent.addEventListener('mouseout', () => {
        parent.classList.remove(styles['open']);
      });
    }
  });
}

export default createDropdown;
