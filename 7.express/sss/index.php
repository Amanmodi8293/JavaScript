<?php
error_reporting(0);
if(isset($_POST['name'])){
$server="localhost";
$username="root";
$password ="";

$con = mysqli_connect($server, $username, $password);
if(!$con){
    die("connection to this database failed due to". mysqli_connect_error());
}
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$desc = $_POST['desc'];
$sql =" INSERT INTO `trip`.`trip` ( `name`, `age`, `gender`, `email`, `phone`, `other`, `date`) VALUES ( '$name', '$age', '$gender', '$email', '$phone', '$desc', current_timestamp());";
// echo $sql;

if($con->query($sql) == true){
    // echo "succesfully inserted";
    $insert = 1;
}
else{
    echo "ERROR: $sql <br> $con->error";
    $insert = 0;
}
$con->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To Travel Form</title>
    <link rel="stylesheet" href="style.css">
    <style>
        *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;

}
.container{
    max-width: 80%;
    padding: 34px;
    margin: auto;
}
.container h3{
    text-align: center;
    margin-bottom: 5px;
    font-size: 45px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.container p{
    text-align: center;
    margin-bottom: 5px;
    font-family:serif;
}
.paragraph{
    font-size: 25px;
}
input,textarea{
    width:80%;
    margin:2px auto;
    padding:4px;
    border: 2px solid black;
    border-radius: 5px;
    outline: none;

}
form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.btn{
   
        background-color:#62008e;
        color: white;
        border: 2px solid white;
        border-radius: 50px;
        padding: 6px 13px;
        margin-top: 5px;
        cursor: pointer;
}
.img{
    width:100%;
    position: absolute;
    z-index: -1;
    opacity: 0.8;
}
.p{
    color:  #00fffd;
    font-size: 18px;
}
    </style>
</head>
<body>
    <img class="img" src="10.jpg" alt="Eklavya University">
    <div class="container">
        <h3>Welcome to Eklavya University Trip Form</h3>
        <p class="paragraph">Enter your detail and submit this form to confirm your participation in the trip </p>
        <?php
        if($insert == 1){
            echo "<P class='p'>Thanks for submitting your form. We are happy to see you joining us for the Eklavya University trip</P>";
        }
        ?>
        <form action="index.php" method="post">
        <input type="text" name="name" id="name" placeholder="Enter your name">
        <input type="text" name="age" id="age" placeholder="Enter your age">
        <input type="text" name="gender" id="gender" placeholder="Enter your gender">
        <input type="email" name="email" id="email" placeholder="Enter your email">
        <input type="phone" name="phone" id="phone" placeholder="Enter your phone">
        <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Enter your description"></textarea>
        <button class="btn">Submit</button>
    </form>
</div>
    <script src="index.js"> 

    </script>
</body>
</html>