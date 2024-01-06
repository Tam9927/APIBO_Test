package inputs;

import org.apache.commons.math3.random.RandomDataGenerator;

public class RandomBooleanGenerator {
    private double trueProbability = 0.5;

    public RandomBooleanGenerator() {
        super();
    }

    public RandomBooleanGenerator(float trueProbability) {
        super();
        this.trueProbability = trueProbability;
    }

    public double getTrueProbability() {
        return trueProbability;
    }

    public void setTrueProbability(double trueProbability) {
        this.trueProbability = trueProbability;
    }

    public Object nextValue() {
        Boolean value = true;
        if (new RandomDataGenerator().nextInt (0, 1) > trueProbability) {
            value = false;
        }

        return value;
    }

    public String nextValueAsString() {
        return nextValue().toString();
    }
}