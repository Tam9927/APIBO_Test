import io.qameta.allure.Story;
import io.restassured.response.Response;
import io.restassured.http.ContentType;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.DisplayName;

public class SwaggerPetstore {

	@BeforeEach
	public void setUp() {
		RestAssured.baseURI = "https://petstore.swagger.io/v2";
	}

	@Test
	@Story("/pet/{petId}/uploadImage")
	@DisplayName("POST /pet/{petId}/uploadImage")
	public void test_AAxDHgMCkfQW_uploadFile() {
		String testResultId = "test_AAxDHgMCkfQW_uploadFile";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("petId", "11311140")
					.when()
						.post("/pet/{petId}/uploadImage");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/pet")
	@DisplayName("POST /pet")
	public void test_AWeY2Pcf4P5g_addPet() {
		String testResultId = "test_AWeY2Pcf4P5g_addPet";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"name\":\"\",\"id\":-44037049,\"category\":{\"name\":\"kYjdgsHIt\",\"id\":1365286758},\"status\":\"\"}")
					.when()
						.post("/pet");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/pet")
	@DisplayName("PUT /pet")
	public void test_2sXsBqJpOoA5_updatePet() {
		String testResultId = "test_2sXsBqJpOoA5_updatePet";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"name\":\"wmmVEda\",\"id\":1828720597,\"category\":{\"name\":\"HE\",\"id\":-1675322200},\"status\":\"ND\"}")
					.when()
						.put("/pet");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/pet/findByStatus")
	@DisplayName("GET /pet/findByStatus")
	public void test_S76byOAK1fAk_findPetsByStatus() {
		String testResultId = "test_S76byOAK1fAk_findPetsByStatus";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/pet/findByStatus");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/pet/findByTags")
	@DisplayName("GET /pet/findByTags")
	public void test_islp4tReiSuZ_findPetsByTags() {
		String testResultId = "test_islp4tReiSuZ_findPetsByTags";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/pet/findByTags");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/pet/{petId}")
	@DisplayName("GET /pet/{petId}")
	public void test_A8sbez18y95p_getPetById() {
		String testResultId = "test_A8sbez18y95p_getPetById";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("petId", "499161376")
					.when()
						.get("/pet/{petId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/pet/{petId}")
	@DisplayName("POST /pet/{petId}")
	public void test_w9TAOej6bohX_updatePetWithForm() {
		String testResultId = "test_w9TAOej6bohX_updatePetWithForm";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("petId", "-243230496")
					.when()
						.post("/pet/{petId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/pet/{petId}")
	@DisplayName("DELETE /pet/{petId}")
	public void test_QisTjBhblGTq_deletePet() {
		String testResultId = "test_QisTjBhblGTq_deletePet";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("api_key", "T")
						.pathParam("petId", "-169833664")
					.when()
						.delete("/pet/{petId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/store/order")
	@DisplayName("POST /store/order")
	public void test_juMyWn6LzntJ_placeOrder() {
		String testResultId = "test_juMyWn6LzntJ_placeOrder";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"petId\":382110168,\"quantity\":-39675738,\"id\":183406404,\"shipDate\":\"RlpeGp\",\"complete\":true,\"status\":\"PrTvy\"}")
					.when()
						.post("/store/order");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/store/order/{orderId}")
	@DisplayName("GET /store/order/{orderId}")
	public void test_xL8J51iJ30Q1_getOrderById() {
		String testResultId = "test_xL8J51iJ30Q1_getOrderById";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("orderId", "-1715204533")
					.when()
						.get("/store/order/{orderId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/store/order/{orderId}")
	@DisplayName("DELETE /store/order/{orderId}")
	public void test_KWjNUPgMOXIJ_deleteOrder() {
		String testResultId = "test_KWjNUPgMOXIJ_deleteOrder";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("orderId", "2017631220")
					.when()
						.delete("/store/order/{orderId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/store/inventory")
	@DisplayName("GET /store/inventory")
	public void test_x3kUIVp18AFt_getInventory() {
		String testResultId = "test_x3kUIVp18AFt_getInventory";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/store/inventory");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user/createWithArray")
	@DisplayName("POST /user/createWithArray")
	public void test_CnMWQP3nJpm6_createUsersWithArrayInput() {
		String testResultId = "test_CnMWQP3nJpm6_createUsersWithArrayInput";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/user/createWithArray");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user/createWithList")
	@DisplayName("POST /user/createWithList")
	public void test_YwHRffz6H0dm_createUsersWithListInput() {
		String testResultId = "test_YwHRffz6H0dm_createUsersWithListInput";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/user/createWithList");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user/{username}")
	@DisplayName("GET /user/{username}")
	public void test_5bz0JkYDh8he_getUserByName() {
		String testResultId = "test_5bz0JkYDh8he_getUserByName";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("username", "Q")
					.when()
						.get("/user/{username}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user/{username}")
	@DisplayName("PUT /user/{username}")
	public void test_PLTKxgYu7G51_updateUser() {
		String testResultId = "test_PLTKxgYu7G51_updateUser";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("username", "Z")
						.contentType(ContentType.JSON)
						.body("{\"firstName\":\"FGKd\",\"lastName\":\"tHkREn\",\"password\":\"vqF\",\"userStatus\":-2006839549,\"phone\":\"\",\"id\":226921416,\"email\":\"anFRmGQ\",\"username\":\"pTqUo\"}")
					.when()
						.put("/user/{username}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user/{username}")
	@DisplayName("DELETE /user/{username}")
	public void test_TTiHmowxMye3_deleteUser() {
		String testResultId = "test_TTiHmowxMye3_deleteUser";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("username", "")
					.when()
						.delete("/user/{username}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user/login")
	@DisplayName("GET /user/login")
	public void test_eNKbWHIJAbJM_loginUser() {
		String testResultId = "test_eNKbWHIJAbJM_loginUser";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("username", "")
						.queryParam("password", "eVpbZQ")
					.when()
						.get("/user/login");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user/logout")
	@DisplayName("GET /user/logout")
	public void test_X40B5v7UuWlh_logoutUser() {
		String testResultId = "test_X40B5v7UuWlh_logoutUser";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/user/logout");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/user")
	@DisplayName("POST /user")
	public void test_sWe44GUuTp52_createUser() {
		String testResultId = "test_sWe44GUuTp52_createUser";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"firstName\":\"agl\",\"lastName\":\"IAJFsi\",\"password\":\"wcHJZIvi\",\"userStatus\":1742997727,\"phone\":\"VsMdGWL\",\"id\":709140024,\"email\":\"MItWAW\",\"username\":\"GgYkVVXasK\"}")
					.when()
						.post("/user");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

}
