import io.qameta.allure.Story;
import io.restassured.response.Response;
import io.restassured.http.ContentType;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.DisplayName;

public class YouTubeDataAPIv3 {

	@BeforeEach
	public void setUp() {
		RestAssured.baseURI = "https://youtube.googleapis.com";
	}

	@Test
	@Story("/youtube/v3/commentThreads")
	@DisplayName("GET /youtube/v3/commentThreads")
	public void test_SP9obpAMtygK_youtube_commentThreads_list() {
		String testResultId = "test_SP9obpAMtygK_youtube.commentThreads.list";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("videoId", "")
						.queryParam("searchTerms", "FNlyiZUC")
						.queryParam("allThreadsRelatedToChannelId", "XCqWZlcn")
						.queryParam("pageToken", "Ep")
						.queryParam("channelId", "mhuwDmpMh")
						.queryParam("moderationStatus", "kAtk")
						.queryParam("maxResults", "-1472194269")
						.queryParam("textFormat", "iMjI")
						.queryParam("order", "KWVBY")
					.when()
						.get("/youtube/v3/commentThreads");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/youtube/v3/search")
	@DisplayName("GET /youtube/v3/search")
	public void test_Zf8ZdzknTsOW_youtube_search_list() {
		String testResultId = "test_Zf8ZdzknTsOW_youtube.search.list";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("relatedToVideoId", "XYtl")
						.queryParam("locationRadius", "iNZYSgPL")
						.queryParam("safeSearch", "zHFdGoAe")
						.queryParam("videoDuration", "QEIpJsJs")
						.queryParam("videoCategoryId", "fKFNLs")
						.queryParam("videoLicense", "WxVmEk")
						.queryParam("videoType", "GTvn")
						.queryParam("publishedAfter", "BQaJt")
						.queryParam("topicId", "hrTtamHKza")
						.queryParam("eventType", "")
						.queryParam("location", "")
						.queryParam("onBehalfOfContentOwner", "Vte")
						.queryParam("q", "TfR")
						.queryParam("relevanceLanguage", "WUA")
						.queryParam("videoSyndicated", "zms")
						.queryParam("forDeveloper", "false")
						.queryParam("videoDimension", "UDQjUjjWd")
						.queryParam("publishedBefore", "reuM")
						.queryParam("pageToken", "YpAMngTCV")
						.queryParam("channelId", "lUr")
						.queryParam("videoEmbeddable", "EECps")
						.queryParam("videoDefinition", "UJcz")
						.queryParam("order", "tNKtPcIlvz")
						.queryParam("forMine", "false")
						.queryParam("regionCode", "E")
						.queryParam("maxResults", "362944551")
						.queryParam("forContentOwner", "false")
						.queryParam("channelType", "h")
						.queryParam("videoCaption", "Xvk")
					.when()
						.get("/youtube/v3/search");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/youtube/v3/videos")
	@DisplayName("GET /youtube/v3/videos")
	public void test_t96wqYvVR1Sf_youtube_videos_list() {
		String testResultId = "test_t96wqYvVR1Sf_youtube.videos.list";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("chart", "b")
						.queryParam("regionCode", "TIul")
						.queryParam("onBehalfOfContentOwner", "")
						.queryParam("pageToken", "tZ")
						.queryParam("locale", "")
						.queryParam("maxResults", "1262885483")
						.queryParam("myRating", "xMRMH")
						.queryParam("videoCategoryId", "XjWyCrUUVy")
						.queryParam("hl", "nr")
						.queryParam("maxWidth", "-702412457")
						.queryParam("maxHeight", "51252439")
					.when()
						.get("/youtube/v3/videos");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

}
