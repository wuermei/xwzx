<?php
//************新闻资讯php************
$url = $url="http://v.juhe.cn/toutiao/index?type=".$_GET['type']."&key=9e14cb40b12aef6900c8d75d3fa8933c";
$data = file_get_contents($url);
echo $_GET['callback']."(".$data.")";
?>