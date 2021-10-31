def sort(liste)
    temp = 0
    i = 0
    j = 0
    
    while i < liste.length 
        j = i + 1
        while j < liste.length
            
            if liste[i] > liste[j]
                temp = liste[i]
                liste[i] = liste[j]
                liste[j] = temp
                temp = 0          
            end
               j += 1
        end
        i += 1
    end
    return liste
end

lists = [4, 39, 56, 24, 12, 54, 72, 3, 14, 85, 10, 1, 20]

print sort(lists)
