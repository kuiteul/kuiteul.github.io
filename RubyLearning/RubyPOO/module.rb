module Speak
    def speak
        return "I speak "
    end
end

module ShowBasicInfo
    def basic_info
        return "My name is #{self.name}. I weight #{self.weight}. I measure #{self.height}"
    end
end

class Animal
    attr_accessor :name, :weight, :height, :age

    def initialize(name, weight, height, age)
        self.name = name
        self.weight = weight
        self.height = height 
        self.age = age
    end

    include Speak
end

module Mamal
    
    class Felin < Animal
        attr_accessor :speed
        def initialize(n, w, h, a, s)
            self.speed = s
            super(n, w, h, a)
        end 

        def speak
            return super + "Like a Felin"
        end

        include ShowBasicInfo

    end

    class Canin < Animal
        attr_accessor :speed
        def initialize(n, w, h, a, s)
            self.speed = s
            super(n, w, h, a)
        end 

        def speak
            puts super + "Like a Canin. "
        end

        include ShowBasicInfo
    end
end

class Dog < Mamal::Felin
    attr_accessor :color

    def initialize(n, w, h, a, s, c)
        self.color
        super(n, w, h, a, s)
        puts "Creating Dog successfully done"
    end

    def speak
        puts super + " in barking arf! arf!"
    end

    include ShowBasicInfo

end

dog = Dog.new("Dick", 25, 1.25, 7, 60, "brown")

puts dog.basic_info

dog.name = "Sparky"

puts dog.basic_info

puts dog.class
puts dog.speak
puts "His ancestor ---"


puts Dog.ancestors