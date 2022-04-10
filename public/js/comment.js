const commentFormHandler = async function (event) {
    event.preventDefault();

    const post_id = document.querySelector('input[name="post-id"]').value.trim();
    const body = document.querySelector('textarea[name="comment-body"]').value.trim();

    if (body) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete post');
      }
    }
  };

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);
document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);