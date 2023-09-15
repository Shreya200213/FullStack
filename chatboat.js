function talk(){
    var know = {
    "What is your name??" : "My name is Robo ",
    "How are you" : " I am fine, Thank you :)",
    "How was your day??" : "The day was pretty good",
    "Which language do you speak??" : "I can speak in English ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }
