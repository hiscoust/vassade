<?php

use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

Dotenv::createImmutable(__DIR__)->load();
if (!$_ENV["dev"])
    Dotenv::createImmutable(__DIR__ . '/../../private/dsw/')->load();

$data = json_decode(file_get_contents('php://input'), JSON_OBJECT_AS_ARRAY);

$vorname = $data["vorname"];
$nachname = $data["nachname"];
$tel = $data["tel"];
$email = $data["email"];
$gender = $data["gender"];
$plz = $data["plz"];
$city = $data["city"];
$msg = $data["msg"];

$response = ["msgSent" => true];
$mail = new PHPMailer(true);

try {
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = $_ENV["smtpServer"];
    $mail->SMTPAuth = true;
    $hostMail = $_ENV["email"];
    $mail->Username = $hostMail;
    $mail->Password = $_ENV["pw"];
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->ContentType = 'text/html; charset=UTF-8';
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($hostMail, "$vorname $nachname");
    $mail->addReplyTo($email);
    $mail->addAddress($hostMail);
    $mail->Subject = "Neue Anfrage für $leistung";
    $mail->isHTML(true);
    $mail->Body = $msg;
    

    if (!$mail->send())
        throw new ErrorException;

    header('Content-Type: application/json');
    echo json_encode($response);
} catch (Exception $e) {
    $response["msgSent"] = false;
    $response["errMsg"] = '<p>Message could not be sent. Error: ' . $mail->ErrorInfo . '</p>';
    echo json_encode($response);
}
?>