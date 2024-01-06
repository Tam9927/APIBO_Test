package configuration.pojos;

import java.util.List;

public class TestOperation {
    private String testPath;
    private String operationId;
    private String method;
    private List<TestParameter> testParameters = null;
    private TestBodyParameter bodyParameter = null;
    private String expectedResponse;

    public String getTestPath() {
        return testPath;
    }

    public void setTestPath(String testPath) {
        this.testPath = testPath;
    }

    public String getOperationId() {
        return operationId;
    }

    public void setOperationId(String operationId) {
        this.operationId = operationId;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public List<TestParameter> getTestParameters() {
        return testParameters;
    }

    public void setTestParameters(List<TestParameter> testParameters) {
        this.testParameters = testParameters;
    }

    public TestBodyParameter getBodyParameter() {
        return bodyParameter;
    }

    public void setBodyParameter(TestBodyParameter bodyParameter) {
        this.bodyParameter = bodyParameter;
    }

    public String getExpectedResponse() {
        return expectedResponse;
    }

    public void setExpectedResponse(String expectedResponse) {
        this.expectedResponse = expectedResponse;
    }

    @Override
    public String toString() {
        return "Operation{\n" +
                "\t\t\ttestPath='" + testPath + '\'' +
                ", \n\t\t\toperationId='" + operationId + '\'' +
                ", \n\t\t\tmethod='" + method + '\'' +
                ", \n\t\t\ttestParameters=" + testParameters +
                ", \n\t\t\texpectedResponse='" + expectedResponse + '\'' +
                "\n\t\t}";
    }
}
