package runners;

import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

import util.ClassLoader;

import java.util.List;

public class JUnitTestRunner {
//    private static String TEST_CLASS_PATH = "E:\\Programming\\Java\\BoTest\\target\\test-classes";
    private static String TEST_CLASS_PATH = "C:\\Users\\ahmed\\IdeaProjects\\BOTest-GUI\\src\\test\\java";
    private static String PACKAGE_NAME = "generation";
    private String testClassName;
    private Class loadedClass;

    public JUnitTestRunner(String testClassName) {
        this.testClassName = testClassName;

        String filePath = TEST_CLASS_PATH + "\\" + testClassName + ".java";
        String className = PACKAGE_NAME + "." + testClassName;

        loadedClass = ClassLoader.loadClass(filePath, className);
    }

    public void execute() {
        JUnitCore junit = new JUnitCore();

        Result result = junit.run(loadedClass);

        int runCount = result.getRunCount();
        int failCount = result.getFailureCount();
        List<Failure> failures = result.getFailures();

        System.out.println("#####");
        System.err.println("Tests Run: " + runCount);
        System.err.println("Tests Failed: " + failCount);
        System.err.println("Failures:");
        for (Failure failure: failures) {
            System.err.println(failure);
        }
    }
}
