(() => {
  const skillSection = document.querySelector('.skill-section');
  const skillButton = document.querySelector('.skills-form__submit-button');
  const skillName = document.querySelector('.skills-form__input_name');
  const skillRange = document.querySelector('.skills-form__input_range');
  const skillTable = document.querySelector('.skill-table');

  // Listen to button click
  skillButton.addEventListener('click', () => {
    const rangeValue = Number(skillRange.value);
    const nameValueLength = skillName.value.length;

    if (nameValueLength > 0 && nameValueLength <= 100 && rangeValue > 0 && rangeValue <= 100) {
      // If data from input is valid - create new skill
      const item = document.createElement('div');
      item.textContent = skillName.value;
      item.classList.add('skill-table__item');
      item.style.width = rangeValue + '%';
      skillTable.appendChild(item);
    }
    else {
      // Handle invalid data
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'Error! Please, enter valid skill name and range.';
      errorMessage.classList.add('skill-table__error');
      skillSection.appendChild(errorMessage);
      setTimeout(() => {
        skillSection.removeChild(errorMessage);
      }, 2000);
    }

    skillName.value = '';
    skillRange.value = '';
  });
})();
