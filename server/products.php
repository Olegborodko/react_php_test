<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");

// header('Content-Type: application/json');

require_once('./config.php');

try {
  $sql = "SELECT * FROM products";
  $stmt = $conn->prepare($sql);

  $stmt->execute();

  $result = $stmt->get_result();

  if ($result) {
    $products = array();
    while ($row = $result->fetch_assoc()) {
      $products[] = $row;
    }

    echo json_encode($products, JSON_HEX_TAG);
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