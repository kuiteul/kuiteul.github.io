def caesar_cipher(text, key)
    value = 0
    array = []

    for i in 0...text.length do
        if text[i].ord >= 65 and text[i].ord <= 90
            value = text[i].ord - 64 + key
            if value > 26
                value -= 25
                array.append(value + 64)
            else  
                array.append(value + 64)
            end           
        elsif text[i].ord >= 97 and text[i].ord <= 122
            value = text[i].ord - 96 + key
            if value > 26
                value -= 25
                array.append(value + 96)
            else
                array.append(value + 96)
            end
        else    
            array.append(text[i])
        end
    end
    text = ""
    for i in array do
        text += i.chr 
    end

    puts text
end

message = "I like to code with ryby. For ruby is very fun!"

caesar_cipher(message, 21) # Output E hegz pk xkyz sepd nuwu. Bkn nqwu eo rznu bqj!