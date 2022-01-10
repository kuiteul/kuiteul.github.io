write = IO.new(IO.sysopen('/home/kuiteul/Documents/test2.txt', 'a+'))
text = []

read = IO.new(IO.sysopen('/home/kuiteul/Documents/test.txt'))

text = read.select{ |x|  x != "" }

write.puts text
write.close

puts "Writing is finished!"
puts "Now we'll read on the screen what we wrote\n*************************************\n******************************************\n"

read = IO.new(IO.sysopen('/home/kuiteul/Documents/test2.txt'))
text = read.select{|x| x != ""}
read.close

puts text