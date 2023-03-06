const editPostHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#editName').value.trim();
    const description = document.querySelector('#editDescription').value.trim();
    const realm = document.querySelector('#editRealm').value.trim();
    const Class = document.querySelector('#editClass').value.trim();
    const role = document.querySelector('#editRole').value.trim();
    const faction = document.querySelector('#editFaction').value.trim()
    const path = window.location.pathname;
    const id = path.split('/').pop(); // get the last part of the path

    console.log(name);

    if (name && description && Class && role && faction && realm) {
        const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
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

let editPost = document.querySelector('#editPost-form');
editPost.addEventListener('submit', editPostHandler);