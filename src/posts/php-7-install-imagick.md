---
title: "PHP 7: Install Imagick"
date: "2018-05-21"
author: "Oleksandr Varanytsia"
keywords: "Imagick, tutorial, install, extension, PHP 7, CENTOS 6.9, cPanel, WHM, EasyApache 4, PHP-FPM"
description: "Tutorial for install Imagick extension for PHP 7 on server with CENTOS 6.9, cPanel, WHM, EasyApache 4 and PHP-FPM"
---
**Task**: install Imagick for PHP 7

**Input Data**: PHP7, CENTOS 6.9, cPanel & WHM Version - v70.0.42, EasyApache 4, PHP-FPM

**Tutorial**:

1) Open terminal and install imagick `# /opt/cpanel/ea-php70/root/usr/bin/pecl install imagick`

2) Add line `extension=imagick.so` to `/opt/cpanel/ea-php70/root/etc/php.ini` file

3) Follow and run: WHM -> Restart Services -> HTTP Server (Apache). You can do it in terminal too by `# service httpd restart`

4) `# /opt/cpanel/ea-php70/root/usr/bin/php -m | grep imagick`

5) WHM -> Restart Services -> PHP-FPM service for Apache