package configuration.pojos;

import java.util.List;

public class TestGenerator {
    private String type;
    private List<TestGeneratorParameter> testGeneratorParameters = null;
    private Boolean valid = true; // Whether or not the generator generates valid data

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<TestGeneratorParameter> getGenParameters() {
        return testGeneratorParameters;
    }

    public void setGenParameters(List<TestGeneratorParameter> testGeneratorParameters) {
        this.testGeneratorParameters = testGeneratorParameters;
    }

    public Boolean getValid() {
        return valid;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }

    @Override
    public String toString() {
        return "Generator{" +
                "\n\t\t\t\t\ttype='" + type + '\'' +
                ", \n\t\t\t\t\tgenParameters=" + testGeneratorParameters +
                ", \n\t\t\t\t\tvalid=" + valid +
                "\n\t\t\t\t}";
    }
}
