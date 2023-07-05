// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  console.log(mondayWork());
  console.log(mondayWork("work from home"));

  /*
  function wrapAdjective(emphatic = "*") {
    let trait1 = wrapAdjective("*");
    let emphatic = trait1
    return `You are *${emphatic}*`
    /*return function (trait = "special") {
      return `You are *${trait}*!`;
    };
       
  }
  console.log((wrapAdjective)("*a hard worker*")("||a dedicated programmer||"));
*/

  /*
  function wrapAdjective() {
  
  }
*/


function wrapAdjective(highlight = "*") {
  return function (uplift = "special") {
    return `You are ${highlight}${uplift}${highlight}!`
  };
}
console.log(wrapAdjective()("a hard worker"), ("||a dedicated programmer||"));