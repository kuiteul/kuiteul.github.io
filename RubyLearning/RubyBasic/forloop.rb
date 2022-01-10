text = "je mange la banane"

for value in 0...text.length do
    puts text[value].ord
end

#In for loop when we want to ouput single value in a text or in an array, we must specify the 
#begining 0 and the end of that text or array and specify it length
# .. allow to go from the number to the left up to number to right including the number to the right
# ... allow to go from the number to the left up to number to right excluding the right the last
# 0..10 will go to 0 up to 10. and though 0...10 will go from 0 up to 9
