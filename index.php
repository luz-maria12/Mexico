<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permite CORS

// Simula datos obtenidos de una base de datos o fuente externa
$datosMexico = [
    'ip' => '123.45.67.89',
    'pais' => 'México',
    'continente' => 'América',
    'zona_horaria' => 'GMT-6'
];

echo json_encode($datosMexico);
?>
