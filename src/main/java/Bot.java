import configuration.generators.DefaultTestConfigurationGenerator;
import configuration.pojos.TestConfigurationObject;
import helpers.BoTestIO;
import helpers.JsonToYaml;
import javafx.concurrent.Task;
import org.apache.log4j.BasicConfigurator;
import specification.OpenApiSpecification;
import testcases.TestCase;
import testcases.generators.AbstractTestCaseGenerator;
import util.Command;
import writers.RestAssuredTestWriter;

import java.util.List;

public class Bot extends Task<Double> {
    private final String specificationFileLocation;
    private final String serverInformation;

    public Bot(String specificationFileLocation, String serverInformation) {
        this.specificationFileLocation = specificationFileLocation;
        this.serverInformation = serverInformation;
    }

    @Override
    protected Double call() throws Exception {
        // Logger Configuration
        BasicConfigurator.configure();

        // JSON to YAML
        String yamlOASPath = JsonToYaml.yamlPath(specificationFileLocation, serverInformation);
        updateValue(0.05);

        // Load Specification
        OpenApiSpecification openApiSpecification = new OpenApiSpecification(yamlOASPath);
        System.out.println("Specification Loaded...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/api-specification/" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                openApiSpecification.getSpecification().toString());
        updateValue(0.10);

        // Generate Test Configuration
        DefaultTestConfigurationGenerator defaultTestConfigurationGenerator = new DefaultTestConfigurationGenerator(
                openApiSpecification);
        TestConfigurationObject testConfigurationObject = defaultTestConfigurationGenerator.generate();
        System.out.println("Test Configuration Generated...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/test-configuration/" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                testConfigurationObject.getTestConfiguration().toString());
        updateValue(0.20);

        // Generate Test Cases
        AbstractTestCaseGenerator abstractTestCaseGenerator = new AbstractTestCaseGenerator(
                openApiSpecification,
                testConfigurationObject);
        List<TestCase> testCases = abstractTestCaseGenerator.generateTestCases();
        System.out.println("Abstract Test Case Generated...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/test-cases/" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                testCases.toString());
        updateValue(0.30);

        // Write REST Assured Tests
        RestAssuredTestWriter testWriter = new RestAssuredTestWriter(openApiSpecification, testCases);
        String testClass = testWriter.writeTest();
        BoTestIO.writeToFile("src/test/java/" + testWriter.getClassName() + ".java", testClass);
        System.out.println("REST Assured Tests Generated...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/test-classes/" +
                openApiSpecification.getSpecification().getInfo().getTitle() + ".js", testClass);
        updateValue(0.40);


        //Execute Tests
        //JUnitTestRunner testRunner = new JUnitTestRunner(testWriter.getClassName());
        //testRunner.execute();

        // run maven tests
        Command.execute("mvn clean test");
        updateValue(0.80);
        Command.execute("allure serve target/allure-results");
        updateValue(1.00);

        System.out.println("All Tests Executed...");

        return 1.0;
    }
}
