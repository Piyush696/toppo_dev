<?php
	/*
	** SET THE USER COOKIE TO REMEMBER THE CURRENT USER IF HE CHOOSES TO. 
	** NEEDS USEREMAIL AND CONNECTION OBJECT
	*/
	function set_user_cookie($useremail, $conn)
	{
		$selector = base64_encode( bin2hex(openssl_random_pseudo_bytes(9)));
	    $authenticator = bin2hex(openssl_random_pseudo_bytes(33));
	    $token = password_hash($authenticator, PASSWORD_BCRYPT);
	    $expiry = date('Y-m-d\TH:i:s', time() + 31536000);

	    setcookie
	    (
	        'remember',
	         $selector.':'.base64_encode($authenticator),
	         time() + 31536000,
	          "/"
	    );

	    // INSERT THE TOKEN IN THE DATABASE WHICH WILL BE USED TO VERIFY THE USER LATER
	    $sql="INSERT INTO authtoken (selector, token, useremail, expires) VALUES ('$selector','$token', '$useremail', '$expiry')";

		// IF ANY ERROR, SHOW MESSAGE
		if(!$result = $conn->query($sql))
		{
		    die('There was an error running the query [' . $conn->error . ']');
		}
		
	}

	/*
	** RETRIEVES USER COOKIE THAT WAS SET.
	*/
	function get_user_cookie($conn)
	{
		if(isset($_COOKIE['remember'])) 
		{	
			$cookie_info = explode(':', mysqli_real_escape_string($conn, $_COOKIE['remember']));

		    // RETRIEVE TOKEN TO VALIDATE USER COOKIE
			$sql = "SELECT * FROM authtoken WHERE selector = '$cookie_info[0]'";
			$result = mysqli_query($conn,$sql);
			$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
			mysqli_free_result($result);
			$hash = base64_decode($cookie_info[1]);
			if(password_verify($hash, $row['token'])) 
			{
				return $row['useremail'];	       
			}
		}
		return "";
	}

	/*
	** REMOVE THE USER COOKIE. THE USER DID NOT WANT TO BE REMEMBERED
	*/
	function remove_user_cookie() 
	{
		//DELETE THE COOKIE IF USER DOESNT WANT TO REMEMBER
		if(isset($_COOKIE['remember'])) 
		{
			$past = time() - 100;
			setcookie(remember, gone, $past, "/");
		}
	}
?>