#Using .select method with array
list_friend = ["Jeane", "Narcisse", "Eunice", "Paul", "Eric", "Josiane"]
list_denied = ["Paul", "Josiane"]

for check in list_friend do
    for match in list_denied do
        list_friend = list_friend.select{|take| take != match}
    end
end
print "#{list_friend}\n"
list_friend = list_friend.map{|upper| upper += " "+upper.upcase}
print "#{list_friend}\n"

#Using .select method width Hashes

list_friend = {
    name: "Nana Kuiteul",
    firstname: "Narcisse",
    age: 32,
    ville: "Douala",
    quartier: "Soboum",
    pays: "Cameroun"
}

list_friend = list_friend.select{|key, value| value != "Soboum"}
puts list_friend