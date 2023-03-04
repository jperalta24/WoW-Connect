const createPostHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#postName-input').value.trim();
    const description = document.querySelector('#postDescription-input').value.trim();
    const realm = document.querySelector('#realmSelect').value.trim();
    const Class = document.querySelector('#classSelect').value.trim();
    const role = document.querySelector('#roleSelect').value.trim();
    const faction = document.querySelector('#factionSelect').value.trim()
    console.log(name);

    if (name && description && Class && role && faction && realm) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ name, description, class: Class, role, faction, realm }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(response.status)
        if (response.ok) {
            document.location.reload();
        } else {
            alert('failed to create a new post')
        }
    }
};

var newPost = document.querySelector('#newPost-form');
newPost.addEventListener('submit', createPostHandler);
