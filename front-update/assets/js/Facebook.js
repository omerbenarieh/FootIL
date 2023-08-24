
function createPost(message) {
    let pageAccessToken='EAAW8Q8umS84BOZB3xHuOZAti1e00ZAPQtgohQKQZCjHEx6nU5U0zF4KXw2Y6kVAuODAnQUUiJKxLtPqsK73Pc8Lz87shaFHZBtSCqp4542mdpzTykGtZAtHP8FqTZCmZB9uuuduDcls1Ro1nRk8cyZCgv6G2bioswpwMbKsKIdf4ZBtwRMUS3xt0VbTxLb3AvfPIQZD';
    const pageId = '105121199359878';

    $.ajax({
        
        url: `https://graph.facebook.com/v17.0/${pageId}/feed?access_token=${pageAccessToken}`,
        method: 'POST',
        data: {
            message: message,
            // access_token: pageAccessToken
        },
        success: function(response) {
            console.log('Post created successfully', response);

        },
        error: function(error) {
            console.error('Error creating post:', error);
            console.log('Error creating post'+error.responseText);
        }
    });
        }


  

