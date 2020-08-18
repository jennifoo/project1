     console.log('Script loaded properly');
     let searchTerm = "Ratatouille";
     let queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="+searchTerm;
     //ajax query here
     $.ajax({
          url: queryURL,
          method: "GET"
          }).then(function(response) 
                  {
                      console.log(response);
                  });
