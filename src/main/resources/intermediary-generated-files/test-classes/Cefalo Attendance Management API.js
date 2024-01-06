import io.qameta.allure.Story;
import io.restassured.response.Response;
import io.restassured.http.ContentType;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.DisplayName;

public class CefaloAttendanceManagementAPI {

	@BeforeEach
	public void setUp() {
		RestAssured.baseURI = "https://localhost:5001";
	}

	@Test
	@Story("/api/Users/{id}/Attendances/{FromDate}/{ToDate}")
	@DisplayName("GET /api/Users/{id}/Attendances/{FromDate}/{ToDate}")
	public void test_r6nTv0Te7egL_null() {
		String testResultId = "test_r6nTv0Te7egL_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("IncludeHolidays", "false")
						.queryParam("IncludeWeekends", "true")
						.queryParam("StatusType", "1692802879")
						.pathParam("id", "2038863914")
						.pathParam("FromDate", "IWt")
						.pathParam("ToDate", "GvnGY")
					.when()
						.get("/api/Users/{id}/Attendances/{FromDate}/{ToDate}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Attendances/{FromDate}/{ToDate}")
	@DisplayName("GET /api/Attendances/{FromDate}/{ToDate}")
	public void test_VpGzjRMqN6vy_null() {
		String testResultId = "test_VpGzjRMqN6vy_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("statusType", "232918915")
						.pathParam("FromDate", "")
						.pathParam("ToDate", "fBWlGe")
					.when()
						.get("/api/Attendances/{FromDate}/{ToDate}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Attendances/{id}")
	@DisplayName("PUT /api/Attendances/{id}")
	public void test_bHjBgnZvy8H8_null() {
		String testResultId = "test_bHjBgnZvy8H8_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1927017955")
						.contentType(ContentType.JSON)
						.body("{date:\"HsLzjpX\",startTime:\"iVC\",id:-1937367555,endTime:\"NePrjXlH\",userId:556014141}")
					.when()
						.put("/api/Attendances/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{id}/Attendances/{FromDate}/{ToDate}/Download")
	@DisplayName("GET /api/Users/{id}/Attendances/{FromDate}/{ToDate}/Download")
	public void test_DC1IYUuDaJBI_null() {
		String testResultId = "test_DC1IYUuDaJBI_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("IncludeHolidays", "true")
						.queryParam("IncludeWeekends", "false")
						.queryParam("StatusType", "-482047204")
						.pathParam("id", "-844723382")
						.pathParam("FromDate", "sFHXn")
						.pathParam("ToDate", "cNmi")
					.when()
						.get("/api/Users/{id}/Attendances/{FromDate}/{ToDate}/Download");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Attendances/{FromDate}/{ToDate}/Download")
	@DisplayName("GET /api/Attendances/{FromDate}/{ToDate}/Download")
	public void test_HIjZIZpqdfrB_null() {
		String testResultId = "test_HIjZIZpqdfrB_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("statusType", "1287954362")
						.pathParam("FromDate", "STH")
						.pathParam("ToDate", "qlK")
					.when()
						.get("/api/Attendances/{FromDate}/{ToDate}/Download");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Attendances")
	@DisplayName("GET /api/Attendances")
	public void test_VXhUdQd7kqAu_null() {
		String testResultId = "test_VXhUdQd7kqAu_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Attendances");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Attendances/StatusTypes")
	@DisplayName("GET /api/Attendances/StatusTypes")
	public void test_LKyQQGIFGTII_null() {
		String testResultId = "test_LKyQQGIFGTII_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Attendances/StatusTypes");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Attendances/DataSync/{FromDate}/{ToDate}")
	@DisplayName("POST /api/Attendances/DataSync/{FromDate}/{ToDate}")
	public void test_3JIePo1L4rvF_null() {
		String testResultId = "test_3JIePo1L4rvF_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("FromDate", "FTBc")
						.pathParam("ToDate", "ZGDbWOAT")
					.when()
						.post("/api/Attendances/DataSync/{FromDate}/{ToDate}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Authentication/Internal")
	@DisplayName("POST /api/Authentication/Internal")
	public void test_fB2pKrd1CRrE_null() {
		String testResultId = "test_fB2pKrd1CRrE_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{password:\"PQfSzDpz\",email:\"fAXVq\"}")
					.when()
						.post("/api/Authentication/Internal");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Authentication/Google")
	@DisplayName("POST /api/Authentication/Google")
	public void test_cU3ByarlzJGO_null() {
		String testResultId = "test_cU3ByarlzJGO_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{googleTokenID:\"SWtpz\"}")
					.when()
						.post("/api/Authentication/Google");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications")
	@DisplayName("GET /Api/ExtraWorkApplications")
	public void test_lyhwWkCim3LX_null() {
		String testResultId = "test_lyhwWkCim3LX_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "-1879012076")
						.queryParam("FromDate", "nyLX")
						.queryParam("ApplicationStatus", "1229359498")
						.queryParam("ApplicationType", "2072288616")
						.queryParam("SearchValue", "GYtqIa")
						.queryParam("ToDate", "TcMVZbbY")
						.queryParam("PageNumber", "-276555585")
					.when()
						.get("/Api/ExtraWorkApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications")
	@DisplayName("POST /Api/ExtraWorkApplications")
	public void test_Mmqu5j5Y9B9t_null() {
		String testResultId = "test_Mmqu5j5Y9B9t_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{fromDate:\"h\",adjustmentType:-1006592906,created:\"VOcqbB\",toDate:\"eLN\",supervisorComment:\"fxPZiBARC\",description:\"i\",id:444735153,userId:-635429705,status:-515629191}")
					.when()
						.post("/Api/ExtraWorkApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/{id}")
	@DisplayName("GET /Api/ExtraWorkApplications/{id}")
	public void test_h20ZcPdSd8DU_null() {
		String testResultId = "test_h20ZcPdSd8DU_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1376131641")
					.when()
						.get("/Api/ExtraWorkApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/{id}")
	@DisplayName("PUT /Api/ExtraWorkApplications/{id}")
	public void test_Se2IxggDfQri_null() {
		String testResultId = "test_Se2IxggDfQri_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1109789531")
						.contentType(ContentType.JSON)
						.body("{fromDate:\"b\",adjustmentType:1613012280,created:\"ksk\",toDate:\"m\",paid:true,supervisorComment:\"ib\",description:\"MUhU\",id:-912258237,userId:191011620,status:1840160036}")
					.when()
						.put("/Api/ExtraWorkApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/{id}")
	@DisplayName("DELETE /Api/ExtraWorkApplications/{id}")
	public void test_cEcgh593B1vW_null() {
		String testResultId = "test_cEcgh593B1vW_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-557573569")
					.when()
						.delete("/Api/ExtraWorkApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/Status")
	@DisplayName("PATCH /Api/ExtraWorkApplications/Status")
	public void test_XwBwVoYD7WFR_null() {
		String testResultId = "test_XwBwVoYD7WFR_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{supervisorComment:\"uuFRcfhQ\",id:1560451940,status:621153631}")
					.when()
						.patch("/Api/ExtraWorkApplications/Status");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/{userId}/ExtraWorkApplications")
	@DisplayName("GET /Api/Users/{userId}/ExtraWorkApplications")
	public void test_SBVc596pex8p_null() {
		String testResultId = "test_SBVc596pex8p_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "-938993543")
						.queryParam("FromDate", "eXBRncR")
						.queryParam("ApplicationStatus", "-2122020004")
						.queryParam("ApplicationType", "-658466640")
						.queryParam("SearchValue", "A")
						.queryParam("ToDate", "aYFGUoOThU")
						.queryParam("PageNumber", "-1880745285")
						.pathParam("userId", "306482568")
					.when()
						.get("/Api/Users/{userId}/ExtraWorkApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/DataFilePreview")
	@DisplayName("POST /Api/ExtraWorkApplications/DataFilePreview")
	public void test_MWuJ1HyP7jr7_null() {
		String testResultId = "test_MWuJ1HyP7jr7_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/Api/ExtraWorkApplications/DataFilePreview");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/Upload")
	@DisplayName("POST /Api/ExtraWorkApplications/Upload")
	public void test_hzu62acTnfpg_null() {
		String testResultId = "test_hzu62acTnfpg_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/Api/ExtraWorkApplications/Upload");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/AllStatus")
	@DisplayName("GET /Api/ExtraWorkApplications/AllStatus")
	public void test_CAHJ4lfzvCX0_null() {
		String testResultId = "test_CAHJ4lfzvCX0_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/ExtraWorkApplications/AllStatus");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/ExtraWorkApplications/AllTypes")
	@DisplayName("GET /Api/ExtraWorkApplications/AllTypes")
	public void test_AIWBC1Y8rcMv_null() {
		String testResultId = "test_AIWBC1Y8rcMv_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/ExtraWorkApplications/AllTypes");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/File")
	@DisplayName("POST /api/File")
	public void test_nFIq9v6sKrgI_null() {
		String testResultId = "test_nFIq9v6sKrgI_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/api/File");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/File/{fileName}")
	@DisplayName("GET /api/File/{fileName}")
	public void test_dK8DIMxiMHJW_null() {
		String testResultId = "test_dK8DIMxiMHJW_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("fileName", "BUEIpUEp")
					.when()
						.get("/api/File/{fileName}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/File/ValidationCriteria/{fileType}")
	@DisplayName("GET /api/File/ValidationCriteria/{fileType}")
	public void test_a7LYq4ZBqFp5_null() {
		String testResultId = "test_a7LYq4ZBqFp5_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("fileType", "ByMYIFiV")
					.when()
						.get("/api/File/ValidationCriteria/{fileType}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications")
	@DisplayName("GET /Api/LeaveApplications")
	public void test_52qEBubcI0oK_null() {
		String testResultId = "test_52qEBubcI0oK_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "1395002397")
						.queryParam("FromDate", "dLOAw")
						.queryParam("ApplicationStatus", "-1880843858")
						.queryParam("ApplicationType", "1715739689")
						.queryParam("SearchValue", "")
						.queryParam("ToDate", "utUQi")
						.queryParam("PageNumber", "-1237017558")
					.when()
						.get("/Api/LeaveApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications")
	@DisplayName("POST /Api/LeaveApplications")
	public void test_ru8OyWzhwXaG_null() {
		String testResultId = "test_ru8OyWzhwXaG_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{created:\"ffekMq\",toDate:\"bAuk\",description:\"cNpuQ\",includeSingleHalfDay:false,leaveTypeDisplayName:\"YIMCzluLuv\",leaveSupportingDocumentName:\"pNdJw\",userId:-27091978,fromDate:\"vRTqM\",leaveType:-421394427,supervisorComment:\"sLWyXEhzDE\",leaveStatusDisplayName:\"iYOACd\",id:195170177,status:-12313349}")
					.when()
						.post("/Api/LeaveApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/{id}")
	@DisplayName("GET /Api/LeaveApplications/{id}")
	public void test_UVvc6rqi27LC_null() {
		String testResultId = "test_UVvc6rqi27LC_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "2095614296")
					.when()
						.get("/Api/LeaveApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/{id}")
	@DisplayName("PUT /Api/LeaveApplications/{id}")
	public void test_zK3xUYObV2qk_null() {
		String testResultId = "test_zK3xUYObV2qk_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1052501073")
						.contentType(ContentType.JSON)
						.body("{created:\"yIYfqWy\",toDate:\"FUZLgPqFKw\",description:\"\",includeSingleHalfDay:true,leaveTypeDisplayName:\"VDpxZmo\",leaveSupportingDocumentName:\"pdahJ\",userId:1631755236,fromDate:\"WkJih\",leaveType:-975037151,supervisorComment:\"jaupJX\",leaveStatusDisplayName:\"UlSsmZN\",id:1939906342,status:107252508}")
					.when()
						.put("/Api/LeaveApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/{id}")
	@DisplayName("DELETE /Api/LeaveApplications/{id}")
	public void test_iQtcIBJcQRMp_null() {
		String testResultId = "test_iQtcIBJcQRMp_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-379580859")
					.when()
						.delete("/Api/LeaveApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/{userId}/LeaveApplications")
	@DisplayName("GET /Api/Users/{userId}/LeaveApplications")
	public void test_cPHZBdgEgSjO_null() {
		String testResultId = "test_cPHZBdgEgSjO_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "-649946316")
						.queryParam("FromDate", "kZi")
						.queryParam("ApplicationStatus", "587340711")
						.queryParam("ApplicationType", "734792087")
						.queryParam("SearchValue", "VBlKcSrxoh")
						.queryParam("ToDate", "UqL")
						.queryParam("PageNumber", "2087100078")
						.pathParam("userId", "1285721488")
					.when()
						.get("/Api/Users/{userId}/LeaveApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/Status")
	@DisplayName("PATCH /Api/LeaveApplications/Status")
	public void test_0nAw42xctgr7_null() {
		String testResultId = "test_0nAw42xctgr7_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{id:1252268845,message:\"Q\",status:1045043519}")
					.when()
						.patch("/Api/LeaveApplications/Status");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/DataFilePreview")
	@DisplayName("POST /Api/LeaveApplications/DataFilePreview")
	public void test_WLIDTasiKdsP_null() {
		String testResultId = "test_WLIDTasiKdsP_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/Api/LeaveApplications/DataFilePreview");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/Upload")
	@DisplayName("POST /Api/LeaveApplications/Upload")
	public void test_WCN7cJP38GAL_null() {
		String testResultId = "test_WCN7cJP38GAL_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/Api/LeaveApplications/Upload");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/AllStatus")
	@DisplayName("GET /Api/LeaveApplications/AllStatus")
	public void test_dKrrz1cjjGmt_null() {
		String testResultId = "test_dKrrz1cjjGmt_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/LeaveApplications/AllStatus");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/AllTypes")
	@DisplayName("GET /Api/LeaveApplications/AllTypes")
	public void test_KcQIt2cnokbd_null() {
		String testResultId = "test_KcQIt2cnokbd_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/LeaveApplications/AllTypes");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/LeaveApplications/LeaveTypes/{userId}")
	@DisplayName("GET /Api/LeaveApplications/LeaveTypes/{userId}")
	public void test_pQVK0kEf662b_null() {
		String testResultId = "test_pQVK0kEf662b_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("userId", "1845759193")
					.when()
						.get("/Api/LeaveApplications/LeaveTypes/{userId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/{userId}/LeaveBalance/{year}")
	@DisplayName("GET /Api/Users/{userId}/LeaveBalance/{year}")
	public void test_xpzL9j0LRvcs_null() {
		String testResultId = "test_xpzL9j0LRvcs_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("userId", "1795202148")
						.pathParam("year", "1478531826")
					.when()
						.get("/Api/Users/{userId}/LeaveBalance/{year}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/LeaveBalance/{year}")
	@DisplayName("GET /Api/Users/LeaveBalance/{year}")
	public void test_ALCyeiu0cOEQ_null() {
		String testResultId = "test_ALCyeiu0cOEQ_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("year", "1669373238")
					.when()
						.get("/Api/Users/LeaveBalance/{year}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/LeaveBalance/LeaveStatistics/{year}")
	@DisplayName("GET /Api/Users/LeaveBalance/LeaveStatistics/{year}")
	public void test_xJo80Sk5HYrE_null() {
		String testResultId = "test_xJo80Sk5HYrE_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "-978838211")
						.queryParam("TeamNames", "ubFUkDELr")
						.queryParam("SearchValue", "bYfQVBUtq")
						.queryParam("Name", "HXSkdEhaX")
						.queryParam("PageNumber", "627481576")
						.pathParam("year", "-1763669168")
					.when()
						.get("/Api/Users/LeaveBalance/LeaveStatistics/{year}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/LeaveBalance/LeaveStatistics/{year}/Download")
	@DisplayName("GET /Api/Users/LeaveBalance/LeaveStatistics/{year}/Download")
	public void test_eR8EhSgu7NRY_null() {
		String testResultId = "test_eR8EhSgu7NRY_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "-185720923")
						.queryParam("TeamNames", "mh")
						.queryParam("SearchValue", "QWSlkove")
						.queryParam("Name", "WO")
						.queryParam("PageNumber", "-1622930149")
						.pathParam("year", "1401030999")
					.when()
						.get("/Api/Users/LeaveBalance/LeaveStatistics/{year}/Download");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/LeaveBalance/Adjust/{year}")
	@DisplayName("GET /Api/Users/LeaveBalance/Adjust/{year}")
	public void test_Mkf5bhRXEtga_null() {
		String testResultId = "test_Mkf5bhRXEtga_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("year", "2074351663")
					.when()
						.get("/Api/Users/LeaveBalance/Adjust/{year}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/LeaveBalance/DataFilePreview")
	@DisplayName("POST /Api/Users/LeaveBalance/DataFilePreview")
	public void test_5wNOZqbM93Jd_null() {
		String testResultId = "test_5wNOZqbM93Jd_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/Api/Users/LeaveBalance/DataFilePreview");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/LeaveBalance/Upload")
	@DisplayName("POST /Api/Users/LeaveBalance/Upload")
	public void test_W5eJ6NJMGV8O_null() {
		String testResultId = "test_W5eJ6NJMGV8O_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/Api/Users/LeaveBalance/Upload");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/OfficeTimings")
	@DisplayName("GET /Api/OfficeTimings")
	public void test_kGKQUx9MC4FK_null() {
		String testResultId = "test_kGKQUx9MC4FK_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/OfficeTimings");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/OfficeTimings")
	@DisplayName("POST /Api/OfficeTimings")
	public void test_Tq1rBmkX7lzC_null() {
		String testResultId = "test_Tq1rBmkX7lzC_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{isDefaultOfficeTiming:false,endDate:\"QWeH\",officeStartTime:{milliseconds:-1820320073,hours:-496984860,seconds:1216776344,ticks:-2033971447,minutes:-224387979,days:1212844766},created:\"lhiWDUZrb\",creatorId:-993519559,creatorName:\"tobN\",lastModifierId:1514180374,lastModifierName:\"MPscbV\",lastModified:\"i\",id:-1365242473,startDate:\"FIllC\"}")
					.when()
						.post("/Api/OfficeTimings");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/OfficeTimings/{id}")
	@DisplayName("GET /Api/OfficeTimings/{id}")
	public void test_34oYP2SmuCIq_null() {
		String testResultId = "test_34oYP2SmuCIq_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "2007407402")
					.when()
						.get("/Api/OfficeTimings/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/OfficeTimings/{id}")
	@DisplayName("PUT /Api/OfficeTimings/{id}")
	public void test_rCFo0fFYxk7g_null() {
		String testResultId = "test_rCFo0fFYxk7g_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1098915109")
						.contentType(ContentType.JSON)
						.body("{isDefaultOfficeTiming:true,endDate:\"O\",officeStartTime:{milliseconds:1105857167,hours:262277781,seconds:696520075,ticks:-1694328538,minutes:1602230833,days:1814202692},created:\"trvYoF\",creatorId:766254241,creatorName:\"GZLJi\",lastModifierId:1065618015,lastModifierName:\"YBX\",lastModified:\"pcYKoCPq\",id:-2147182292,startDate:\"gKAG\"}")
					.when()
						.put("/Api/OfficeTimings/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/OfficeTimings/{id}")
	@DisplayName("DELETE /Api/OfficeTimings/{id}")
	public void test_mbNzTbNRHP41_null() {
		String testResultId = "test_mbNzTbNRHP41_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "233053625")
					.when()
						.delete("/Api/OfficeTimings/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Profiles")
	@DisplayName("POST /api/Profiles")
	public void test_bLexhFdWavBH_null() {
		String testResultId = "test_bLexhFdWavBH_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{photoFileName:\"\",role:\"NfBc\",displayName:\"qQCmH\",mobileNumber:\"ASaEJKNb\",joiningDate:\"KpqukZbh\",profilePersonalInfoDto:{passportNumber:\"BgZrGRU\",nidNumber:\"\",created:\"vkLqM\",creatorId:734268173,creatorName:\"qUE\",dateOfBirth:\"SQCNGvWB\",lastModifierName:\"dhUJS\",bloodGroup:\"QIErwwuSMo\",lastModifierId:-1862136365,lastModified:\"yujpXiy\",id:1459785216,age:\"tEW\",maritalStatus:\"G\"},userId:-364737916,profileContactInfoDto:{created:\"UgIa\",secondaryContactName:\"DdPifYFCB\",creatorId:-838722509,creatorName:\"pJf\",lastModifierName:\"stI\",secondaryContactRelation:\"C\",personalEmail:\"KRxBXJcdGy\",presentAddress:\"ft\",secondaryContactPhoneNo:\"BKvYfJCY\",lastModifierId:-2000287479,permanentAddress:\"G\",lastModified:\"fgjwhDSWD\",id:1323306117},careerStartDate:\"N\",teamRole:\"QIfL\",designation:\"C\",id:1214548492,slackDisplayName:\"hBlqNBQb\",cvLink:\"MuM\"}")
					.when()
						.post("/api/Profiles");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{id}/Profile")
	@DisplayName("GET /api/Users/{id}/Profile")
	public void test_sdQK9yGf9mbq_null() {
		String testResultId = "test_sdQK9yGf9mbq_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-540932091")
					.when()
						.get("/api/Users/{id}/Profile");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{id}/Profile/Short")
	@DisplayName("GET /api/Users/{id}/Profile/Short")
	public void test_gbbgKz825Pta_null() {
		String testResultId = "test_gbbgKz825Pta_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1906478656")
					.when()
						.get("/api/Users/{id}/Profile/Short");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/BloodGroups")
	@DisplayName("GET /api/BloodGroups")
	public void test_oM6dOzOLPdxq_null() {
		String testResultId = "test_oM6dOzOLPdxq_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/BloodGroups");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Skills")
	@DisplayName("GET /api/Skills")
	public void test_wThBwYAltThS_null() {
		String testResultId = "test_wThBwYAltThS_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Skills");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PublicHolidays/{id}")
	@DisplayName("GET /api/PublicHolidays/{id}")
	public void test_vp0VFcywSTpn_null() {
		String testResultId = "test_vp0VFcywSTpn_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1524931052")
					.when()
						.get("/api/PublicHolidays/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PublicHolidays/{id}")
	@DisplayName("PUT /api/PublicHolidays/{id}")
	public void test_nHY4oMpfUaTc_null() {
		String testResultId = "test_nHY4oMpfUaTc_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "641732487")
						.contentType(ContentType.JSON)
						.body("{date:\"lvkuvYLSN\",dayName:\"UHdRET\",ticks:-1088025505,name:\"pzLCWzOnHW\",description:\"\",id:88868869,isPast:true}")
					.when()
						.put("/api/PublicHolidays/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PublicHolidays/{id}")
	@DisplayName("DELETE /api/PublicHolidays/{id}")
	public void test_6m8QTAwLL5m9_null() {
		String testResultId = "test_6m8QTAwLL5m9_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "495230714")
					.when()
						.delete("/api/PublicHolidays/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PublicHolidays")
	@DisplayName("GET /api/PublicHolidays")
	public void test_fuk0mpUzfoUN_null() {
		String testResultId = "test_fuk0mpUzfoUN_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("year", "-487974145")
					.when()
						.get("/api/PublicHolidays");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PublicHolidays")
	@DisplayName("POST /api/PublicHolidays")
	public void test_JaXm8imTf6Mu_null() {
		String testResultId = "test_JaXm8imTf6Mu_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{date:\"LEdi\",dayName:\"dXYydPpJ\",ticks:874941016,name:\"AYmws\",description:\"OiyGyZhKl\",id:-731607206,isPast:true}")
					.when()
						.post("/api/PublicHolidays");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PublicHolidays/File")
	@DisplayName("POST /api/PublicHolidays/File")
	public void test_GyCqzE2tMAb2_null() {
		String testResultId = "test_GyCqzE2tMAb2_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/api/PublicHolidays/File");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/RemoteWorkApplications")
	@DisplayName("GET /Api/RemoteWorkApplications")
	public void test_VV34KXIVd46q_null() {
		String testResultId = "test_VV34KXIVd46q_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "-1606021857")
						.queryParam("FromDate", "yUdjRQOPW")
						.queryParam("ApplicationStatus", "-326853270")
						.queryParam("ApplicationType", "975178323")
						.queryParam("SearchValue", "hcOi")
						.queryParam("ToDate", "V")
						.queryParam("PageNumber", "528877643")
					.when()
						.get("/Api/RemoteWorkApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/RemoteWorkApplications")
	@DisplayName("POST /Api/RemoteWorkApplications")
	public void test_t14mWlUVhGKS_null() {
		String testResultId = "test_t14mWlUVhGKS_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{remoteWorkStatusDisplayName:\"wNCSmBGC\",remoteWorkTypeDisplayName:\"\",created:\"Sik\",toDate:\"\",totalNumberOfWorkingDays:1287920175,description:\"\",type:-1215914244,userId:-2115887501,applicant:{name:\"\"},fromDate:\"aoBCfhXdmp\",supervisorComment:\"fSKsB\",id:-513635262,status:2038696077}")
					.when()
						.post("/Api/RemoteWorkApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/{userId}/RemoteWorkApplications/{id}")
	@DisplayName("GET /Api/Users/{userId}/RemoteWorkApplications/{id}")
	public void test_WV2HEO5c0VoX_null() {
		String testResultId = "test_WV2HEO5c0VoX_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1841128714")
						.pathParam("userId", "-415228041")
					.when()
						.get("/Api/Users/{userId}/RemoteWorkApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Users/{userId}/RemoteWorkApplications")
	@DisplayName("GET /Api/Users/{userId}/RemoteWorkApplications")
	public void test_rrrnnWprvSwE_null() {
		String testResultId = "test_rrrnnWprvSwE_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("PageSize", "1528995488")
						.queryParam("FromDate", "")
						.queryParam("ApplicationStatus", "-569898869")
						.queryParam("ApplicationType", "-91971990")
						.queryParam("SearchValue", "nrtHzc")
						.queryParam("ToDate", "lTfu")
						.queryParam("PageNumber", "1658850647")
						.pathParam("userId", "2135072688")
					.when()
						.get("/Api/Users/{userId}/RemoteWorkApplications");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/RemoteWorkApplications/AllApplicationStatus")
	@DisplayName("GET /Api/RemoteWorkApplications/AllApplicationStatus")
	public void test_2CZtm3iOvvMM_null() {
		String testResultId = "test_2CZtm3iOvvMM_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/RemoteWorkApplications/AllApplicationStatus");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/RemoteWorkApplications/Type")
	@DisplayName("GET /Api/RemoteWorkApplications/Type")
	public void test_tHnRQFWs5YEa_null() {
		String testResultId = "test_tHnRQFWs5YEa_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/RemoteWorkApplications/Type");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/RemoteWorkApplications/{id}")
	@DisplayName("PUT /Api/RemoteWorkApplications/{id}")
	public void test_fF0G0rrMe9ng_null() {
		String testResultId = "test_fF0G0rrMe9ng_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-340879248")
						.contentType(ContentType.JSON)
						.body("{remoteWorkStatusDisplayName:\"IlHSNn\",remoteWorkTypeDisplayName:\"rjqSvXhc\",created:\"kGtlwIHz\",toDate:\"Sdjh\",totalNumberOfWorkingDays:-1987704759,description:\"ueyso\",type:-1983870320,userId:1321502750,applicant:{name:\"eSU\"},fromDate:\"tO\",supervisorComment:\"zATNpJrgX\",id:1061555615,status:-859562709}")
					.when()
						.put("/Api/RemoteWorkApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/RemoteWorkApplications/{id}")
	@DisplayName("DELETE /Api/RemoteWorkApplications/{id}")
	public void test_77P4zoVJEMxV_null() {
		String testResultId = "test_77P4zoVJEMxV_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "794953925")
					.when()
						.delete("/Api/RemoteWorkApplications/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/RemoteWorkApplications/UpdateStatus")
	@DisplayName("PATCH /Api/RemoteWorkApplications/UpdateStatus")
	public void test_Pb4J8qRzcYQF_null() {
		String testResultId = "test_Pb4J8qRzcYQF_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{id:-1874458165,message:\"gCSwn\",status:-641721501}")
					.when()
						.patch("/Api/RemoteWorkApplications/UpdateStatus");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Settings")
	@DisplayName("GET /Api/Settings")
	public void test_5Exl0B0bf6B7_null() {
		String testResultId = "test_5Exl0B0bf6B7_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/Settings");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Settings")
	@DisplayName("POST /Api/Settings")
	public void test_NAEkBXYUrtKD_null() {
		String testResultId = "test_NAEkBXYUrtKD_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{hrPolicyDocsUrl:\"zCEEpXHJ\",knowledgeSharingSessionsDocsUrl:\"okFbrVgPr\",weeklyWorkFromHomeLimit:-1061020811,created:\"S\",itPolicyDocsUrl:\"FXmd\",allowedCancellationPeriod:1321639486,creatorId:-26338511,creatorName:\"YCxOuqgYAD\",lastModifierName:\"otq\",internalLoginPassword:\"RFVFkSEom\",applicationRequestEmailRecipients:\"oxLckzdUEo\",lastModifierId:392207718,applicationConfirmationEmailRecipients:\"rSQoiEckTo\",lastModified:\"gKDNvi\",id:-1310552704,internalLoginEmail:\"wcWkvOuW\",adminEmail:\"DnoEPi\"}")
					.when()
						.post("/Api/Settings");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Settings/Leave")
	@DisplayName("GET /Api/Settings/Leave")
	public void test_I8iOP2jvV8PO_null() {
		String testResultId = "test_I8iOP2jvV8PO_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/Settings/Leave");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Settings/PolicyDocs")
	@DisplayName("GET /Api/Settings/PolicyDocs")
	public void test_AkK6Du696I1h_null() {
		String testResultId = "test_AkK6Du696I1h_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/Settings/PolicyDocs");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/Api/Settings/Profile")
	@DisplayName("GET /Api/Settings/Profile")
	public void test_DoKjg72VY4BL_null() {
		String testResultId = "test_DoKjg72VY4BL_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/Api/Settings/Profile");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams")
	@DisplayName("GET /api/Teams")
	public void test_o7QGbwoMB1Q3_null() {
		String testResultId = "test_o7QGbwoMB1Q3_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Teams");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams")
	@DisplayName("POST /api/Teams")
	public void test_rTkueXSEbhf9_null() {
		String testResultId = "test_rTkueXSEbhf9_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{clientEmail:\"OubQXHMj\",name:\"CSqlZkVO\",teamEmail:\"cd\",id:952110741,isActive:true}")
					.when()
						.post("/api/Teams");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams/{id}")
	@DisplayName("GET /api/Teams/{id}")
	public void test_eettdKgn6B3d_null() {
		String testResultId = "test_eettdKgn6B3d_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1506184654")
					.when()
						.get("/api/Teams/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams/{id}")
	@DisplayName("PUT /api/Teams/{id}")
	public void test_Eqjcl5vjW2Sb_null() {
		String testResultId = "test_Eqjcl5vjW2Sb_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-304080463")
						.contentType(ContentType.JSON)
						.body("{clientEmail:\"eyXvO\",name:\"aFfirIvtW\",teamEmail:\"IqWdEVlI\",id:1090787885,isActive:true}")
					.when()
						.put("/api/Teams/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams/{id}")
	@DisplayName("DELETE /api/Teams/{id}")
	public void test_T6d9PbFsU7B9_null() {
		String testResultId = "test_T6d9PbFsU7B9_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "48406128")
					.when()
						.delete("/api/Teams/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams/Member")
	@DisplayName("GET /api/Teams/Member")
	public void test_2P1qzMlNZaWw_null() {
		String testResultId = "test_2P1qzMlNZaWw_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Teams/Member");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams/{teamId}/Member")
	@DisplayName("GET /api/Teams/{teamId}/Member")
	public void test_YnurEXdxUoF8_null() {
		String testResultId = "test_YnurEXdxUoF8_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("teamId", "-2021224628")
					.when()
						.get("/api/Teams/{teamId}/Member");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams/Members")
	@DisplayName("POST /api/Teams/Members")
	public void test_5pNggNCv35IK_null() {
		String testResultId = "test_5pNggNCv35IK_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/api/Teams/Members");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Teams/GenerateReport")
	@DisplayName("POST /api/Teams/GenerateReport")
	public void test_RxIWghiNiwVI_null() {
		String testResultId = "test_RxIWghiNiwVI_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.post("/api/Teams/GenerateReport");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/TotalWorkingDays/{FromDate}/{ToDate}")
	@DisplayName("GET /api/TotalWorkingDays/{FromDate}/{ToDate}")
	public void test_PwPKg0797gte_null() {
		String testResultId = "test_PwPKg0797gte_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.queryParam("includeHalfDay", "true")
						.pathParam("FromDate", "DFLgIlu")
						.pathParam("ToDate", "qx")
					.when()
						.get("/api/TotalWorkingDays/{FromDate}/{ToDate}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users")
	@DisplayName("GET /api/Users")
	public void test_MCtnfZaL4qfW_null() {
		String testResultId = "test_MCtnfZaL4qfW_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Users");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users")
	@DisplayName("POST /api/Users")
	public void test_aLLP3iZxbuwF_null() {
		String testResultId = "test_aLLP3iZxbuwF_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{attSysUserId:1166182982,isSetLeaveBalanceToZero:false,role:362945271,clientEmail:\"aGQET\",lastWorkingDate:\"fYbOkECaJw\",name:\"\",hideEmail:false,joiningDate:\"\",id:1684937059,isActive:true,email:\"FejqzkjvuW\"}")
					.when()
						.post("/api/Users");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/Current")
	@DisplayName("GET /api/Users/Current")
	public void test_fQlVehwYxC6U_null() {
		String testResultId = "test_fQlVehwYxC6U_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Users/Current");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{id}")
	@DisplayName("GET /api/Users/{id}")
	public void test_yCMupqoJ8Rao_null() {
		String testResultId = "test_yCMupqoJ8Rao_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-545255609")
					.when()
						.get("/api/Users/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{id}")
	@DisplayName("PUT /api/Users/{id}")
	public void test_sXU6YfEDQcll_null() {
		String testResultId = "test_sXU6YfEDQcll_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-377090273")
						.contentType(ContentType.JSON)
						.body("{attSysUserId:-716796260,isSetLeaveBalanceToZero:false,role:1988402856,clientEmail:\"DpYmAkPmS\",lastWorkingDate:\"deGVGNGTaM\",name:\"hC\",hideEmail:false,joiningDate:\"qSRblhbo\",id:1877351083,isActive:false,email:\"\"}")
					.when()
						.put("/api/Users/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{id}")
	@DisplayName("DELETE /api/Users/{id}")
	public void test_M1dKlOxBweAr_null() {
		String testResultId = "test_M1dKlOxBweAr_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "111578702")
					.when()
						.delete("/api/Users/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{id}/Details")
	@DisplayName("GET /api/Users/{id}/Details")
	public void test_VshBRvWzEJzf_null() {
		String testResultId = "test_VshBRvWzEJzf_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "539270060")
					.when()
						.get("/api/Users/{id}/Details");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/{userId}/TeamMembers")
	@DisplayName("GET /api/Users/{userId}/TeamMembers")
	public void test_M3Yl5ZrdW9yy_null() {
		String testResultId = "test_M3Yl5ZrdW9yy_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("userId", "1367515104")
					.when()
						.get("/api/Users/{userId}/TeamMembers");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/Active/Profiles")
	@DisplayName("GET /api/Users/Active/Profiles")
	public void test_N1qX8f69fTQy_null() {
		String testResultId = "test_N1qX8f69fTQy_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Users/Active/Profiles");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/Roles")
	@DisplayName("GET /api/Users/Roles")
	public void test_bbitSiIvT4Lk_null() {
		String testResultId = "test_bbitSiIvT4Lk_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Users/Roles");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/AttendanceStatistics/{userId}")
	@DisplayName("GET /api/Users/AttendanceStatistics/{userId}")
	public void test_F74iZFwBxqBX_null() {
		String testResultId = "test_F74iZFwBxqBX_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("userId", "-1734206873")
					.when()
						.get("/api/Users/AttendanceStatistics/{userId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Users/LeaveStatistics/{userId}")
	@DisplayName("GET /api/Users/LeaveStatistics/{userId}")
	public void test_KgezdsbdnUBm_null() {
		String testResultId = "test_KgezdsbdnUBm_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("userId", "-484041797")
					.when()
						.get("/api/Users/LeaveStatistics/{userId}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, response.then().log().all().toString());
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

}
