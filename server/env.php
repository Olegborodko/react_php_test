<?php
$envFilePath = __DIR__ . '/../.env';

if (file_exists($envFilePath)) {
  $lines = file($envFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

  foreach ($lines as $line) {
    if (strpos($line, '#') === 0) {
      continue;
    }

    list($name, $value) = explode('=', $line, 2);

    $name = trim($name);
    $value = trim($value);
    putenv("$name=$value");
  }
} else {
  putenv("");
}