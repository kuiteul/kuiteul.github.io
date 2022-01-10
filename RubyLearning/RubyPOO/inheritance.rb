module Speak 
    def speak
        return "I speak "
    end
end

class Animal 
    attr_accessor :name, :weight, :height 

    def initialize(name, weight, height)
        self.name = name
        self.weight = weight 
        self.height = height
    end

    include Speak

    def get_info
        return "Name: #{self.name} | Weight: #{self.weight} | Height: #{self.height}"
    end
end

class Dog < Animal    
    attr_accessor :color
    def initialize(name, weight, height, color)
        self.color = color
        super(name, weight, height)
    end

    def speak
        puts super + "Dog language"
    end

    def get_info
        puts super + " | #{self.color}"
    end
    
end

class Cat < Animal
        attr_accessor :color

        def initialize(name, weight, height, color)
            self.color = color 
            super(name, weight, height)
        end

        def speak 
            puts super + "Cat language"
        end

        def get_info
            puts super + " | #{self.color}"
        end
end

dog = Dog.new("Dick", 25, 1.25, "brown")
cat = Cat.new("pusy", 15, 0.75, "white")

dog.get_info
dog.speak 

cat.get_info
cat.speak
