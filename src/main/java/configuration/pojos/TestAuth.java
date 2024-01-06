package configuration.pojos;

import java.util.Map;

public class TestAuth {
    private Boolean required;
    private Map<String, String> queryParameters = null;
    private Map<String, String> headerParameters = null;
    private String apiKeysPath;
    private String headersPath;
    private String oauthPath;

    public Boolean getRequired() {
        return required;
    }

    public void setRequired(Boolean required) {
        this.required = required;
    }

    public Map<String, String> getQueryParameters() {
        return queryParameters;
    }

    public void setQueryParameters(Map<String, String> queryParameters) {
        this.queryParameters = queryParameters;
    }

    public Map<String, String> getHeaderParameters() {
        return headerParameters;
    }

    public void setHeaderParameters(Map<String, String> headerParameters) {
        this.headerParameters = headerParameters;
    }

    public String getApiKeysPath() {
        return apiKeysPath;
    }

    public void setApiKeysPath(String apiKeysPath) {
        this.apiKeysPath = apiKeysPath;
    }

    public String getHeadersPath() {
        return headersPath;
    }

    public void setHeadersPath(String headersPath) {
        this.headersPath = headersPath;
    }

    public String getOauthPath() {
        return oauthPath;
    }

    public void setOauthPath(String oauthPath) {
        this.oauthPath = oauthPath;
    }


    @Override
    public String toString() {
        return "Auth{" +
                "\n\t\trequired=" + required +
                ", \n\t\tqueryParams=" + queryParameters +
                ", \n\t\theaderParams=" + headerParameters +
                ", \n\t\tapiKeysPath='" + apiKeysPath + '\'' +
                ", \n\t\theadersPath='" + headersPath + '\'' +
                ", \n\t\toauthPath='" + oauthPath + '\'' +
                "\n\t}";
    }
}
