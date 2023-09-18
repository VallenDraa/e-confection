<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

// Load ENVs
$ENV = parse_ini_file(".php.env");

// This would be your framework default bootstrap file

// During dev, this file would be hit when accessing your local host, like:
// http://vite-php-setup.test
require_once './vite.php';

// File routing based on the page info from the URL
$page = $_GET['page'] ?? "";

if ($page === "") {
  require_once "./pages/home.php";
} else {
  require_once
    file_exists("./pages/$page.php") ? "./pages/$page.php" : "./pages/404.php";
}
