def substring(word, dictionnary)
    tab = Array.new #We create a new Array called tab
    word.downcase! # We transform the contain of word in downcase
    word = word.split(" ") #We transform word in an array
    word.each do |var|
        dictionnary.each do |var_1|
            if var.include?var_1  #We test if a dictionnary word taken is include in word tab
                tab.push(var_1) #If so then we put them in our tab
            end
        end
    end
    tab.sort.reduce(Hash.new(0)) do |sum, count|
        sum[count] += 1
        sum
    end
end
words = "Howdy partner, sit down! How's it going?"
dictionnary =  dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
print substring(words, dictionary)