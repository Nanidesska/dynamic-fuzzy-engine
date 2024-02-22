<?php
$xml = new DomDocument("1.0", "UTF-8" );
$xml->FormatOutput = true;

$name = $_POST["name"];

if (file_exists('results.xml')) {
	$xml->load("results.xml");
	$root = $xml->getElementsByTagName("root")->item(0);
	
} else {
	$root = $xml->createElement("root");
	$root = $xml->appendChild($root);
}
$name = $xml->createElement("name");
$name = $root->appendChild($name);

$string_value = $xml->saveXML();
$xml->save("results.xml");