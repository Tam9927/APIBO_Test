package configuration.pojos;

public class TestConfigurationObject {
    private TestAuth testAuth;
    private TestConfiguration testConfiguration;

    public TestAuth getAuth() {
        return testAuth;
    }

    public void setAuth(TestAuth testAuth) {
        this.testAuth = testAuth;
    }

    public TestConfiguration getTestConfiguration() {
        return testConfiguration;
    }

    public void setTestConfiguration(TestConfiguration testConfiguration) {
        this.testConfiguration = testConfiguration;
    }

    @Override
    public String toString() {
        return "TestConfigurationObject{" + "\n\t" +
                "auth=" + testAuth + ",\n\t" +
                "testConfiguration=" + testConfiguration + "\n" +
                '}';
    }
}
