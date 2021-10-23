let req = ""
let query = ""
let results = ""
let pw = "Rockyzack15$" 
let netID = "nbj83510"
let message = ""

btnSelect2.onclick=function(){
  let query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)

  for (i = 0; i < results.length; i++)
       message = message + "<br />" + results[i][1] 
       lblDelete.value = message
}


btnDelete.onclick=function(){
  let customerDelete = inptDelete.value
  query = "DELETE FROM customer WHERE name = '" + customerDelete + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}

