// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
      return someValue - 42;
    } else {
      return 42 - someValue;
    }
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet < 400) {
      return 0;
    } else if ( feet >= 400 && feet <= 2000) {
      return 2.56
    } else if ( feet > 2000 && feet <= 2500) {
      return 25
    } else {
      return "cannot travel that far";
    }
  }