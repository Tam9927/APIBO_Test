package configuration.generators;

import configuration.pojos.*;
import io.swagger.v3.oas.models.PathItem;
import io.swagger.v3.oas.models.media.*;
import specification.OpenApiSpecification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class DefaultTestConfigurationGenerator {
    private final OpenApiSpecification openApiSpecification;

    public DefaultTestConfigurationGenerator(OpenApiSpecification openApiSpecification) {
        this.openApiSpecification = openApiSpecification;
    }

    public TestConfigurationObject generate() {
        TestConfigurationObject testConfigurationObject = new TestConfigurationObject();

        /*
         * Generate Auth
         */
        generateAuth(testConfigurationObject);

        /*
         * Generate Test Configuration
         */
        generateTestConfiguration(testConfigurationObject);

        return testConfigurationObject;
    }

    private void generateTestConfiguration(TestConfigurationObject testConfigurationObject) {
        TestConfiguration testConfiguration = new TestConfiguration();

        testConfigurationObject.setTestConfiguration(testConfiguration);

        /*
         * Generate Operations
         */
        generateOperations(testConfiguration);
    }

    private void generateOperations(TestConfiguration testConfiguration) {
        List<TestOperation> operations = new ArrayList<>();

        System.err.println("Hello 0");
        testConfiguration.setOperations(operations);

        for (Map.Entry<String, PathItem> path: openApiSpecification.getSpecification().getPaths().entrySet()) {


            System.err.println("Hello 1");

            /*
             * GET
             */
            if (path.getValue().getGet() != null) {

                System.err.println("Hello 2");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("GET");
                operation.setOperationId(path.getValue().getGet().getOperationId());

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getGet().getParameters(), null, operation);
//                operation.setTestParameters();
//                operation.setExpectedResponse();

                operations.add(operation);
            }

            // operation.setOperationId(path.getValue().);

            /*
             * POST
             */
            if (path.getValue().getPost() != null) {
                // TODO: Remove
                System.err.println("Hello 3");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("POST");
                operation.setOperationId(path.getValue().getPost().getOperationId());

                /*
                 * Setting up request body parameter
                 */
//                var requestBodySchemaString = "";
//                try {
//                    requestBodySchemaString = path.getValue().getPost().getRequestBody().getContent()
//                                                .get("application/json").getSchema().get$ref();
//                } catch (Exception e) {
//                    System.out.println("No request body ...");
//                    continue;
//                }

                System.err.println("301");

                String requestBodySchemaString = null;
                if (path.getValue().getPost().getRequestBody() != null) {
                    System.err.println("302");
                    if (path.getValue().getPost().getRequestBody().getContent().get("application/json") !=null) {
                        requestBodySchemaString = path.getValue().getPost().getRequestBody().getContent()
                                .get("application/json").getSchema().get$ref();
                    }
                }

                System.err.println("303");

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getPost().getParameters(), requestBodySchemaString, operation);
//                operation.setTestParameters();
//                operation.setExpectedResponse();
//                generateRequestBody();

                System.err.println("304");

                operations.add(operation);
            }

            /*
             * PUT
             */
            if (path.getValue().getPut() != null) {

                System.err.println("Hello 4");

                System.err.println("101");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("PUT");
                operation.setOperationId(path.getValue().getPut().getOperationId());

                System.err.println("102");

                /*
                 * Setting up request body parameter
                 */
                String requestBodySchemaString = null;
                if (path.getValue().getPut().getRequestBody() != null) {
                    if (path.getValue().getPut().getRequestBody().getContent().get("application/json") !=null) {
                        requestBodySchemaString = path.getValue().getPut().getRequestBody().getContent()
                                .get("application/json").getSchema().get$ref();
                    }
                }

                System.err.println("103");

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getPut().getParameters(), requestBodySchemaString, operation);
//                operation.setTestParameters();
//                operation.setExpectedResponse();

                System.err.println("104");

                operations.add(operation);
            }

            /*
             * PATCH
             */
            if (path.getValue().getPatch() != null) {
                // TODO: Remove
                System.err.println("Hello 5");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("PATCH");

                System.err.println("251");

                operation.setOperationId(path.getValue().getPatch().getOperationId());


                System.err.println("252");
                /*
                 * Setting up request body parameter
                 */
                String requestBodySchemaString = null;
                if (path.getValue().getPatch().getRequestBody() != null) {
                    if (path.getValue().getPatch().getRequestBody().getContent().get("application/json") !=null) {
                        requestBodySchemaString = path.getValue().getPatch().getRequestBody().getContent()
                                .get("application/json").getSchema().get$ref();
                    }
                }

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getPatch().getParameters(), requestBodySchemaString, operation);

//                operation.setTestParameters();
//                operation.setExpectedResponse();

                operations.add(operation);
            }

            /**
             * OPTIONS
             */
            if (path.getValue().getOptions() != null) {
                // TODO: Remove
                System.err.println("Hello 6");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("OPTIONS");
                operation.setOperationId(path.getValue().getOptions().getOperationId());

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getOptions().getParameters(), null, operation);
//                operation.setTestParameters();
//                operation.setExpectedResponse();

                operations.add(operation);
            }

            /**
             * HEAD
             */
            if (path.getValue().getHead() != null) {
                // TODO: Remove
                System.err.println("Hello 7");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("HEAD");
                operation.setOperationId(path.getValue().getHead().getOperationId());

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getHead().getParameters(), null, operation);
//                operation.setTestParameters();
//                operation.setExpectedResponse();

                operations.add(operation);
            }

            /**
             * TRACE
             */
            if (path.getValue().getTrace() != null) {
                // TODO: Remove
                System.err.println("Hello 8");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("TRACE");
                operation.setOperationId(path.getValue().getTrace().getOperationId());

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getTrace().getParameters(), null, operation);
//                operation.setTestParameters();
//                operation.setExpectedResponse();

                operations.add(operation);
            }

            /**
             * DELETE
             */
            if (path.getValue().getDelete() != null) {
                // TODO: Remove
                System.err.println("Hello 9");

                TestOperation operation = new TestOperation();
                operation.setTestPath(path.getKey());
                operation.setMethod("DELETE");
                operation.setOperationId(path.getValue().getDelete().getOperationId());

                /*
                 * Generate Parameters
                 */
                generateParameters(path.getValue().getDelete().getParameters(), null, operation);
//                operation.setTestParameters();
//                operation.setExpectedResponse();

                operations.add(operation);
            }
        }
    }

    private void generateParameters(List<io.swagger.v3.oas.models.parameters.Parameter> parameters, String requestBodySchema, TestOperation operation) {
        List<TestParameter> testParameters = new ArrayList<>();
        List<TestParameter> bodyParameters = new ArrayList<>();

        System.err.println("10");
        /*
         * Path Parameter, Query Parameter
         */
        if (parameters != null) {
            for (io.swagger.v3.oas.models.parameters.Parameter parameter: parameters) {
                TestParameter testParameter = new TestParameter();

                testParameter.setName(parameter.getName());
                testParameter.setIn(parameter.getIn());
                testParameter.setWeight(0.5); // parameter is optional

                if (parameter.getRequired() != null) {
                    if (parameter.getRequired()) {
                        testParameter.setWeight(1); // parameter is required
                    }
                }

                generateTestParameterGenerator(testParameter, parameter.getSchema());

                testParameters.add(testParameter);
            }
        }

        System.err.println("11");

        /*
         * Request Body Parameter
         */
        if (requestBodySchema != null) {
            System.err.println("17");
            String requestBodyParameterName = getSchemaNameFromReference(requestBodySchema);
            System.err.println("18");
            TestBodyParameter testBodyParameter = generateBodyParameter(requestBodyParameterName, requestBodySchema);

            System.err.println("12");
            operation.setBodyParameter(testBodyParameter);

        }

        System.err.println("14");

        operation.setTestParameters(testParameters);
        System.err.println("15");
    }

    private TestBodyParameter generateBodyParameter (String requestBodyParameterName, String requestBodySchema) {
        System.err.println("201");
        TestBodyParameter testBodyParameter = new TestBodyParameter();
        Schema requestBodyParameterSchema = determineSchemaFromString(requestBodySchema);

        System.err.println(requestBodyParameterSchema);

        // TODO: review logic
        if (requestBodySchema.equals("array")) {
            return null;
        }

        System.err.println("202");

        testBodyParameter.setName(requestBodyParameterName);
        // Generate Parameter Generators

        generateBodyParameterGenerator(testBodyParameter, requestBodyParameterSchema);

        System.err.println("203");

        Map<String, Schema> properties = requestBodyParameterSchema.getProperties();

        if (Objects.nonNull(properties)) {
            System.err.println("204");
            List<TestBodyParameter> testBodyParameterProperties = new ArrayList<>();
            for (Map.Entry<String, Schema> property: properties.entrySet()) {
                // TODO: assign name of property
                System.err.println("205");
                if (property.getValue().getType() != null) {
                    System.err.println("235");
                    TestBodyParameter temporary = generateBodyParameter(property.getKey(), property.getValue().getType());
                    testBodyParameterProperties.add(temporary);
                }
                if (property.getValue().get$ref() != null) {
                    System.err.println("236");
                    TestBodyParameter temporary = generateBodyParameter(property.getKey(), property.getValue().get$ref());
                    testBodyParameterProperties.add(temporary);
                }

            }
            System.err.println("206");
            testBodyParameter.setProperties(testBodyParameterProperties);
            System.err.println("207");
        }

        System.err.println("208");
        return testBodyParameter;
    }

    private Schema determineSchemaFromString(String requestBodySchema) {
        if (requestBodySchema.equals("integer")) return new IntegerSchema();
        if (requestBodySchema.equals("string")) return new StringSchema();
        if (requestBodySchema.equals("boolean")) return new BooleanSchema();
        if (requestBodySchema.equals("number")) return new NumberSchema();

        return openApiSpecification.getSpecification().getComponents().getSchemas()
                .get(getSchemaNameFromReference(requestBodySchema));
    }

    private String getSchemaNameFromReference(String reference) {
        StringBuilder StringOfSchema = new StringBuilder();
        for (int i=reference.length()-1; i>=0; i--) {
            if (reference.charAt(i) == '/') break;
            StringOfSchema.insert(0, reference.charAt(i));
        }

        return StringOfSchema.toString();
    }

    private void generateTestParameterGenerator(TestParameter testParameter, Schema schema) {
        // List of generators because we may want to use an invalid generator with a valid generator
        // to create valid and invalid test cases
        TestGenerator testGenerator = new TestGenerator();
        testGenerator.setValid(true);

        System.err.println("51");

//        if (schema ==null) {
//            return;
//        }
        /*
          Boolean Generator
         */
        if (schema.getType().equals("boolean")) {
            testGenerator.setType("RandomBooleanGenerator");
        }
        /*
          Number Generator
         */
        else if (schema.getType().equals("integer")) {
            testGenerator.setType("RandomNumberGenerator");
        }
        /*
          String Generator
         */
        else if (schema.getType().equals("string")) {
            testGenerator.setType("RandomStringGenerator");
        }

        /*
         * Generate Parameter Generator Constraints
         */
        System.err.println("52");
        generateGenParameters(testGenerator, schema);
        System.err.println("54");
        testParameter.setGenerators(testGenerator);
        System.err.println("55");
    }

    private void generateBodyParameterGenerator(TestBodyParameter bodyParameter, Schema schema) {
        // List of generators because we may want to use an invalid generator with a valid generator
        // to create valid and invalid test cases
        TestGenerator generator = new TestGenerator();
        generator.setValid(true);

        System.err.println(bodyParameter);
        System.err.println(schema);

        System.err.println("211");
        /*
          Boolean Generator
         */
        if (schema.getType().equals("boolean")) {
            generator.setType("RandomBooleanGenerator");
        }
        /*
          Number Generator
         */
        else if (schema.getType().equals("integer")) {
            generator.setType("RandomNumberGenerator");
        }
        /*
          String Generator
         */
        else if (schema.getType().equals("string")) {
            generator.setType("RandomStringGenerator");
        }
        /*
          Object Generator
         */
        else if (schema.getType().equals("object")) {
            generator.setType("RandomObjectGenerator");
        }


        System.err.println("212");

        /*
         * Generate Parameter Generator Constraints
         */
        generateGenParameters(generator, schema);

        System.err.println("213");
        bodyParameter.setGenerator(generator);
    }

    private void generateGenParameters(TestGenerator testGenerator, Schema schema) {
        List<TestGeneratorParameter> testGeneratorParameters = new ArrayList<>();

        if (schema.getType().equals("boolean")) {
            // gen parameters will be empty list
        }
        else if (schema.getType().equals("string")) {

            /*
              Min Length Parameter Values
             */
            TestGeneratorParameter testGeneratorParameterMinLength = new TestGeneratorParameter();

            testGeneratorParameterMinLength.setName("minLength");
            ArrayList<String> minLengthValues = new ArrayList<>();

            if (schema.getMinLength() != null) {
                minLengthValues.add(schema.getMinLength().toString());
                testGeneratorParameterMinLength.setValues(minLengthValues);
            }

            testGeneratorParameters.add(testGeneratorParameterMinLength);

            /*
              Max Length Parameter Values
             */
            TestGeneratorParameter testGeneratorParameterMaxLength = new TestGeneratorParameter();

            testGeneratorParameterMaxLength.setName("maxLength");
            ArrayList<String> maxLengthValues = new ArrayList<>();

            if (schema.getMaxLength() != null) {
                maxLengthValues.add(schema.getMaxLength().toString());
                testGeneratorParameterMaxLength.setValues(maxLengthValues);
            }

            testGeneratorParameters.add(testGeneratorParameterMaxLength);

            // TODO: include alphabetic
            // TODO: include numbers
            // TODO: include special char

            testGenerator.setGenParameters(testGeneratorParameters);
        }
        else if (schema.getType().equals("integer")) {
            /*
              Data Type Values
             */
            TestGeneratorParameter testGeneratorParameterType = new TestGeneratorParameter();

            testGeneratorParameterType.setName("type");
            ArrayList<String> typeValues = new ArrayList<>();

            // if (schema.getType() != null) {
            //     typeValues.add(schema.getType());
            // }

            typeValues.add(schema.getType());
            testGeneratorParameterType.setValues(typeValues);

            testGeneratorParameters.add(testGeneratorParameterType);

            /*
             * Min Parameter Values
             */
            TestGeneratorParameter testGeneratorParameterMinNumber = new TestGeneratorParameter();

            testGeneratorParameterMinNumber.setName("min");
            ArrayList<String> minValues = new ArrayList<>();

            if (schema.getMinimum() != null) {
                minValues.add(schema.getMinimum().toString());
                testGeneratorParameterMinNumber.setValues(minValues);
            }

            testGeneratorParameters.add(testGeneratorParameterMinNumber);


            /*
             * Max Parameter Values
             */
            TestGeneratorParameter testGeneratorParameterMaxNumber = new TestGeneratorParameter();

            testGeneratorParameterMaxNumber.setName("max");
            ArrayList<String> maxValues = new ArrayList<>();

            if (schema.getMaximum() != null) {
                maxValues.add(schema.getMaximum().toString());
                testGeneratorParameterMaxNumber.setValues(maxValues);
            }

            testGeneratorParameters.add(testGeneratorParameterMaxNumber);
        }
        // TODO: Complete it
        else if (schema.getType().equals("object")) {
            TestGeneratorParameter schemaType = new TestGeneratorParameter();

            if (schema.get$ref() != null) {
                schemaType.setName(determineSchemaFromString(schema.get$ref()).toString());
            }

            testGeneratorParameters.add(schemaType);
        }

        testGenerator.setGenParameters(testGeneratorParameters);
    }

    private void generateAuth(TestConfigurationObject testConfigurationObject) {
        TestAuth testAuth = new TestAuth();

        // process auth
        openApiSpecification.getSpecification().getSecurity();
        testConfigurationObject.setAuth(new TestAuth());

        testConfigurationObject.setAuth(testAuth);
    }
}
