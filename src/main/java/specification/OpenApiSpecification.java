package specification;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.parser.OpenAPIV3Parser;
import io.swagger.v3.parser.core.models.ParseOptions;

public class OpenApiSpecification {
    OpenAPI specification;

    public OpenApiSpecification(String location) {
        OpenAPIV3Parser openAPIV3Parser = new OpenAPIV3Parser();
        ParseOptions parseOptions = new ParseOptions();

        this.specification = openAPIV3Parser.read(location, null, parseOptions);
    }

    public OpenAPI getSpecification() {
        return specification;
    }
}
