
document.getElementById('send-user1').addEventListener('click', function() {
    const message = document.getElementById('msguser1').value.trim(); 
    if (message !== "") {
        const chatBox = document.getElementById('chatBox');
        const newMessage = document.createElement('div'); 
        newMessage.classList.add('msguser1');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        document.getElementById('msguser1').value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});


document.getElementById('send-user2').addEventListener('click', function() {
    const message = document.getElementById('msguser2').value.trim(); 
    if (message !== "") {
        const chatBox = document.getElementById('chatBox');
        const newMessage = document.createElement('div'); 
        newMessage.classList.add('msguser2');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        document.getElementById('msguser2').value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
