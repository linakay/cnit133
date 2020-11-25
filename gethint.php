<?php
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";
$a[] = "Hermione";
$a[] = "Hagrid";
$a[] = "Aragog";
$a[] = "Dobby";
$a[] = "Buckbeak";
$a[] = "Grawp";
$a[] = "Kreacher";
$a[] = "Pigwidgeon";
$a[] = "Peeves";
$a[] = "Sirius";
$a[] = "Dumbledore";
$a[] = "Moody";
$a[] = "Lupin";
$a[] = "Tonks";
$a[] = "Harry";
$a[] = "Ron";
$a[] = "Draco";
$a[] = "Snape";
$a[] = "Luna";
$a[] = "Tom";
$a[] = "Nony";
$q = $_REQUEST["q"];
$hint = "";
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}
echo $hint === "" ? "No suggestions are available based on your input." : $hint;
?>