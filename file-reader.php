<?php

$array__data = $_POST;
$space = ' ';
$login = $array__data["login"];
$password = $array__data["password"];

// space is not use!
if (strpos($login, $space) !== false || strpos($password, $space) !== false) { 
    header('Location: registration.html');
} else {
    $fd = fopen("secret.txt", 'a+') or die("не удалось создать файл");
    $str = $login . " " . $array__data["e-mail"] . " " . $password . PHP_EOL;
    fwrite($fd, $str);
    fclose($fd);
    header('Location: login.html');   
}
?>