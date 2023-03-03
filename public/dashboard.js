const createPostHandler = async (event) => {
    event.preventDefault();

    // const postName = document.querySelector('#post-name').value.trim();
    // const postDescription = document.querySelector('#post-desc').value.trim();
    const postRealm = document.querySelector('#realmSelect').value.trim();
    const postClass = document.querySelector('#classSelect').value.trim();
    const postRole = document.querySelector('#roleSelect').value.trim();
    console.log(postRealm, postClass, postRole);
};

var realForm = document.querySelector('#realmForm')
realmForm.addEventListener('submit', createPostHandler);
