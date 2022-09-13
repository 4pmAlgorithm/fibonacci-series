def fibonacci(num)
  # type your code in here
  fibArr = [0, 1]
  return fibArr[num] if num < 2

  (num-1).times do 
    sum = fibArr[0] + fibArr[1]
    fibArr = [fibArr[1], sum]
  end

  fibArr.last  
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
