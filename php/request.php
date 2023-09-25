<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем, были ли отправлены данные
    if (empty($_POST)) {
        echo 'Ошибка: Данные не были отправлены';
    } else {
        $name = $_POST['name'];
        $email = $_POST['email'];

        // Обрабатываем данные
        if ($name && $email && $textarea) {
            echo 'Спасибо за ваше сообщение!';
        } else {
            echo 'Ошибка: Пожалуйста, заполните все поля';
        }
    }
} else {
    echo 'Ошибка: Метод запроса не поддерживается';
}
