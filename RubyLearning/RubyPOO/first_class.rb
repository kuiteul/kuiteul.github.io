class GoodDog
    attr_accessor :name, :weight, :height

    def initialize(n,w, h)
        @name = n
        @weight = w
        @height = h
    end

    def change_info(n, w, h)
        self.name = n 
        self.weight = w 
        self.height = h 
    end

    def show_info
        "#{name} weighs #{weight} kilo and has #{height} meter tall"
    end

end

dog_1 = GoodDog.new("Dick", 25, 1.25)

puts dog_1.show_info

puts dog_1.name 

dog_1.change_info("Ruphy", 20, 0.80)

puts dog_1.show_info

puts dog_1.name