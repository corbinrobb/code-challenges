let greatestNum = 0;
    
for(const candyNum of candies) {
    if (candyNum > greatestNum) {
        greatestNum = candyNum;
    }
}

return candies.map(candyNum => {
    return (candyNum + extraCandies) >= greatestNum;
})
};