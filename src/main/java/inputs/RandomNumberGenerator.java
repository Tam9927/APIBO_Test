package inputs;

import org.apache.commons.math3.random.RandomDataGenerator;
import util.DataType;

public class RandomNumberGenerator {

    private DataType type;
    private Object min=null;		// Optional: Specifies a min-max range to generate the values
    private Object max=null;

    public RandomNumberGenerator(DataType type) {
        super();

        if (!type.isNumber())
            throw new IllegalArgumentException("The requested type is not a number");

        this.type = type;

        // Set default min and max values
        if (type.equals(DataType.INTEGER) || type.equals(DataType.INT32) || type.equals(DataType.INT64)) {
            this.min = Integer.MIN_VALUE;
            this.max = Integer.MAX_VALUE;
        } else if (type.equals(DataType.DOUBLE) || type.equals(DataType.NUMBER)){
            this.min= Double.MIN_VALUE;
            this.max = Double.MAX_VALUE;
        } else if (type.equals(DataType.FLOAT)) {
            this.min = Float.MIN_VALUE;
            this.max = Float.MAX_VALUE;
        } else if (type.equals(DataType.LONG)) {
            this.min = Long.MIN_VALUE;
            this.max = Long.MAX_VALUE;
        }
    }


    public Object nextValue() {
        Object value=null;
        RandomDataGenerator rand = new RandomDataGenerator();

        if (type.equals(DataType.INTEGER) || type.equals(DataType.INT32) || type.equals(DataType.INT64))
            value = (Integer) rand.nextInt((Integer)min, (Integer)max);
        else if (type.equals(DataType.DOUBLE) || type.equals(DataType.NUMBER))
            value = (Double) rand.nextUniform((Double) min, (Double) max);
        else if (type.equals(DataType.FLOAT)) {
            float randomFloat = rand.getRandomGenerator().nextFloat();
            value = (Float)min + randomFloat * ((Float)max - (Float)min);
        }
        else if (type.equals(DataType.LONG))
            value = (Long) rand.nextLong((Long)min,(Long)max);
        return value;
    }


    public String nextValueAsString() {
        String value=null;
        if (type.equals(DataType.INTEGER) || type.equals(DataType.INT32) || type.equals(DataType.INT64))
            value = Integer.toString((Integer)nextValue());
        else if (type.equals(DataType.DOUBLE) || type.equals(DataType.NUMBER))
            value = Double.toString((Double)nextValue());
        else if (type.equals(DataType.FLOAT))
            value = Float.toString((Float)nextValue());
        else if (type.equals(DataType.LONG))
            value = Long.toString((Long)nextValue());
        return value;
    }

    public Object getMin() {
        return min;
    }

    public void setMin(Object min) {
        this.min = min;
    }

    public Object getMax() {
        return max;
    }

    public void setMax(Object max) {
        this.max = max;
    }

}
