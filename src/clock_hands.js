function hourHandAngle(hour,min){
  hourAngle = ((hour/12)*360)+((min/60/12)*360);
  return hourAngle;
}

function minuteHandAngle(min){
  minAngle = (min/60)*360;
  return minAngle;
}

function angleBetweenHands(time){
  time = time.split(':');
  var minAngle = minuteHandAngle(time[1]);
  var hourAngle = hourHandAngle(time[0],time[1]);
  var angle = minAngle > hourAngle ? minAngle - hourAngle : hourAngle - minAngle;
  if (angle === 360) angle = 0;
  if (angle > 180) angle = 360 - angle;
  return angle;
}

