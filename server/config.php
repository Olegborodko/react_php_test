<?php
require_once('./env.php');

$servername = getenv('DB_SERVER');
$username = getenv('DB_USER');
$password = getenv('DB_PASSWORD');
$dbname = getenv('DB_NAME');

try {
  $conn = new mysqli($servername, $username, $password, $dbname);
} catch (Exception $e) {
  die("Connection failed: " .  $e);
}