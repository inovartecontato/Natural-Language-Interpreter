# Natural-Language-Interpreter
Simple implementation of natural language interpreter in Javascript.


This is a simple JavaScript tool that allows for multiple types of user prompts to be "funneled in" to a single command.
You can set up multiple variations of the same phrases the user may try to type.

For instance let's say the user wants to play music:
They may type "play music" or "play a song" or "open the music app".
This script allows you to grab all of variations and understand them easily!


Usage:

All you have to do is edit the vocabulary.json and add new lists with the terms you want to filter.
The way it works is, if any of the terms on the list appear on the prompt they will be turned into the first entry on the list. Index [0].
Take this line for instance:
["show_alert!","show alert","display alert","display message","display popup"],

If any of these variations is found in the user prompt, they will be turned into "show_alert!"

You then just add the condition in the designated area of the main.js script.

if (command_.includes("show_alert!")){
		alert("like this?")
		return "there you go...";
	}

Don't forget to check for the FIRST term on your vocabulary list.

That's it.
