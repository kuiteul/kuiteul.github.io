list_all = ["jean", "jeanne", "pierre", "paul", "charlotte", "kuiteul", "narcisse", "prosper", "eric" ]
list_denied = ["charlotte", "jean", "pierre", "prosper", "eric", "jeanne"]
list_accepted = []
validate = "ko"

for check in list_all do
    for match in list_denied do
        if check == match      
            validate = "ko"
            break
        end
        validate = "ok"
    end
    if validate == "ok"
        list_accepted.push(check)
    end
end


=begin
    below is the code with iterator each
rescue => exception
    
=end
list_all.each {|element| print "#{element} "}
puts " "
print list_all.select do |element|
    element.each do |take|
        if take == element
            puts "#{take}"
        end
    end
end
