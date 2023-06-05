package com.tmsssepfisheries.tests

import scala.concurrent.duration.*
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*
import io.gatling.jdbc.Predef.*

import scala.language.postfixOps

class FishHatchery extends Simulation {

  val httpProtocol = http
    .baseUrl("https://tmsssepfisheries.org")
    .inferHtmlResources()

  val scn = scenario("Fish Hatchery Load Test")
    .exec(http("Fish Hatchery Request")
      .get("/fish-hatchery/")
      .check(status.is(200)))

  val users = 100
  val rampUpDuration = 20 seconds

  setUp(
    scn.inject(rampUsers(users).during(rampUpDuration))
  ).protocols(httpProtocol)
}