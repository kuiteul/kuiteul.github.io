class Player
    attr_accessor :name, :letter, :position

        @@game = [["1", "2", "3"], ["4", "5", "6",], ["7", "8", "9"]]
        @@number = 0

    def self.game_initialize
        @@game = [["1", "2", "3"], ["4", "5", "6",], ["7", "8", "9"]]
    end

    def take_info(name, letter)
        self.name = name 
        self.letter = letter 
        puts "Welcome #{name}! You choose #{letter} letter\n"
    end
    
    def self.display_game
        @@game.each do |x| 
            puts "-------------"
            print "#{x.join("  |  ")}\n"
            puts "   |     |    "
        end
        puts "-------------\n"
    end

    def playing(pos)
        self.position = pos.to_i
        case position
        when 1
            @@game[0][0] = letter
        when 2
            @@game[0][1] = letter
        when 3
            @@game[0][2] = letter
        when 4
            @@game[1][0] = letter
        when 5
            @@game[1][1] = letter
        when 6 
            @@game[1][2] = letter
        when 7 
            @@game[2][0] = letter
        when 8
            @@game[2][1] = letter 
        when 9
            @@game[2][2] = letter
        else
            puts "Select a number between 1 to 9"
        end

    end

    def self.number_val
        return @@number += 1
    end

    def winner
      if @@game[0][0] == @@game[0][1] and @@game[0][0] == @@game[0][2]
          return "true"   
      elsif @@game[1][0] == @@game[1][1] and @@game[1][0] == @@game[1][2]
        return "true"
      elsif @@game[2][0] == @@game[2][1] and @@game[2][0] == @@game[2][2]
          return "true"
      elsif @@game[0][0] == @@game[1][1] and @@game[0][0] == @@game[2][2]
          return "true"
      elsif @@game[0][2] == @@game[1][1] and @@game[0][2] == @@game[2][0]
          return "true"
      elsif @@game[0][1] == @@game[1][1] and @@game[0][1] == @@game[2][1]
            return "true"
      elsif @@game[0][0] == @@game[1][0] and @@game[0][0] == @@game[2][0]
            return "true"
      elsif @@game[0][2] == @@game[1][1] and @@game[0][2] == @@game[2][0]
            return "true"
      elsif @@game[0][2] == @@game[1][2] and @@game[0][2] == @@game[2][2]
            return "true"
      else
            return "false"
      end

    end

    def message_to_winner
        puts "#{self.name} Win the match!"
    end

end

#We check if user_2 self.letter is equal to user_1 or it's empty

player_one = Player.new
player_two = Player.new
i = 0
judge = false
result = "false"
replay = "y"

puts "Welcome to the Tic-Tac-Toe game\n"


    while i <= 1
        puts "Player #{i+1} Enter your name"
        name_one = gets.chomp()
        while name_one == ""
            puts "Player #{i+1} You does not have to enter empty name\nPlease enter a name"
            name_one = gets.chomp()
        end
        puts "Player #{i+1} choose your letter"
        letter_one = gets.chomp()
        while letter_one.class == Integer or letter_one.length > 1 or letter_one == ""
            puts "You must enter just a character"
            letter_one = gets.chomp()
        end
        if i < 1
            player_one.take_info(name_one, letter_one)
        else 
            if letter_one == player_one.letter
                while letter_one == player_one.letter or letter_one == ""
                    puts "This letter has already been taken by #{player_one.name}\n\nPlease choose another one\n"
                    letter_one = gets.chomp()
                end
            end
            player_two.take_info(name_one, letter_one)
        end
        
        i += 1
    end


while replay == "y" or replay == "Y"

    puts "Great! Game can begin now!"
    puts "--------------------------\n--------------------------\n\n\n"

    while judge == false

            Player.display_game
            puts "#{player_one.name} choose a number to put your letter"
            position = gets.chomp
            player_one.playing(position)
            result = player_one.winner
            if result == "true"
                player_one.message_to_winner
                Player.display_game
                break
            end

            Player.display_game
            puts "#{player_two.name} choose a number to put your letter"
            position = gets.chomp
            player_two.playing(position)
            result = player_two.winner
            if result == "true"
                player_two.message_to_winner
                puts Player.number_val
                Player.display_game
                break
            end
            
            play_number = Player.number_val
            if play_number == 9 and result == "false"
                puts "---------------------\n\n Draw Game \n\n---------------------"
            end

    end

    puts "Will you want to play again ? press 'y/Y' to play again or 'n/N' to leave the game"
    replay = gets.chomp()
    if replay == 'y' or replay == 'Y'
        Player.game_initialize
    else
        puts "----------------------------\--------------------------------\n"
        print"|                                                          |"
        print "\n|Thank you to have playing this game. Hope to see you soon!|\n"
        print "|                                                          |\n"
        print "----------------------------\--------------------------------\n"
      
        puts " "
        break
    end
    
end
