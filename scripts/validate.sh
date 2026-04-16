#!/bin/bash

# wait for app to start
sleep 15

# check if app is responding
curl -f http://localhost:3000

if [ $? -ne 0 ]; then
  echo "Application is not running"
  exit 1
fi

echo "Application is running"
