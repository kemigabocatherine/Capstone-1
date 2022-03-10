// DYNAMIC LEADER BLOCK
const leadMembers = [
  {
    name: 'Mr Anton Ivanovitch',
    description: 'Director',
    about: 'He is incharge of overlooking activites in the institution ensuring the best environment for both the participants and the staff',
    image: 'images/leader4.jpg',
    line: '<hr>',
  },

  {
    name: 'Mrs Clarice Ivanovitch',
    description: 'Managing Director',
    about: 'She supervises and stirrs all activites in the institution ensuring maintenance of quality and growth.',
    image: 'images/leader.jpg',
    line: '<hr>',
  },

  {
    name: 'Mr Karugaba Nathan',
    description: 'Curriculum Specialist',
    about: 'He assists the teachers in creating and revising materials used in studying.',
    image: 'images/leader6.jpg',
    line: '<hr>',
  },

  {
    name: 'Eng.Claire Leighter',
    description: 'Dean of Admissions',
    about: 'She is responsible for overseeing the entire admissions process to ensure institution values are well reflected.',
    image: 'images/leader5.jpg',
    line: '<hr>',
  },
];

// Leader section
const leaderBlock = document.getElementById('leaders');

// Leader-heading
const leadHeading = document.createElement('h3');
leadHeading.setAttribute('class', 'leader-heading');
const node = document.createTextNode('Main Leaders');
leadHeading.appendChild(node);
leaderBlock.parentNode.insertBefore(leadHeading, leaderBlock);

leadMembers.forEach((member, index) => {
  const leadMember = document.createElement('div');
  leadMember.setAttribute('class', 'lead-member');

  leadMember.innerHTML = `
    <div>
      <div class="leader-block">
        <div>
          <img class="leader-image" src="${leadMembers[index].image}" alt="Mr Ivanovitch">
        </div>
        <div>
          <div class="info">
            <h5 class="leader-name">
              ${leadMembers[index].name}
            </h5>
            <p class="card-subtitle">${leadMembers[index].description}</p>
            <p class="duty">${leadMembers[index].about}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  leaderBlock.appendChild(leadMember);
});

// MENU BUTTON
/* Mobile-menu */
/* Home */
const menuIcon = document.querySelector('#menu-mobile');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenu = document.querySelector('#menu-exit');
const menuLinks = document.querySelectorAll('.menu-link');

function displayMenu() {
  mobileMenu.style.transform = 'translateX(0%)';
}

function exitMenu() {
  mobileMenu.style.transform = 'translateX(-100%)';
}

menuIcon.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', exitMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', exitMenu);
});