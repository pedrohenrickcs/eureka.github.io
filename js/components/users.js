'use-strict';

const handleProfileUser = require('../controllers/profile');
const handleActivities = require('../controllers/activitiesUser');
const loadPage = require('../modules/load');

const renderTemplateUsers = (data) => {
  const $allUsers = $('#name .js-users');

  data.map((item, index) => {
    const {
      image,
      name,
      id,
      balance
    } = item;

    const svg = '<svg class="users__image-item" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><defs><style>.cls-1{fill:#b3b3b3;fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><title>no-profile-picture</title><polygon class="cls-1" points="0 0 122.88 0 122.88 122.88 0 122.88 0 0 0 0"/><path class="cls-2" d="M48.64,77.72c.65-1.48,1.24-3.1,1.61-4.19a52.43,52.43,0,0,1-4.22-6L41.76,60.7a12.55,12.55,0,0,1-2.43-6.21,4.94,4.94,0,0,1,.43-2.23,4.1,4.1,0,0,1,1.47-1.71,4.73,4.73,0,0,1,1-.52,107.7,107.7,0,0,1-.2-12.23A16.87,16.87,0,0,1,42.58,35a16.39,16.39,0,0,1,7.22-9.2,22.79,22.79,0,0,1,6.05-2.69c1.37-.39-1.15-4.72.25-4.87,6.79-.7,17.77,5.5,22.51,10.62A16.63,16.63,0,0,1,82.8,39.37l-.27,11.1h0a3.06,3.06,0,0,1,2.25,2.32c.35,1.36,0,3.25-1.18,5.84h0a.37.37,0,0,1-.07.14l-4.87,8a41.6,41.6,0,0,1-6,8.24c.23.32.45.63.66.94,8.25,12.11,19.38,5.88,32.32,15.36l-.38.51v12.82H17.22V91.47h.24a1.14,1.14,0,0,1,.56-.61C26.4,86,45.72,84.35,48.64,77.72Z"/></svg>'
    const imageSrc = `<img class="users__image-item" src="${image}" />`
    const validImage = image ? imageSrc : svg;

    const renderUsers = `
            <li class="users__info js-name" data-id=${id}>
              <span class="users__pos">${index + 1}</span>
              <span class="users__image">
                ${validImage}
                <span class="users__name">${name}</span>
              </span>
              <span class="users__points">${balance.points}</span>
            </li>
          `

    $allUsers.append(renderUsers);
  })
};

const clickUser = (token) => {
  $('#name .js-name').on('click', function () {
    const idUser = $(this).data('id');

    loadPage();

    $('#profile, #activities').show();

    handleProfileUser(idUser, token);
    handleActivities(idUser, token);
  });
};

module.exports = {
  renderTemplateUsers,
  clickUser
};
