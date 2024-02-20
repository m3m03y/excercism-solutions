public class Lasagna {
    private static int EXPECTED_MINUTES_IN_OVEN = 40;
    private static int PREPARATION_TIME_IN_MIN_PER_LAYER = 2;
    
    // TODO: define the 'expectedMinutesInOven()' method
    public int expectedMinutesInOven(){
        return EXPECTED_MINUTES_IN_OVEN;
    }

    // TODO: define the 'remainingMinutesInOven()' method
    public int remainingMinutesInOven(int timeHasBeenInOven) {
        return expectedMinutesInOven() - timeHasBeenInOven;
    }
    
    // TODO: define the 'preparationTimeInMinutes()' method
    public int preparationTimeInMinutes(int numberOfLayers) {
        return numberOfLayers * PREPARATION_TIME_IN_MIN_PER_LAYER;
    }
    
    // TODO: define the 'totalTimeInMinutes()' method
    public int totalTimeInMinutes(int numberOfLayers, int timeHasBeenInOven) {
        return PREPARATION_TIME_IN_MIN_PER_LAYER * numberOfLayers + timeHasBeenInOven;
    }
}
