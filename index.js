// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(item) {
    return item.revenue > amount ;
  })
}

function driverNamesWithRevenueOver(drivers, amount){
  return driversWithRevenueOver(drivers, amount)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, match) {
  return drivers.filter(function(item){
    let matches = false;
    for (const key in match) {
      matches = item[key] === match[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, match) {
<<<<<<< HEAD
  return exactMatch(drivers, match).map(function(item){
=======
  return exactMatch(drivers, map).map(function(item){
>>>>>>> 8d95ba97c62a1621d61e286dc1b2cc0298d0c62c
    return item.name;
  });
}
