<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers
///////////////////////

use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

Dotenv::createImmutable(__DIR__)->load();
if (!$_ENV["dev"])
    Dotenv::createImmutable(__DIR__ . '/../../.environment_var/vassade/')->load();

$data = json_decode(file_get_contents('php://input'), JSON_OBJECT_AS_ARRAY);

$vorname = $data["vorname"];
$nachname = $data["nachname"];
$tel = $data["tel"];
$emailClient = $data["email"];
$gender = $data["gender"];
$plz = $data["plz"];
$city = $data["city"];
$msg = $data["msg"] ?? "";
$HtmlLineFeed = "";
if ($msg)
    $HtmlLineFeed = "<br/><br/><br/><br/>";
$questionsDataTabelle = $data["qestionsTable"] ?? "";

$response = ["msgSent" => true];
$mail = new PHPMailer(true);
$msg = nl2br($msg);
try {
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = $_ENV["smtpServer"];
    $mail->SMTPAuth = true;
    $hostMail = $_ENV["email"];
    $mail->Username = $hostMail;
    $mail->Password = $_ENV["pw"];
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->ContentType = 'text/html; charset=UTF-8';
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($hostMail, "$vorname $nachname");
    $mail->addReplyTo($emailClient);
    $mail->addAddress($hostMail);
    $mail->Subject = "Fassadendaemmung";
    $mail->isHTML(true);
    $mail->Body = "
    <html>
        <body>
            <div style='font-size: 15px'>
            $msg
            </div>
            $HtmlLineFeed
            $questionsDataTabelle
        </body>
    </html>";

    if (!$mail->send())
        throw new ErrorException("hal");

    header('Content-Type: application/json');
    echo json_encode($response);
} catch (Exception $e) {
    header('Content-Type: application/json');
    $response["msgSent"] = false;
    $response["errMsg"] = 'Message could not be sent. Error: ' . $e->getMessage();
    echo json_encode($response);
    error_log('Error sending email: ' . $e->getMessage());
}
?>


