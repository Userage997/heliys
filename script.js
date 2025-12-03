// Функция для переключения между экранами
function showScreen1() {
    document.getElementById('screen1').classList.add('active');
    document.getElementById('screen2').classList.remove('active');
}

function showScreen2() {
    document.getElementById('screen2').classList.add('active');
    document.getElementById('screen1').classList.remove('active');
}

// Инициализация - показываем первый экран
document.addEventListener('DOMContentLoaded', function() {
    showScreen1();
});

// Добавляем анимации при наведении на кнопки
document.querySelectorAll('.btn, .profile-btn, .creator-btn, .back-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Плавное появление элементов при загрузке
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.title, .subtitle, .buttons, .profile-section');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Предзагрузка стилей для элементов
document.querySelectorAll('.title, .subtitle, .buttons, .profile-section').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});
