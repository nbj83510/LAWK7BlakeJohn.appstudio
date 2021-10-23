let req = ""
let query = ""
let results = ""
let pw = "Rockyzack15$" 
let netID = "nbj83510"
let message = ""

btnSelect3.onclick=function(){
  let query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)

  for (i = 0; i < results.length; i++)
       message = message + "<br />" + results[i][1] 
       lblAdd.value = message
}

btnAdd.onclick=function(){
  let name = inptName.value
  let street = inptStreet.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipCode.value
  
  query = "INSERT INTO customer VALUES('" + name + "', '" + street + "','" + city + "', '" + state + "', '" + zipcode + "'")
  alert(query)
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
}
