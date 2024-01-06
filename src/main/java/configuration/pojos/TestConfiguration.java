package configuration.pojos;

import java.util.List;

public class TestConfiguration {
    private List<TestOperation> operations = null;
    public List<TestOperation> getOperations() {
        return operations;
    }
    public void setOperations(List<TestOperation> operations) {
        this.operations = operations;
    }

    @Override
    public String toString() {
        return "TestConfiguration{\n" +
                "\t\toperations=" + operations +
                "\n\t}";
    }
}
