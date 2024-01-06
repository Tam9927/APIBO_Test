import javafx.application.Application;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ProgressBar;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

import java.io.File;
import java.io.FileInputStream;
import java.util.concurrent.TimeUnit;

public class Main extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    String specificationFileLocation;

    @Override
    public void start(Stage primaryStage) {
        try {
            // title for the stage
            primaryStage.setTitle("BOTest");
            Scene scene = new Scene(new StackPane(), 1200, 700);

            Image botestIcon = new Image(new FileInputStream("src/main/resources/botIcon.png"));
            primaryStage.getIcons().add(botestIcon);

            // create a File chooser
            FileChooser fil_chooser = new FileChooser();
            fil_chooser.setTitle("Select File");
            fil_chooser.setInitialDirectory(new File("src/main/resources/open-api-specifications"));

            // create a specification file label
            TextField specificationFileLabel = new TextField("No files selected ...");
            specificationFileLabel.setPrefWidth(200);
            // create a server info label
            Label serverInfo = new Label("Base URI");

            // create a text field
            TextField textFieldForServer = new TextField();
            textFieldForServer.setText("https://localhost:7166");

            // create a file button
            Button specificationFileButton = new Button("Select File");
            // create an event handler for file button
            EventHandler<ActionEvent> fileEvent =
                    e -> {
                        // get the file selected
                        File file = fil_chooser.showOpenDialog(primaryStage);

                        if (file != null) {
                            specificationFileLabel.setText(file.getName());
                        }

                        if (file != null) {
                            System.out.println(file.getAbsolutePath());
                            specificationFileLocation = file.getAbsolutePath();
                        }
                    };
            specificationFileButton.setOnAction(fileEvent);

            // create a run bot button
            Button runBotButton = new Button("Run Bot");
            runBotButton.setTranslateY(60);
            runBotButton.setPrefSize(150,30);

            runBotButton.setStyle("-fx-background-color: #090a0c,\n" +
                    "        linear-gradient(#3B90FF 0%, #090a0c 20%, #0051BB 100%),\n" +
                    "        radial-gradient(center 50% 0%, radius 100%, rgba(114,131,148,0.9), rgba(255,255,255,0));\n" +
                    "    -fx-background-radius: 5,4,3,5;\n" +
                    "    -fx-background-insets: 0,1,2,0;\n" +
                    "    -fx-text-fill: white;\n" +
                    "    -fx-effect: dropshadow( three-pass-box , rgba(0,0,0,0.6) , 5, 0.0 , 0 , 1 );\n" +
                    "    -fx-font-family: \"Arial\";\n" +
                    "    -fx-text-fill: linear-gradient(white, #d0d0d0);\n" +
                    "    -fx-font-size: 16px;\n" +
                    "    -fx-padding: 10 20 10 20;");
            // create an event handler for file button
            EventHandler<ActionEvent> runBotEvent =
                    e -> {
                        double progress = 0;
                        Bot bot = new Bot(specificationFileLocation, textFieldForServer.getText());
                        ProgressBar progressBar = new ProgressBar(progress);

                        bot.valueProperty().addListener(new ChangeListener<Double>() {
                            @Override
                            public void changed(ObservableValue<? extends Double> observableValue, Double oldValue, Double newValue) {
                                progressBar.setProgress(newValue);

                                if (newValue == 1.0) {
                                    try {
                                        TimeUnit.SECONDS.sleep(1);
                                        restart(primaryStage);
                                    } catch (InterruptedException ex) {
                                        throw new RuntimeException(ex);
                                    }
                                }
                            }
                        });

                        Thread th = new Thread(bot);
                        th.setDaemon(true);
                        th.start();

                        // As soon as test starts
                        scene.setRoot(new StackPane(progressBar));
                    };
            runBotButton.setOnAction(runBotEvent);

            Image imageBot = new Image(new FileInputStream("src/main/resources/botest.png"));
            ImageView bot = new ImageView(imageBot);
            bot.setTranslateY(-100);



            // create a HBox for server info
            HBox hbServer = new HBox();
            hbServer.getChildren().addAll(serverInfo, textFieldForServer);
            hbServer.setSpacing(10);
            hbServer.setAlignment(Pos.BASELINE_CENTER);

            // create a HBox for specification file info
            HBox hbSpecificationFile = new HBox();
            hbSpecificationFile.getChildren().addAll(specificationFileButton, specificationFileLabel);
            hbSpecificationFile.setSpacing(10);
            hbSpecificationFile.setAlignment(Pos.BASELINE_CENTER);

            // create a VBox
            VBox vbox = new VBox(30, bot, hbSpecificationFile, hbServer, runBotButton);
            // set Alignment
            vbox.setAlignment(Pos.CENTER);
            Image bgImage = new Image(new FileInputStream("src/main/resources/bg.png"));
            BackgroundImage bImg = new BackgroundImage(bgImage,
                    BackgroundRepeat.NO_REPEAT,
                    BackgroundRepeat.NO_REPEAT,
                    BackgroundPosition.DEFAULT,
                    BackgroundSize.DEFAULT);

            Background bGround = new Background(bImg);
            vbox.setBackground(bGround);
            // create a scene
            scene.setRoot(vbox);
            // set the scene
            primaryStage.setScene(scene);

            primaryStage.show();
        }

        catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private void restart(Stage stage) {
        start(stage);
    }
}
