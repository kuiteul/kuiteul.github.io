text_enter = ""
key = 0
def cypher(text, newkey)
    tab = []
    tab2 = []

    tab = text.codepoints.to_a
    for value in tab do
        tab = value + newkey.to_i #We add value of each index with the key value
        tab2.append(tab)
    end
    tab = []
    for value in tab2 do
        tab2 = value.chr 
        tab.append(tab2)
    end

    return tab.join("")
end

puts ("Enter a text to cypher ")
text_enter = gets
puts ("Enter cypher key")
key = gets

puts cypher(text_enter, key)