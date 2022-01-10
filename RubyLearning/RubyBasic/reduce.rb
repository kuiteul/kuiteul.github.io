#First comprehension of reduce method
number = [3, 3, 5, 3, 8, 2, 6]

puts number.reduce{|sum, nums| sum + nums}