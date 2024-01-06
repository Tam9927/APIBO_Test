package testcases;

import io.swagger.v3.oas.models.PathItem.HttpMethod;

import java.util.Map;

public class TestCase {
    // test unique identifier
    private String id;
    // true if expected response is a 4XX status code
    private Boolean faulty;
    // "none", "individual parameter constraint", "invalid request body"
    private String faultyReason;
    // id of the operation
    private String operationId;
    // http method
    private HttpMethod method;
    // request path
    private String path;
    // input format
    private String inputFormat;
    // output format
    private String outputFormat;
    // header parameters
    private Map<String, String> headerParameters;
    // path parameters
    private Map<String, String> pathParameters;
    // query parameters
    private Map<String, String> queryParameters;
    // form-data parameters
    private Map<String, String> formParameters;
    // body parameter
    private Map<String, Object> bodyParameter;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getFaulty() {
        return faulty;
    }

    public void setFaulty(Boolean faulty) {
        this.faulty = faulty;
    }

    public String getFaultyReason() {
        return faultyReason;
    }

    public void setFaultyReason(String faultyReason) {
        this.faultyReason = faultyReason;
    }

    public String getOperationId() {
        return operationId;
    }

    public void setOperationId(String operationId) {
        this.operationId = operationId;
    }

    public HttpMethod getMethod() {
        return method;
    }

    public void setMethod(HttpMethod method) {
        this.method = method;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getInputFormat() {
        return inputFormat;
    }

    public void setInputFormat(String inputFormat) {
        this.inputFormat = inputFormat;
    }

    public String getOutputFormat() {
        return outputFormat;
    }

    public void setOutputFormat(String outputFormat) {
        this.outputFormat = outputFormat;
    }

    public Map<String, String> getHeaderParameters() {
        return headerParameters;
    }

    public void setHeaderParameters(Map<String, String> headerParameters) {
        this.headerParameters = headerParameters;
    }

    public Map<String, String> getPathParameters() {
        return pathParameters;
    }

    public void setPathParameters(Map<String, String> pathParameters) {
        this.pathParameters = pathParameters;
    }

    public Map<String, String> getQueryParameters() {
        return queryParameters;
    }

    public void setQueryParameters(Map<String, String> queryParameters) {
        this.queryParameters = queryParameters;
    }

    public Map<String, String> getFormParameters() {
        return formParameters;
    }

    public void setFormParameters(Map<String, String> formParameters) {
        this.formParameters = formParameters;
    }

    public Map<String, Object> getBodyParameter() {
        return bodyParameter;
    }

    public String getBodyParameterAsJson() {
        String sb = recursiveHelperFunction(bodyParameter);
        sb = sb.stripTrailing();
        sb = sb.stripLeading();
        sb = sb.substring(sb.indexOf(":")+1,sb.length()-1);
        sb = sb.replace("\"", "\\\"");
        return sb;
    }

    private String recursiveHelperFunction(Map<String, Object> map) {
        StringBuilder temp = new StringBuilder("{");
        for (var entry : map.entrySet()) {
            temp.append("\"").append(entry.getKey()).append("\"");
            temp.append(":");
            if (entry.getValue() instanceof Map) {
                temp.append(recursiveHelperFunction((Map<String, Object>) entry.getValue()));
            } else {
                temp.append(entry.getValue());
            }
            temp.append(",");
        }
        temp.setLength(temp.length()-1);
        temp.append("}");
        return temp.toString();
    }

//    public String getBodyParameterAsJson() {
//        StringBuilder sb = new StringBuilder();
//
//        System.err.println(221);
//
//        sb.append("{");
//        bodyParameter.forEach((key, value) -> {
//            System.err.println(key);
//            System.err.println(value);
//
//            String name = key.substring(0, key.indexOf(':'));
//            String type = key.substring(key.indexOf(':')+1, key.length());
//
//            if (type.equals("string")) {
//                sb.append("\\\"").append(name).append("\\\"").append(": ").append("\\\"").append(value).append("\\\"");
//            } else {
//                sb.append("\\\"").append(name).append("\\\"").append(": ").append(value);
//            }
//
//            sb.append(",");
//        });
//        sb.setLength(sb.length() - 1); // removing the last unnecessary ,
//        sb.append("}");
//
//        System.err.println(222);
//
//        return sb.toString();
//    }



    public void setBodyParameter(Map<String, Object> bodyParameter) {
        this.bodyParameter = bodyParameter;
    }

    @Override
    public String toString() {
        return "TestCase{" +
                "\n\tid='" + id + '\'' +
                ", \n\tfaulty=" + faulty +
                ", \n\tfaultyReason='" + faultyReason + '\'' +
                ", \n\toperationId='" + operationId + '\'' +
                ", \n\tmethod=" + method +
                ", \n\tpath='" + path + '\'' +
                ", \n\tinputFormat='" + inputFormat + '\'' +
                ", \n\toutputFormat='" + outputFormat + '\'' +
                ", \n\theaderParameters=" + headerParameters +
                ", \n\tpathParameters=" + pathParameters +
                ", \n\tqueryParameters=" + queryParameters +
                ", \n\tformParameters=" + formParameters +
                ", \n\tbodyParameter='" + bodyParameter + '\'' +
                "\n}";
    }
}
