<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
session_cache_limiter(FALSE); 

require_once("index.php");

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST)) 
{
	$dataObj =[];
	$dataObj["success"] = true;
	$output = [];

	$sentence_to_use = $_POST['sentence'];

	$sentence = new use_break_sentence($sentence_to_use, true);
	$numberOfWords = $sentence->use_method("words count", 0);
	$arrayOfWords = $sentence->use_method("word array", 0);
	$delimitedWords = $sentence->use_method("delimit words", false);
	$isValidWord = $sentence->use_method("validity", "dict_files");
	$partOfSpeech = $sentence->use_method("find pos", 0);
	$distinctWords = $sentence->use_method("group_words", true);


	$output["words"] = $arrayOfWords;
	$output["distinctWords"] = $distinctWords;
	$output["ValidWords"] = $isValidWord;
	$output["partsofspeech"] = $partOfSpeech;
	$output["wordcount"] = $numberOfWords;
	$output["delimitedwords"] = $delimitedWords;

	$dataObj["pos"] = $output;
	echo json_encode($dataObj);	
	exit();	
}

		
?>