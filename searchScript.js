//Ajax query; uses queryURL variable
$("document").ready(function() {
     // need to link food recipe button
     $.ajax({
          url: localStorage.getItem("queryURL"),
          method: "GET"
          }).then(function(response)
                  {
                      localStorage.setItem("results", JSON.stringify(response));
                      let $results = document.getElementById("result-section");
                    //   $results.textContent = localStorage.getItem("results");
                      console.log(response[0]);
                  });
         // location.href = "results.html";
     });

document.getElementById("search-again").onclick(function()
{
     window.location.replace("./index.html");
}