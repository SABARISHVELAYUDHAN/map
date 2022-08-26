function myFunction(){
    var a = document.getElementById("Fname").value;
    document.getElementById("demo1").innerHTML = a;
    var b = document.getElementById("Lname").value;
    document.getElementById("demo2").innerHTML = b;
    var c = document.getElementById("Adrs").value
    document.getElementById("demo3").innerHTML = c;
    var d = document.getElementById("birth").value
    document.getElementById("demo4").innerHTML = d;
   
        async function getIP(){
            let response = await fetch("http://httpbin.org/get");
            let data = await response.json()
            document.getElementById("demo5").innerHTML = data.origin;
            return data;
        }
        
            getIP().then(data => console.log(data));

            console.log(a,b,c,d);
        
    }