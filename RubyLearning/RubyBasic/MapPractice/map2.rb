order = ["koki", "eru", "cornchap", "taro-sauce_jaune", "pilé de pomme", "riz sauté"]
new_order = []

#Change a menu with map
print "we print the order as created\n"
print order
puts "\nWe change cornchap by fufu corn"

order = order.map {|change| change.gsub("cornchap", "fufu corn")}

print order
puts "\nwe reject fufu corn on the list order"

order = order.select{|sel| sel != "fufu corn"}
print order
puts "\nWe change the case of all menu in the order"
order = order.map{|upca| upca.upcase}
print order

puts "\ncode below is realised with classic loop\n****************************\n"

#here we do the case one who consiste to change the cornchap with fufu corn in using classic loop

for i in order do
    if i != "ERU" 
        new_order.append(i)
    else  
        new_order.append("fufu corn")
    end
end

print new_order
puts ""

#We can note that, whe we use classic loop, we need a second array to put new informations in it
#So that when we use enumerable, we use always the same array