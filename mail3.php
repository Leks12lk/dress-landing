<?php

$recepient = "optmanager.inna@gmail.com";
$sitename = "Женская одежда";
$formname = "3";


$phone = trim($_GET["phone3"]);
$email = trim($_GET["email3"]);

$pagetitle = "Новое сообщение с сайта \"$sitename\" Форма $formname";
$message = "Телефон: $phone \nEmail: $email";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

