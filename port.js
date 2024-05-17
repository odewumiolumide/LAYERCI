//CHANGE NAVBAR STYLE ON SCROLL//

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
 })
 
 //SHOWHIDE FAQ ANSWER//
 
 const faqs = document.querySelectorAll('.faq');
 
 faqs.forEach(faq => {
     faq.addEventListener('click', () => {
         faq.classList.toggle('open');
 
         // CHANGE ICON //
 
         const icon = faq.querySelectorAll('.faq_icon i');
         if(icon.className === "uil uil-plus") {
             icon.className = "uil uil-minus";
         } else{
             icon.className = 'uil uil-plus';
         }
     })
 })
 
 //SHOWBAR NAVBAR
 
 const menu = document.querySelector(".nav_menu");
 const menuBtn = document.querySelector("#open-menu-btn");
 const closeBtn = document.querySelector("#close-menu-btn");
 
 
 menuBtn.addEventListener('click', () => {
     menu.style.display = "flex";
     closeBtn.style.display = "inline-block";
     menuBtn.style.display = "none";
 })
 
 //SHOW NAVABR CLOSEBAR
 
 const closeNav = () => {
     menu.style.display = "none";
     closeBtn.style.display = "none";
     menuBtn.style.display = "inline-block";
 }
 
 closeBtn.addEventListener('click', closeNav)

 AWS.config.update({
    region: 'Us East (N.Viginia) us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: '9923-8258-4097',
    })
});

var docClient = new AWS.DynamoDB.DocumentClient();


function registerUser(username, password) {
    var params = {
        TableName: 'layerci-database',
        Item: {
            'name': name,
            'email': email,
            'username': username,
            'password': password // In a real-world scenario, use a hashed password
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add user", err);
        } else {
            console.log("User added successfully");
        }
    });
}

function loginUser(username, password) {
    var params = {
        TableName: 'layerci-database',
        Key: {
            'username': username
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read user", err);
        } else {
            if (data.Item && data.Item.password === password) {
                console.log("Login successful");
            } else {
                console.log("Invalid username or password");
            }
        }
    });
}
 
 