<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$nameProduct = $_POST['nameProduct'];

mail('<nik.nosov.99@bk.ru>', 'Тест почты', 'Имя.$name, Телефон.$tel, Emal.$email, Название товара.$nameProduct');
if (mail('nik.nosov.99@bk.ru', 'Тест почты', 'Имя.$name, Телефон.$tel, Emal.$email, Название товара.$nameProduct')) {
    echo 'сообщение успешно отправлено';
} else {
    echo 'при отправке сообщения возникли ошибки';
}
?>
