document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

   
        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, completa ambos campos.');
            return;
        }

        console.log('Intento de inicio de sesión:');
        console.log('Usuario:', username);
        console.log('Contraseña:', '********'); 
        alert('¡Bienvenido a Cool Center! (Simulación de login exitoso)');
        
    });
});