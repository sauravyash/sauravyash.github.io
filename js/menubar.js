var loggedin = "n";
if (loggedin == "n") {
  document.getElementById('feed').style.display = 'none';
  document.getElementById('notify').style.display = 'none';
}
if (loggedin == "y") {
  document.getElementById('feed').style.display = 'block';
  document.getElementById('notify').style.display = 'block';
  document.getElementById('login').style.display = 'none';
  document.getElementById('home').style.display = 'none';
}
