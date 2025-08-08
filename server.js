const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Under Maintenance</title>
    <style>
        body {
            background-color: #c8d6e5;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
        }
        .box {
            background-color: white;
            padding: 30px;
            border-radius: 15px;
            width: 60%;
            margin: auto;
            box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
        }
        h1 {
            color: red;
            font-size: 2em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>Server Under Maintenance</h1>
        <p>We are currently performing scheduled maintenance.<br>
        Please check back later. Thank you for your patience!</p>
    </div>
</body>
</html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
