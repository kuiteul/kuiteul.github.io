list_all = ["jean", "jeanne", "pierre", "paul", "charlotte", "kuiteul", "narcisse", "prosper", "eric" ]
list_denied = ["jean", "prosper", "jeanne"]

for check in list_all do
    for match in list_denied do
        list_all = list_all.reject{|reject| reject == match}
    end
end

list_all.each{|greet| puts greet += " Accepted!"}
print "***********************************\n"
list_denied.each{|reject| puts reject += " Rejected!"}
print("***************************************\n\n")

#Another way to write #each method on many lines

list_all.each do
        |greet|
        puts greet += "Accepted!"

end