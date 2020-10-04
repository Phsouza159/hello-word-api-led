#!/usr/bin/env python3
import serial
import time

command = b"DESLIGADO"

if __name__ == '__main__':
  
    ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
    ser.flush()
   
    while True:
        ser.write(command)
        line = ser.readline().decode('utf-8').rstrip()
        
        print(line)
        time.sleep(2)

        if(line == command):
            break