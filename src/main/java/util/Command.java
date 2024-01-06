package util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Command {
    public static void execute(String arg) throws IOException {
        ProcessBuilder builder = new ProcessBuilder(
                "cmd.exe", "/c", arg);
        builder.redirectErrorStream(true);
        Process p = builder.start();

        BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
        String line;
        while (true) {
            line = r.readLine();
            if (line == null || arg.equals("allure serve target/allure-results")) {
                break;
            }
            System.out.println(line);
        }

        p.destroy();
    }
}
