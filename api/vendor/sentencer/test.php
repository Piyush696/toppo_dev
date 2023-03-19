<?php
require_once("index.php");
 //begin test
 $sentence_to_use = "test test test";
 $sentence = new use_break_sentence($sentence_to_use, true);
 $numberOfWords = $sentence->use_method("words count", 0);
 $arrayOfWords = $sentence->use_method("word array", 0);
 $delimitedWords = $sentence->use_method("delimit words", false);
 $isValidWord = $sentence->use_method("validity", "dict_files");
 $partOfSpeech = $sentence->use_method("find pos", 0);
 $distinctWords = $sentence->use_method("group_words", true);
 $ngram = $sentence->getNgram('Digestion', 3); //Added: 7/5/2015. A method for getting the n-gram component of a word
 echo "<center><h1>EXAMPLES (Sentence-Interpreter)</h1></center><br/>SUPPLIED SENTENCE: <h2>".$sentence_to_use."</h2><br/>";
 echo <<<_END
 	<table border="1">
 		<tr style = "background-color: #333; color: #fff">
 			<th>Number of Words</th>
 			<th>Array Words</th>
 			<th>Array of Distinct Words In Sentence</th>
 			<th>Array of Words + their Validity</th>
 			<th>Array of words + their part of speech</th>
 			<th>N-gram Components of the word: Digestion</th>
 		</tr>
 		<tr>
 			<th>$numberOfWords</th>
 			<th>
_END;
			print_r($arrayOfWords);
			echo "</th><th>";
			print_r($distinctWords);
			echo "</th><th>";
			print_r($isValidWord);
			echo "</th><th>";
			print_r($partOfSpeech);
			echo "</th><th>";
			print_r($ngram);
			echo "</th></tr></table>";
?>