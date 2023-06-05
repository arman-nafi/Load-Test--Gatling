package com.tmsssepfisheries.tests

import scala.concurrent.duration.*
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*
import io.gatling.jdbc.Predef.*

import scala.language.postfixOps

class VendorRegister extends Simulation {

	val httpProtocol = http
		.baseUrl("https://tmsssepfisheries.org")
		.inferHtmlResources()

	val scn = scenario("Vendor Registration Load Test")
		.exec(http("Vendor Registration Request")
			.get("/vendor-register/")
			.check(status.is(200)))

	val users = 100
	val rampUpDuration = 20 seconds

	setUp(
		scn.inject(rampUsers(users).during(rampUpDuration))
	).protocols(httpProtocol)
}