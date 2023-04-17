<?php


// Read the contents of the file into a string
$fileContents = file_get_contents('formdata.txt');

// Explode the file contents by newline character to get each JSON object as a separate string
$jsonStrings = explode(PHP_EOL, $fileContents);

// Remove any empty strings
$jsonStrings = array_filter($jsonStrings);

// Convert each JSON string to an array
$dataArray = array_map(function($jsonString) {
    return json_decode($jsonString, true);
}, $jsonStrings);


?>
 