<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $mail = new PHPMailer(true);

    try {
        // Configurare server DataHost
        $mail->isSMTP();
        $mail->Host = 'x';   // serverul SMTP DataHost
        $mail->SMTPAuth = true;
        $mail->Username = 'x'; // adresa creata in cPanel
        $mail->Password = 'x';      // parola adresei
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 'x';

        // Expeditor & Destinatar
        $mail->setFrom('x', 'x');
        $mail->addAddress('x'); // unde vrei sa primesti mesajele
        $mail->addReplyTo($data["email"], $data["name"]);

        // Continut mesajului
        $mail->isHTML(false);
        $mail->Subject = 'x';
        $mail->Body    =
            "Nume: {$data['name']}\n" .
            "Email: {$data['email']}\n" .
            "Telefon: {$data['phone']}\n\n" .
            "Mesaj:\n{$data['message']}";

        $mail->send();
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["error" => "Invalid request"]);
}
?>
