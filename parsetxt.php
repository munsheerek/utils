<?php
    // $txt = file_get_contents('BUMEM.txt');
    // $row = explode(PHP_EOL, $txt); 

    $row = file("BUMEM.txt",FILE_IGNORE_NEW_LINES);
    // $a = print_r($row);
    // var_dump($a);
    for($i=11;$i<count($row);$i++){
            $explode = explode("  ",$row[$i]);
        for($j=0;$j<count($explode);$j++){
           if($explode[$j]){
                var_dump($explode[$j]);
           }
        }
        
    }

?>