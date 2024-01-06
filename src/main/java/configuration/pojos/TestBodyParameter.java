package configuration.pojos;

import java.util.List;

public class TestBodyParameter {
    private String name;
    private TestGenerator generator;
    private List<TestBodyParameter> properties;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TestGenerator getGenerator() {
        return generator;
    }

    public void setGenerator(TestGenerator generator) {
        this.generator = generator;
    }

    public List<TestBodyParameter> getProperties() {
        return properties;
    }

    public void setProperties(List<TestBodyParameter> properties) {
        this.properties = properties;
    }

    public void addProperty(TestBodyParameter property) {
        this.properties.add(property);
    }

    @Override
    public String toString() {
        return "BodyParameter{\n" +
                " \t\t\t\tname='" + name + '\'' +
                " \n\t\t\t\tgenerator='" + generator + '\'' +
                ", \n\t\t\t\tproperties='" + properties + '\'' +
                "\n\t\t\t}";
    }
}
