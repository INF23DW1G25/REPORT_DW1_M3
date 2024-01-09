#!/bin/bash
set -e
service mysql start
sleep 10
mysql < /app/mysql-init.sql
service mysql stop