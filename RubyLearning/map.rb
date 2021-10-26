list_friend = ["narcisse", "Nidel", "Eunice", "Flor", "Junias"]

#We can use map to transform what we want

list_friend.map{ | friend| puts friend.upcase}
list_friend.map{ |friend| puts friend.reverse.upcase}