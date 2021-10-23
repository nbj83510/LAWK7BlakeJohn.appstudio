let req = ""
let query = ""
let results = ""
let pw = "Rockyzack15$" 
let netID = "nbj83510"
let message = ""

btnSelect4.onclick=function(){
  let query = "SELECT * from customer"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)

  for (i = 0; i < results.length; i++)

    message = message + "\n" + results[i][1]
  lblUpdate.value = message
}


btnUpdate.onclick=function(){
    let newName = inptNew.value
    let oldName = inptOld.value
            
    query = "UPDATE customer SET Name =" + '"' + newName + '"' + " WHERE Name = " + '"' + oldName + '"'
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}
