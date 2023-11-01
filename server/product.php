<?php
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");
  exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require_once('./config.php');

$data = json_decode(file_get_contents("php://input"));

try {
  $sql = "SELECT * FROM products WHERE url_key = ?;";
  $stmt = $conn->prepare($sql);

  $stmt->bind_param("s", $data->url_key);

  $stmt->execute();

  $result = $stmt->get_result();

  if ($result) {
    $row = $result->fetch_assoc();

    echo json_encode($row, JSON_HEX_TAG);
  } else {
    echo json_encode(false);
  }

  $result->close();

  $stmt->close();
} catch (Exception $e) {
  echo json_encode(false);

  error_log("Exception: " . $e->getMessage());
}

$conn->close();