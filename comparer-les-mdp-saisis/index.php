<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check Password</title>
</head>
<body>
    
<form>
        <fieldset>
            <legend>Register:</legend>
            <label for="login">Login: </label>
            <input type="text" name="login"><br>
            <label for="password">Password: </label>
            <input type="password" name="password" id="password"><br>
            <label for="check-password">Re-enter your password: </label>
            <input type="password" name="check-password" id="check-password">
            <span id="alert"></span><br>
            <span id="alertN"></span><br>
            <span id="alertNbr"></span><br>
            <input type="button" value="Send">
        </fieldset>
    </form>

    <script type="text/javascript" src="main.js"></script>

</body>
</html>