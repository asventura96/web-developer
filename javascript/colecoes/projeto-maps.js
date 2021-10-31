function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('André', 'Admin');
usuarios.set('Rafael', 'Admin');
usuarios.set('Solange', 'User');
usuarios.set('Tania', 'User');
usuarios.set('Thor', 'Admin');
usuarios.set('Willian', 'User');
usuarios.set('José', 'User');

console.log(getAdmins(usuarios));