package com.tmsssepfisheries.tests

import scala.concurrent.duration.*
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*
import io.gatling.jdbc.Predef.*

import scala.language.postfixOps

class FishFeedMill extends Simulation {

  val httpProtocol = http
    .baseUrl("https://tmsssepfisheries.org")

  val scn = scenario("Fish Feed Mill Load Test")
    .exec(http("Fish Feed Mill Request")
      .get("/fish-feed-mill/")
      .check(status.is(200)))

  val users = 100
  val rampUpDuration = 20 seconds

  setUp(
    scn.inject(rampUsers(users).during(rampUpDuration))
  ).protocols(httpProtocol)
}