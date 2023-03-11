const createCharacterHandler = async (event) => {
    event.preventDefault();

    const characterName = document.querySelector('#charName-input').value.trim();
    // const description = document.querySelector('#postDescription-input').value.trim();
    const realm = document.querySelector('#charRealm').value.trim();
    const Class = document.querySelector('#charClass').value.trim();
    const role = document.querySelector('#charRole').value.trim();
    const faction = document.querySelector('#charFaction').value.trim()
    console.log(characterName, realm, role, faction);

    if (characterName && Class && role && faction && realm) {
        const response = await fetch('/api/character', {
            method: 'POST',
            body: JSON.stringify({ characterName, class: Class, role, faction, realm }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(response.status)
        if (response.ok) {
            document.location.reload();
        } else {
            alert('failed to create a new character')
        }
    }
};




let newChar = document.querySelector('#newChar-form');
newChar.addEventListener('submit', createCharacterHandler);