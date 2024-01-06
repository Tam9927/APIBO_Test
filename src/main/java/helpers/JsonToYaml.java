package helpers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

public class JsonToYaml {
    public static String yamlPath (String jsonPath, String serverInfo) throws IOException {
        String jsonContent = "";
        try {
            File myObj = new File(jsonPath);
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                jsonContent = jsonContent + data + "\n";
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        String yamlPath = jsonPath.replace("json", "yaml");
        String yamlContent = asYaml(jsonContent);
        String yamlContentWithServerInfo = addServerInfo(yamlContent, serverInfo);
        BoTestIO.writeToFile(yamlPath, yamlContentWithServerInfo);

        return yamlPath;
    }
    private static String asYaml(String jsonString) throws JsonProcessingException, IOException {
        // parse JSON
        JsonNode jsonNodeTree = new ObjectMapper().readTree(jsonString);
        // save it as YAML
        String jsonAsYaml = new YAMLMapper().writeValueAsString(jsonNodeTree);
        return jsonAsYaml;
    }

    private static String addServerInfo(String content, String serverInfo) {
        String serverContent = "servers:\n  - url: \"" + serverInfo + "\"";
        String modifiedContent = content.replace("---", "---\n" + serverContent);

        return modifiedContent;
    }

//    servers:
//            - url: "https://localhost:7166"
}