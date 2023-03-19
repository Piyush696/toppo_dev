<?php
// IMPORT PHPMAILER CLASSES INTO THE GLOBAL NAMESPACE
// THESE MUST BE AT THE TOP OF YOUR SCRIPT, NOT INSIDE A FUNCTION
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// LOAD COMPOSER'S AUTOLOADER
require 'vendor/autoload.php';


// SEND MAIL USING SMTP
function sendMail($to,$subject,$body,$username)
{
    $mail = new PHPMailer(true);                             
    try 
    {       
       // SERVER SETTING                                
        $mail->isSMTP();                                     
        $mail->Host = 'mail.dstrainingdev.com';  
        $mail->SMTPAuth = true;                               
        $mail->Username = 'mail@dstrainingdev.com';                 
        $mail->Password = 'a1111111';                           
        $mail->SMTPSecure = 'ssl';                            
        $mail->Port = 465;                                    

        //Recipients
        $mail->setFrom('mail@dstrainingdev.com', 'dstrainingdev');
        $mail->addAddress($to,$username);   
        $mail->addReplyTo($to,$username); 
        $mail->isHTML(true);                    
        $mail->Subject = $subject;
        $mail->Body    = $body;                
        $mail->send();
        return 0;
    } 
    catch (Exception $e) 
    {
        return 1;       
    }
}

