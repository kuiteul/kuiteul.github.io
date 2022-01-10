list_all = ["jean", "jeanne", "pierre", "paul", "charlotte", "kuiteul", "narcisse", "prosper", "eric" ]
list_denied = ["jean", "prosper", "jeanne", "paul"]

for check in list_all do
    for match in list_denied do
            list_all = list_all.reject{ |reject| reject == match}
    #Enumeral method .reject{} who remove an element present in an array
    end
end
print list_all