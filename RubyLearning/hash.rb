#There are several manners to create a hash. Hash is like a list in python or an object in javascript

#First manner to create a hash

my_first_hash = {
    "name" =>"Nana Kuiteul",
    "firstName" => "Narcisse",
    "Age" => "32",
    "Quartier" => "Soboum",
    "Ville" => "Douala"
}

my_first_hash.each{|key, value| puts "#{key} is #{value}"}

#Second manner to create a hash

my_first_hash = {
    :name => "Nana Kuiteul",
    :firstName => "Narcisse",
    :Age => 32,
    :Quartier => "Soboum",
    :Ville => "Douala"
}
puts "****************************"
puts my_first_hash[:name]
my_first_hash[:name] = "Yatang"
puts my_first_hash[:name]
puts "************************\nBelow is the third manner\n********************"
#third manner to create a hash

my_first_hash = {
    name: "Nana Kuiteul",
    firstName: "Narcisse",
    Age: 32,
    Quartier: "Soboum",
    Ville: "Douala"
}

my_first_hash.each{|key, value| puts "#{key} is #{value}"}

my_first_hash.each{|key_value| puts "#{key_value}"}
