function showMessage() {
    const message = document.createElement('div');
    message.textContent = "Thank you for your interest! Contact me at yourmail@gmail.com";
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #667eea;
        color: white;
        padding: 20px 30px;
        border-radius: 8px;
        z-index: 9999;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 3000);
}
