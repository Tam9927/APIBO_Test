package writers;

import specification.OpenApiSpecification;
import testcases.TestCase;

import java.util.List;

public class RestAssuredTestWriter {
    private final List<TestCase> testCases;
    private OpenApiSpecification specification;
    private StringBuilder testClass;

    public RestAssuredTestWriter(OpenApiSpecification specification, List<TestCase> testCases) {
        this.testCases = testCases;
        this.specification = specification;
    }

    public String getClassName() {
        String className = specification.getSpecification().getInfo().getTitle().replaceAll("\\s+","")
                .replaceAll("_","").replaceAll("-","");
        return className.substring(0,1).toUpperCase() + className.substring(1);
    }

    public String writeTest() {
        testClass = new StringBuilder();

        System.err.println(201);

        // import statements
        // TODO: change it/
        // testClass.append("package generation;").append("\n");
        testClass.append("import io.qameta.allure.Story;").append("\n");
        testClass.append("import io.restassured.response.Response;").append("\n");
        testClass.append("import io.restassured.http.ContentType;").append("\n");
        testClass.append("import io.restassured.RestAssured;").append("\n");
        testClass.append("import org.junit.jupiter.api.Assertions;").append("\n");
        testClass.append("import org.junit.jupiter.api.BeforeEach;").append("\n");
//        testClass.append("import org.junit.Test;").append("\n\n");
        testClass.append("import org.junit.jupiter.api.Test;").append("\n\n");
        testClass.append("import org.junit.jupiter.api.DisplayName;").append("\n\n");
//        testClass.append("import static org.junit.Assert.assertEquals;").append("\n\n");
//        testClass.append("import static org.junit.Assert.assertTrue;").append("\n\n");

        System.err.println(202);

        testClass.append("public class ").append(getClassName()).append(" {").append("\n\n");
        testClass.append("\t").append("@BeforeEach").append("\n");
        testClass.append("\t").append("public void setUp() {").append("\n");
        // index 0 denotes http server / index 1 denotes https server
        testClass.append("\t\t").append("RestAssured.baseURI = \"").append(specification.getSpecification().getServers()
                .get(0).getUrl()).append("\";\n");
        testClass.append("\t").append("}").append("\n\n");

        System.err.println(203);

        for (TestCase testCase: testCases) {

            System.err.println(204);
            testClass.append("\t").append("@Test").append("\n");
            testClass.append("\t").append("@Story(\"").append(testCase.getPath()).append("\")\n");
            testClass.append("\t").append("@DisplayName(\"").append(testCase.getMethod()).append(" ").append(testCase.getPath()).append("\")\n");
            testClass.append("\t").append("public void ").append(testCase.getId().replace("/","_").replace(".","_"))
                    .append("() {").append("\n");
            testClass.append("\t\t").append("String testResultId = \"").append(testCase.getId()).append("\";").append("\n\n");
            testClass.append("\t\t").append("try {").append("\n");
            testClass.append("\t\t\t").append("Response response = RestAssured").append("\n");
            testClass.append("\t\t\t\t\t").append(".given()").append("\n");
            testClass.append("\t\t\t\t\t\t").append(".log().all()").append("\n");

            System.err.println(205);

            if (testCase.getFormParameters() != null) {
                testCase.getFormParameters().forEach((key, value) -> {
                    String modifiedKey = key.substring(0, key.indexOf(':'));

                    testClass.append("\t\t\t\t\t\t").append(".formParam(").append("\"").append(modifiedKey).append("\", ")
                            .append("\"").append(value).append("\")").append("\n");
                });
            }

            System.err.println(206);
            if (testCase.getHeaderParameters() != null) {
                testCase.getHeaderParameters().forEach((key, value) -> {
                    String modifiedKey = key.substring(0, key.indexOf(':'));

                    testClass.append("\t\t\t\t\t\t").append(".header(").append("\"").append(modifiedKey).append("\", ")
                            .append("\"").append(value).append("\")").append("\n");
                });
            }

            System.err.println(207);

            if (testCase.getQueryParameters() != null) {
                testCase.getQueryParameters().forEach((key, value) -> {
                    String modifiedKey = key.substring(0, key.indexOf(':'));

                    testClass.append("\t\t\t\t\t\t").append(".queryParam(").append("\"").append(modifiedKey).append("\", ")
                            .append("\"").append(value).append("\")").append("\n");
                });
            }

            System.err.println(208);

            if (testCase.getPathParameters() != null) {
                testCase.getPathParameters().forEach((key, value) -> {
                    String modifiedKey = key.substring(0, key.indexOf(':'));

                    testClass.append("\t\t\t\t\t\t").append(".pathParam(").append("\"").append(modifiedKey).append("\", ")
                            .append("\"").append(value).append("\")").append("\n");
                });
            }

            System.err.println(209);

            if (testCase.getBodyParameter() != null) {
                //.contentType(ContentType.JSON)
                testClass.append("\t\t\t\t\t\t").append(".contentType(").append("ContentType.JSON").append(")").append("\n");
                //testClass.append("\t\t\t\t\t\t").append(".contentType(")
                testClass.append("\t\t\t\t\t\t").append(".body(").append("\"").append(testCase.getBodyParameterAsJson())
                        .append("\")").append("\n");
            }

            System.err.println(210);

            testClass.append("\t\t\t\t\t").append(".when()").append("\n");
            testClass.append("\t\t\t\t\t\t").append(".").append(testCase.getMethod().toString().toLowerCase()).append("(\"")
                    .append(testCase.getPath()).append("\");").append("\n\n");
            testClass.append("\t\t\t").append("response.then().log().all();").append("\n");
//            if (!testCase.getFaulty()) {
//                testClass.append("\t\t\t").append("assertEquals(200, response.statusCode());").append("\n");
//            } else {
//                testClass.append("\t\t\t").append("assertEquals(404, response.statusCode());").append("\n");
//            }
//            testClass.append("\t\t\t").append("Assertions.assertTrue(\"Status Code is less than 500\", response.statusCode() < 500);").append("\n");
            testClass.append("\t\t\t").append("Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());").append("\n");
            testClass.append("\t\t\t").append("System.out.println(\"Test passed.\");").append("\n");
            testClass.append("\t\t").append("} catch (RuntimeException ex) {").append("\n");
            testClass.append("\t\t\t").append("System.err.println(ex.getMessage());").append("\n");
            testClass.append("\t\t\t").append("Assertions.fail(ex.getMessage());").append("\n");
            testClass.append("\t\t").append("}").append("\n");
            testClass.append("\t").append("}").append("\n\n");
        }

        System.err.println(204);

        testClass.append("}").append("\n");

        return testClass.toString();
    }
}