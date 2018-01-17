var ServerNumber = 1;

function changeServers()
{
 // Can be configurable.
 if (ServerNumber == 1)
 {
  document.getElementById("server_body").innerHTML = "<b>Changed to www.syncedonline.com's Server.</b><br><iframe style='width: 100%; height: 100%;' src='http://www.syncedonline.com/#world-m1'></iframe>";
 }
 if (ServerNumber ==  2)
 {
  document.getElementById("server_body").innerHTML = "<b>Changed to www.example.com's Server.</b><br><iframe style='width: 100%; height: 100%;' src='http://www.example.com/'></iframe>";
 }
}
