<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
session_cache_limiter(FALSE);

require_once("../common/db_open.php");
// SQL QUERY
$sql = "select * from similarwebcategory ORDER BY category";
// RUN SQL QUERY, GET RESULT
$result = mysqli_query($conn,$sql);
if($result)
{
    $category = array();
    // FIRST ITEM SHOULD BE `ANY`
    $temp['similarwebcategory_id'] = "0";
    $temp['category'] = 'Any';
    $temp['subcategory'] = 'Any';
    array_push($category, $temp);
    // FETCH ROWS FROM RESULT SET
    while($row = mysqli_fetch_array($result,MYSQLI_ASSOC))
    {
        // PUSH EACH ROW
        array_push($category, $row);
    }
    // PRINT FINAL ARRAY THAT HAS ALL THE ROWS
    echo json_encode($category);
}
else
{
    // IF RESULT IS NOT FOUND THEN PRINT EMPTY ARRAY
    echo json_encode(array());
}
// FREE THE RESULT SET
mysqli_free_result($result);