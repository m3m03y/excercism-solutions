public class CarsAssemble {
    private static final int CARS_PRODUCED_PER_HOUR = 221;
    private static final int MINUTES_IN_HOUR = 60;
    
    public double productionRatePerHour(int speed) {
        double successRate = speed <= 4 ? 1 : speed <= 8 ? 0.9 : speed == 9 ? 0.8 : 0.77;
        return CARS_PRODUCED_PER_HOUR * speed * successRate;
    }

    public int workingItemsPerMinute(int speed) {
        return (int) Math.floor(productionRatePerHour(speed) / MINUTES_IN_HOUR);
    }
}
