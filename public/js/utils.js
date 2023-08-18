class Utils {
  hideButtons(...buttons) {
    buttons.forEach(button => {
      $(`#${button}`).hide();
    });
  }

  displayButtons(...buttons) {
    buttons.forEach(button => {
      $(`#${button}`).show();
    });
  }

  displayForm(...forms) {
    forms.forEach(form => {
      $(`#${form}`).show();
    });
  }

  hideForm(...forms) {
    forms.forEach(form => {
      $(`#${form}`).hide();
    });
  }

  displayLoggedUser(msg) {
    this.hideForm('login-container');
    this.hideForm('signup-container');
    $('#cur-user').text(msg);
    this.displayForm('cur-user');
  }


  displayHomePage(userId) {//needs to complete //TODO

  }

  displaySearchItems(searchString) {//needs to complete //TODO

  }

  displayCardPage(userId) {//needs to complete//TODO

  }



  displayLoginError(msg) {
    alert(msg);
    this.clearFields('email', 'password');
  }

  displaySignupError(msg) {
    alert(msg);
    this.clearFields(
      'name',
      'new_password',
      'new_email',
      'confirmPassword',
      'image',
      'city',
      'street',
      'houseNumber',
      'floor',
      'apartment',
      'balance'
    );
  }

  clearFields(...fields) {
    fields.forEach(field => {
      $(`#${field}`).val('');
    });
  }
}

export default new Utils();
