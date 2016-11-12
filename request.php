<?php

$xmldata = '<?xml version="1.0" encoding="UTF-8"?>
<entries>
    <dictionary>
        <name>definition</name>
        <txt>A statement of the exact meaning of a word, especially in a dictionary.</txt>
        <author>-John Lowe</author>
    </dictionary>
    <dictionary>
        <name>bar</name>
        <txt>A place that sells alcholic beverages</txt>
        <author>-John Culkin</author>
    </dictionary>
    <dictionary>
        <name>ajax</name>
        <txt>Technique which involves the use of javascript and xml (or JSON).</txt>
        <author>-Charlie Lowe</author>
    </dictionary>
    <dictionary>
        <name>html</name>
        <txt>The standard markup language for creating web pages and web applications.</txt>
        <author>-Charles Xavier</author>
    </dictionary>
    <dictionary>
        <name>css</name>
        <txt>A style sheet language used for describing the presentation of a document written in a markup language.</txt>
        <author>-Britney Sanders</author>
    </dictionary>
    <dictionary>
        <name>javascript</name>
        <txt>A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.</txt>
        <author>-Kim Smith</author>
    </dictionary>
    <dictionary>
        <name>php</name>
        <txt>A server-side scripting language, and a powerful tool for making dynamic and interactive websites.</txt>
        <author>-Louis Carl</author>
    </dictionary>
</entries>';
header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($xmldata);
echo $xmlOutput->asXML();
