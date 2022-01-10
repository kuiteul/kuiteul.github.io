class MyCar
    attr_accessor :year, :color, :model, :speed

    def initialize(y, c, m)
        @year = y
        @color = c 
        @model = m   
        @speed = 0 
    end

    def speed_up(s=0)
        self.speed += s
        if speed == 0
            shut_off
        else  
            "Your speed to #{speed} km/h"
        end
    end

    def break(b)
        self.speed -= b
        "Your speed has broken fo #{speed}"
    end

    def shut_off
        self.speed = 0
        "You shut off your car"
    end

    def show_info
        "You have a #{model} of #{year} of a #{color} color"
    end

    def self.gas_mile_age
        "this is a class method"
    end

    def to_s
        "Welcome in my car class. you can now instantiate it"
    end
end

car = MyCar.new(2012, "black", "Toyota avensis")

puts car.show_info
puts car.speed_up(20)
puts car.speed_up(20)
puts car.speed_up(20)
puts car.speed_up(20)
puts car.break(40)
puts car.speed_up
puts car.shut_off
puts car.show_info
puts car.speed_up

puts MyCar.gas_mile_age
puts car