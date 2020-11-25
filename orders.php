<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Confirmation</title>
    <link href="hw.css">
    <style type="text/css">
        *{
            color: #000000;
            text-align: center;
            font-family: sans-serif;
            font-weight: 100;
            margin: 0 auto;
        }
        header{
            line-height: 10vh;
            color: #FFFFFF;
            background: #55C4CB;
        }
        h1{
            color: #FFFFFF;
        }
        @media screen and (max-width: 720px) {
            * { font-size: 115%; }
        }
    </style>
    <script src="https://kit.fontawesome.com/bcf8df71a0.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script>
        $(document).ready(function() {
            // jQuery function
        });
    </script>
</head>
<body>
    <header>
        <h1>Thank you, <?php echo $_POST["name"]; ?> <i class="fas fa-cookie-bite" style="color:#FFF;"></i></h1>
    </header><br><br>
    <p>Your order has been received.</p>
    <!-- <p> <?php echo $_POST["meat"]; ?> on <?php echo $_POST["bread"]; ?> with <?php echo $_POST["chs"]; ?></p> -->
</body>
</html>