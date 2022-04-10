const id = document.querySelector('input[name="post-id"]').value.trim();

const editFormHandler = async function (event) {
    event.preventDefault();

   
    const description = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace(`/post/${id}`);
};

const deleteClickHandler = async function () {
    await fetch(`/api/post/${id}`, {
        method: 'DELETE'
    });

    document.location.replace('/dashboard');
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);