<?php

    $clicked = intval($_POST['click']);
    $retval = 'to_on:'.($clicked - 1).';to_on:'.($clicked).';to_on:'.($clicked + 1);

    echo $retval;
?>