function openbox(url)
{
  var box = document.getElementById('box'); 
  document.getElementById('shadowing').style.display='block';
  
  var title = document.getElementById('boxtitle');
 // title.innerHTML = url;
  
  var content = document.getElementById('boxcontent');
  content.style.padding="0";
  //content.style.width="500px";
  content.innerHTML = "<img src=" + url + " />";
  content.innerHTML.style.width="500px";
	
  box.style.display='block';	
}	

function closebox()
{
   document.getElementById('box').style.display='none';
   document.getElementById('shadowing').style.display='none';
}
