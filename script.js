//your JS code here. If required.
//your JS code here. If required.
setInterval(()=>{
            let today=new Date()
            let date=today.toLocaleDateString()
            let time=today.toLocaleTimeString()
            document.getElementById("timer").innerText=`${date} ${time}`

        },1000)