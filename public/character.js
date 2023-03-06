const createCharacterHandler = async (event) => {
    event.preventDefault();

    const characterName = document.querySelector('#postName-input').value.trim();
    const description = document.querySelector('#postDescription-input').value.trim();
    const realm = document.querySelector('#realmSelect').value.trim();
    const Class = document.querySelector('#classSelect').value.trim();
    const role = document.querySelector('#roleSelect').value.trim();
    const faction = document.querySelector('#factionSelect').value.trim()
    console.log(characterName);

    if (characterName && description && Class && role && faction && realm) {
        const response = await fetch('/api/character', {
            method: 'POST',
            body: JSON.stringify({ characterName, description, class: Class, role, faction, realm }),
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




let newChar = document.querySelector('#newPost-form');
newChar.addEventListener('submit', createCharacterHandler);