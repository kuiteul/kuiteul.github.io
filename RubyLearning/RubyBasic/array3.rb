list_all = ["jean", "jeanne", "pierre", "paul", "charlotte", "kuiteul", "narcisse", "prosper", "eric" ]
list_denied = ["jean", "prosper", "jeanne"]

for match in list_all do
    for check in list_denied do
        list_all = list_all.select{ |accept| accept != check}#Enumeral method allow to select in a list
    end
end
print list_all