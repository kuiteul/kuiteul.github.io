class Vehicle
    attr_accessor :year, :model, :speed, :color

    @@track_variable = 0

    def initialize(y, m, c)
        @year = y 
        @model = m 
        @color = c 
        @speed = 0    
        @@track_variable += 1    
    end

    def instatiation_time
        "This class has been instantiate #{track_variable} time(s)"
    end
    
    def speed_up(s=0)
        self.speed += s
        if speed == 0
            shut_off    
        else
            "Your speed to #{speed} km/h"
        end
    end

    def break_down(b)
        self.speed -= b
        "You slow to a speed of #{speed} km/h"
    end

    def show_info
        "You have a #{model} of #{year} of a #{color} color"
    end

end

class MyCar < Vehicle
    WEIGHT = 2000

    def initialize(y, c, m)
        super(y, c, m)


    end
end

class MyTruck < Vehicle
    HEIGHT = 4
    def initialize(y, c, m)
        super(y, c, m)

    end
end