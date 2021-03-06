var common = require('./common.js')
log = common.log

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  var temp = []
  nums.forEach(function(item,index){
      temp[item] ? temp[item].push(index) : temp[item] = [index]
  })
  for(var event in temp){
    if(temp[target-event] !== undefined){
        if(temp[event].length > 1){
            return [temp[event][0],temp[event][1]]
        }
        return [temp[event][0],temp[target-event][0]]
    }
  }
}

log(twoSum([2, 7, 11, 15], 9))
log(twoSum([3, 3], 6))
