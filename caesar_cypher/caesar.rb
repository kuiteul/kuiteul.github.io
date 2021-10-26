def caesar_cypher(text, key)

    indice = 0 #indice will count the position of each alphabet letter
    array = [] #will containt indice of each letter according to their position
    array_2 = [] # Will take the cypher text
    check = "" #will check if the valeu will match
  
    for i in text.downcase.split('') do
        for j in ("a".."z") do
            indice += key.to_i #we increase the value of indice by key

            if indice > 26
                indice -= 26
            end
            #since alphabet containt 26 letters if indice is more we sub the value by 26
            if i == j
                array.append(indice) #we fullfill array with the new position of each letter
                indice = 0
                check = "ok" #We check if everything match
                break
            end
        end
        if check == "ko"
            array.append(i)
            indice = 0
        end
        check = "ko"
    end

    for i in array do
        indice = 0
        for j in ("a".."z") do
            indice += 1

            if i == indice
                array_2.append(j)
                check = "ok"
                break             
            end

        end
        if check == "ko"
            array_2.append(i)
        end
        check = "ko"
    end

    print array_2.join("").capitalize
end

puts ("Enter text to cypher:")

user_input = gets

puts ("Enter cypher key")

user_key = gets

print caesar_cypher(user_input, user_key)