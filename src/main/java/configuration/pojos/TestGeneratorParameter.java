package configuration.pojos;

import java.util.List;

public class TestGeneratorParameter {
    private String name;
    private List<String> values = null;
    private List<Object> objectValues = null;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getValues() {
        return values;
    }

    public void setValues(List<String> values) {
        this.values = values;
    }

    public List<Object> getObjectValues() {
        return objectValues;
    }

    public void setObjectValues(List<Object> objectValues) {
        this.objectValues = objectValues;
    }

    @Override
    public String toString() {
        return "GenParameter{" +
                "\n\t\t\t\t\t\tname='" + name + '\'' +
                ", \n\t\t\t\t\t\tvalues=" + values +
                ", \n\t\t\t\t\t\tobjectValues=" + objectValues +
                "\n\t\t\t\t\t}";
    }
}
