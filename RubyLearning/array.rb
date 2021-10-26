list_all = ["jean", "jeanne", "pierre", "paul", "charlotte", "kuiteul", "narcisse", "prosper", "eric" ]
list_denied = ["charlotte", "jean", "pierre", "prosper", "eric", "jeanne"]
list_accepted = []
validate = "ko"

for check in list_all do
    for match in list_denied do
        if check == match      
            validate = "ko"
            break
        end
        validate = "ok"
    end
    if validate == "ok"
        list_accepted.push(check)
    end
end
print list_accepted