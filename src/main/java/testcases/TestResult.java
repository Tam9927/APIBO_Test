package testcases;

public class TestResult {
    // Test result unique identifier. Coincides with the test case one
    private String id;
    // Status code returned in the response
    private String statusCode;
    // Body (if any) returned in the response
    private String responseBody;
    // Format of the response (JSON, XML, etc.)
    private String outputFormat;
    // null = test was not checked (oracles disabled)
    private Boolean passed;
    // null = test was not checked (oracles disabled)
    private String failReason;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public String getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(String responseBody) {
        this.responseBody = responseBody;
    }

    public String getOutputFormat() {
        return outputFormat;
    }

    public void setOutputFormat(String outputFormat) {
        this.outputFormat = outputFormat;
    }

    public Boolean getPassed() {
        return passed;
    }

    public void setPassed(Boolean passed) {
        this.passed = passed;
    }

    public String getFailReason() {
        return failReason;
    }

    public void setFailReason(String failReason) {
        this.failReason = failReason;
    }
}
