<?php
$isProd = $ENV['IS_PROD'] === "false" ? false : true;

function scriptAssetUrl(string $path): string
{
  global $isProd;

  return $isProd ? "assets/$path" : "../../src/$path";
}
