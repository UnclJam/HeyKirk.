<?php
// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$date = $_POST['date'];
$time = $_POST['time'];
$service_type = $_POST['service_type'];
$service_description = $_POST['service_description'];

// Connect to the database
$host = "localhost";
$user = "username";
$password = "password";
$database = "database_name";
$conn = mysqli_connect($host, $user, $password, $database);

// Insert the data into the database
$sql = "INSERT INTO appointments (name, email, date, time, service_type, service_description) VALUES ('$name', '$email', '$date', '$time', '$service_type', '$service_description')";
$result = mysqli_query($conn, $sql);

// Close the database connection
mysqli_close($conn);

// Redirect the user to a confirmation page
header('Location: confirmation.php');
?>
