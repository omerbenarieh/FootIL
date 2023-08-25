async function createPost(message) {
  let pageAccessToken =
    'EAAW8Q8umS84BOZB3xHuOZAti1e00ZAPQtgohQKQZCjHEx6nU5U0zF4KXw2Y6kVAuODAnQUUiJKxLtPqsK73Pc8Lz87shaFHZBtSCqp4542mdpzTykGtZAtHP8FqTZCmZB9uuuduDcls1Ro1nRk8cyZCgv6G2bioswpwMbKsKIdf4ZBtwRMUS3xt0VbTxLb3AvfPIQZD';
  const pageId = '105121199359878';

  $.ajax({
    url: `https://graph.facebook.com/v17.0/${pageId}/feed?access_token=${pageAccessToken}`,
    method: 'POST',
    data: {
      message: message,
    },
    success: function () {
      console.log('Post created successfully :)');
    },
    error: function (error) {
      alert('Error creating post' + error.responseText);
    },
  });
}

export { createPost };
