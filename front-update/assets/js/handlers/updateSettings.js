import { updateUserSettingsBody } from '../ajax/bodymaker.js';
const token = JSON.parse(localStorage.getItem('token'));
async function updateSettings() {
  const userID = JSON.parse(localStorage.getItem('user')).user._id;
  $.ajax({
    type: 'PATCH',
    url: `http://localhost:3000/api/users/${userID}`,
    data: updateUserSettingsBody(),
    ContentType: 'application/json',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    success: function ({ data }) {
      console.log(data);
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });
}

export { updateSettings };
