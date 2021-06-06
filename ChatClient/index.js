
const send = () => {
    const message = document.querySelector('.textInput').value;
    document.querySelector('.textInput').value = '';

    const msg = { u: getUserName(), m: message };

    fetch(server + "/send", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(msg)
    })
}

const get = () => {
    fetch(server + '/messages')
        .then(res => res.json())
        .then(messages => {
            const msgs = document.querySelector('.messages');
            msgs.innerHTML = '';

            for (msg of messages) {

                let classname = "message";
                if (msg.u == getUserName()) {
                    classname += ' myMessage';
                }

                msgs.innerHTML += `<div class="${classname}">${msg.u}:${msg.m}</div>`
            }

            msgs.scrollTop = msgs.scrollHeight;
        });
}


const getUserName = () => {
    return document.querySelector('#username').value;
}

const setRandomUser = () => {
    const number = Math.random();
    const username = 100000 + Math.floor(number * 10000);
    document.querySelector('#username').value = username;
}



setRandomUser();
setInterval(get, 1000);

const server = 'http://localhost:3000';
