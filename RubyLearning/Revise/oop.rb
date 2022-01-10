class Person
    def initialize(first_name, last_name, age)
        @first_name = first_name
        @last_name = last_name
        @age = age
    end

    def showInfo
        puts "Welcome #{@first_name} #{@last_name}. You are #{@age}"
    end
end

p1 = Person.new("Narcisse", "NANA KUITEUL", 32)

p1.showInfo