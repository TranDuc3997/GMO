<html lang="en">
	<head>
        <title>JS 2</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/styles.css">
    </head>
    <body>
        <div class="container">
            <form class="signup" role="form" method="post" action="login">
                <div class="row">
                    <label class="form__label" for="user"><b>Username:</b></label>
                    <input type="index" name="user" id="user">
                    <span id="check__user-js"></span>
                </div>
                <div class="row">
                    <label class="form__label" for="pass"><b>Password:</b></label>
                    <input type="index" name="pass" id="pass">
                    <span id="check__pass-js"></span>
                </div>
                <div class="row">
                    <label class="form__label" for="email"><b>Email:</b></label>
                    <input type="index" name="email" id="email">
                    <span id="check__email-js"></span>
                </div>
                <div class="row">
                    <label class="form__label" for="birthday"><b>Birthday: </b></label>
                    <input type="index" onclick="initCalendar()" id="value-js" name="birthday">
                    <span id="check__date-js"></span>
                </div>
                <div id="calendar"> </div>
                <div class="row --postision">
                    <input type="submit" value="SUBMIT">
                    <input type="button" value="REFRESH">
                </div>
            </form>
        </div>
        <script language="javascript" src="js/scripts.js"></script>
	</body>
</html>