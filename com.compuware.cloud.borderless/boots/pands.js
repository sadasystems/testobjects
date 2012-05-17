function login(level)
{
	document.cookie="group=" + level
	alert("Welcome " + level + " club member!")
}

function getCookie ( cookie_name )
{
  var results = document.cookie.match ( cookie_name + '=(.*?)(;|$)' );

  if ( results )
    return ( unescape ( results[1] ) );
  else
    return null;
}

function deleteCookie()
{
	document.cookie = "group="
	alert("Thank you. You are now logged out.")
}

function showWelcome()
{
	var club = getCookie("group")

	if ((club != null) && (club.length>0)) {
		document.write ("<p>Welcome Peak and Shore " + club + " level club member")
		document.write("&nbsp;&nbsp;&nbsp;<a href='javascript:deleteCookie()'>Logout</a></p>")
	}
	else {
		document.write("<p>Welcome Peak and Shore guest")
		document.write("&nbsp;&nbsp;&nbsp; <a href='login.htm'>Member Login</a></p>")

	}
}

function dateStamp()
{
	document.write("Page being viewed at: " + Date())
}