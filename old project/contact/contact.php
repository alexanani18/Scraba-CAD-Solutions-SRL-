<?php
if(isset($_POST['submit'])){
    //Details from user
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    //Receiving person
    $mailTo = "contact@valiscraba.ro";
    //Info mail
    $website = "www.valiscraba.ro";
    $header = "Email de la ".$name;
    $text = "Ai primit un email de la ".$name."(".$mailFrom.") de pe site-ul ".$website."\n\n"."Mesaj:\n".$message;
    //Mail function
    if(mail($mailTo, $header, $text)){
      header("Location: https://valiscraba.ro/contact/contact.php");
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mesaj trimis cu succes.</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
  <style>
		@keyframes sent-animation {
			0% {transform: translateY(0);}
			25% {transform: translateY(-10px);}
			50% {transform: translateY(0);}
			75% {transform: translateY(-10px);}
			100% {transform: translateY(0);}
		}
		.sent-message {
			font-size: 24px;
			animation-name: sent-animation;
			animation-duration: 1s;
			animation-timing-function: ease-in-out;
			animation-iteration-count: 3;
		}
  </style>
</head>
<body>
  <div class="container-fluid mt-5 pt-5">
    <img src="https://public-assets.postmarkapp.com/guides/_376x148_crop_center-center_none/Speed-4x.png" alt="" class="img-fluid mx-auto d-block mb-5">
    <p class="sent-message d-flex justify-content-center mt-2">Mesajul a fost trimis cu succes.</p>
    <p class="sent-message d-flex justify-content-center">In cel mai scurt timp vei fi contactat de catre noi.</p>
    <p class="sent-message d-flex justify-content-center">Veti fi redirectionat pe pagina principala.</p>
  </div>
</body>
</html>
<script>
    setTimeout(function() {
        window.location.href = "https://valiscraba.ro/#section_4";
    }, 3000); // Redirect after 3 seconds
</script>