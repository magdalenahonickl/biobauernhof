<?php

/**
 * Extension Manager/Repository config file for ext "biobauernhof".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'biobauernhof',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Fhooe\\Biobauernhof\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Magdalena Hönickl',
    'author_email' => 's2310456006@fhooe.at',
    'author_company' => 'fhooe',
    'version' => '1.0.0',
];
