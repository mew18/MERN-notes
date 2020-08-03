var x = document.getElementById("x")
var y = document.getElementById("y")
var ans=document.getElementById("ans")
var form=document.getElementById("formxy")
//  ans.innerText="I need your clothes"

form.addEventListener("submit",function(event) // try this using the button 
{
    // alert("m8 click 10/10")

    //undef form
    if (!x.value || !y.value)
    {
        alert("Please Enter the values for X and Y")
    }

    else
    {
        var n1 = parseFloat(x.value)
        var n2 = parseFloat(y.value)

        var q= n1/n2;
        var res=q * 100

        // alert(res + "%")

        ans.innerText= "Answer : " + res + "%"

        event.preventDefault()
        // alert(n1 +  n2)
    }


    

    // console.log(n1);
})
