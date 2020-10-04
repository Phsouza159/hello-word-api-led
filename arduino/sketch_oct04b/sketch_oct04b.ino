void setup() {
   
  Serial.begin(9600);
  pinMode(11, OUTPUT);
  
}

boolean isLigado = true;

void loop() {
  
  
  if(isLigado){
    digitalWrite(11, HIGH);
  } else {
    digitalWrite(11, LOW);
  }
   
  
  if (Serial.available() > 0) {
    
    String data = Serial.readStringUntil('\n');
    
    Serial.print(data);
    //Serial.println(data);
    
    if(data == "LIGADO") {
     isLigado = true;
    }
    
    else if(data == "DESLIGADO"){
      isLigado = false;
    }
  }
}
