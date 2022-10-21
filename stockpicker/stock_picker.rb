def stock_picker(prices)
    min_price = 0
    max_price = min_price + 1
    profit = 0
    days = Array.new(2, 0)
    while min_price < prices.length do
        while max_price < prices.length do
            gain = prices[max_price] - prices[min_price]
            if gain > profit
                profit = gain 
                days[0] = min_price
                days[1] = max_price
            end
            max_price += 1
        end
        min_price += 1
        max_price = min_price + 1
    end   
    return days
end
p stock_picker([17,3,6,9,15,8,5,1,10])