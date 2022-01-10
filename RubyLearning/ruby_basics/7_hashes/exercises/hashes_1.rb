def enum_hash_one(hash)
    puts "Here we use for loop to iterate the hashes"
    for i,v in hash
        print ("#{i} is: #{v} \n\n*********************\n")
    end
end
#Below we use the #each method to iterate the hashes
def enum_hash_two(hash)
    puts "The code below iterate the hash with .each method"
    hash.each{|i,v| print "#{i} is: #{v} \n***************\n"}   
end

hash = {
    firstname:"Narcisse",
    lastname:"Nana Kuiteul",
    age:32,
    district:"Soboum",
    city:"Douala",
    diploma:"BTS"
}

enum_hash_one(hash)
puts ""
enum_hash_two(hash)

