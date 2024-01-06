package helpers;

import java.io.FileWriter;
import java.io.IOException;

public class BoTestIO {
    public static void writeToFile(String pathname, String content) {
        try {
            FileWriter myWriter = new FileWriter(pathname);
            myWriter.write(content);
            myWriter.close();
            System.out.println("Successfully wrote to the file " + pathname + "...");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file " + pathname + "...");
            e.printStackTrace();
        }
    }
}
