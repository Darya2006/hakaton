document.addEventListener('DOMContentLoaded', function() {
    // Проверяем наличие элемента с id 'loginBtn'
    var loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
      // Если элемент существует, добавляем обработчик события
      loginBtn.addEventListener('click', function(event) {
        if (register()) {
          window.location.href = "./index2.html";
        } else {
          event.preventDefault();
        }
      });
    }
    
    function register() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      if (!isValidEmail(email)) {
        alert('Пожалуйста, введите корректный email.');
        return false;
      }
  
      if (password.trim() === "") {
        alert('Пожалуйста, введите пароль.');
        return false;
      }
  
      return true;
    }
  
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var registerBtn = document.getElementById('registerBtn');
  
    if (registerBtn) {
      registerBtn.addEventListener('click', function(event) {
        if (validateRegistrationForm()) {
          // Если валидация успешна, переходим на новую страницу
          window.location.href = "./index2.html";
        } else {
          // Останавливаем стандартное поведение ссылки, если валидация не пройдена
          event.preventDefault();
        }
      });
    }
  
    // Функция валидации формы регистрации
    function validateRegistrationForm() {
      var name = document.getElementById('nametwo').value;
      var surname = document.getElementById('surname').value;
      var email = document.getElementById('emailtwo').value;
      var password = document.getElementById('passwordtwo').value;
      var confirmPassword = document.getElementById('confirmPassword').value;
  
      console.log("Поля формы:");
      console.log("Имя:", name);
      console.log("Фамилия:", surname);
      console.log("Email:", email);
      console.log("Пароль:", password);
      console.log("Подтверждение пароля:", confirmPassword);
  
      // Проверяем все поля
      if (name.trim() === "" || surname.trim() === "") {
        alert("Пожалуйста, заполните имя и фамилию.");
        return false;
      }
  
      if (!isValidEmail(email)) {
        alert("Пожалуйста, введите корректный email.");
        return false;
      }
  
      if (password === "") {
        alert("Пожалуйста, введите пароль.");
        return false;
      }

      if (confirmPassword === "") {
        alert("Пожалуйста, подтвердите пароль.");
        return false;
      }
  
      if (password !== confirmPassword) {
        alert("Пароли не совпадают.");
        return false;
      }
      // Если всё ок
      return true;
    }
  
    // Проверка корректности email
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Проверка на корректность email
      console.log("Проверка email:", email, "Результат:", emailRegex.test(email)); // Отладочная информация
      return emailRegex.test(email);
    }
  });

document.getElementById('trigger').addEventListener('click', function() {
    const targetBlock = document.getElementById('target');
    targetBlock.classList.toggle('hidden'); // Добавляем или убираем класс hidden
});