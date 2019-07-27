<?php
 include_once('db.php');
if($_POST['name'] =="" or $_POST['email']=="" or $_POST['pno'] =="" or $_POST['msg']=="" )
{
    echo "All Field Required";
}
elseif ($data=$conn->prepare("INSERT INTO feedback (name,email,pno,msg) VALUES(?,?,?,?)"))
     {
             $data->bind_param("ssss", $_POST['name'], $_POST['email'], $_POST['pno'], $_POST['msg']);
             $data->execute();
			 $data->close();
			 echo "Feedback Submitted Sucessfully!";
	 }
		else{
		  echo "Operation Failed";
    }
?>
