/*
 Simple Arduino project with a motion sensor. 
 The Arduino will connect to a  WiFi Network. 
 Whenever the motion sensor detects movement, it will send an HTTP POST request to the backend server. 

 Headers: 
 accept: '* / *' without the space
 Content-Type: apllication/json

 Body of request: 

 <JSON>
 {
  "isAvailable": true,
  "timeStamp": "2022-06-28T08:17:37.270Z" // With current timestamp 
}

 Created 28.06.2022
 Last modified: 28.06.2022
 by Sigurd (sigubrat)


*/

//Import Libraries
#include <ArduinoHttpClient.h>
#include <WiFiNINA.h>
#include "secrets.h"


// Enter your WiFI credentials in the "secret.h" header-file

/* WiFi settings */
char ssid[] = SECRET_SSID;
char pwd[] = SECRET_PWD;

const char serverName[] = "placeholder"
int port = 7216;

WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverName, port);
int status = WL_IDLE_STATUS;

void setup() {
  // put your setup code here, to run once:

  // Used for communication between the Arduino board and a computer 
  Serial.begin(115200);

  // Attempt to connect to WiFi-network until success
  while (status != WL_CONNECTED){
    // Print network name
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);

    // Connect to WPA/WPA2 network: 
    status = WiFi.begin(ssid, pwd);

  }

  // Print info on connected network 
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // Print WiFi shield's address
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

}

void loop() {
  // put your main code here, to run repeatedly:

  bool checking = true;
  bool available;
  // Check motion sensor / motion sensor logic 
  // Not tested the sensor yet, so not entirely sure how the logic will be here 
  // Guesstimate:
  /*
   * Constantly check sensor for movement
   * If movement detected:  
   *    send http-post
   *    Wait 10 seconds in case someone was just walking by, to avoid flooding the backend
   */
  while (checking){
    available = true; 
    // Sensor stuff
    if ("sensor.movementDetected")
      available = false; 

    if (available == false){
      Serial.println("Sending POST-request");
      String contentType = "application/json";
      // TODO: Get current datetime 
      String postData = "{\"isAvailable\": true,\"timeStamp\": \"2022-06-28T08:17:37.270Z\"}";

      client.post("/update", contentType, postData);

      checking = false; 
      
      // Delay for 10 seconds to avoid flooding the API with calls (Someone could be walking past)
      delay(10 * 1000);
    }
  }
}
