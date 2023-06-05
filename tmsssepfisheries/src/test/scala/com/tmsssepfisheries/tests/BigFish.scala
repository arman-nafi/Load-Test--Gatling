package com.tmsssepfisheries.tests

import scala.concurrent.duration.*
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*
import io.gatling.jdbc.Predef.*

import scala.language.postfixOps

class BigFish extends Simulation {

  val httpProtocol = http
    .baseUrl("https://tmsssepfisheries.org")
    .inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())

  val scn = scenario("Big Fish Load Test")
    .exec(http("Big Fish Category")
      .get("/product-category/big-fish/")
      .check(status.is(200)))

  val users = 100
  val rampUpDuration = 20 seconds

  setUp(
    scn.inject(rampUsers(users).during(rampUpDuration))
  ).protocols(httpProtocol)
}