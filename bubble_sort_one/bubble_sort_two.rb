def sort(list)

    return list.sort{|number_one, number_two| number_one <=> number_two}

end
lists = [4, 39, 56, 24, 12, 54, 72, 3, 14, 85, 10, 1, 20]

print sort(lists)