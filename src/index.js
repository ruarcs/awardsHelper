/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This sample shows how to create a Lambda function for handling Alexa Skill requests that:
 *
 * - LITERAL slot: demonstrates literal handling for a finite set of known values
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask awards helper who won the Oscar for best actor."
 *  Alexa: "(reads back the winner of the best actor Oscar)"
 */

'use strict';

var AlexaSkill = require('./AlexaSkill'),
    awards = require('./awards');

var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * AwardsHelper is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var AwardsHelper = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
AwardsHelper.prototype = Object.create(AlexaSkill.prototype);
AwardsHelper.prototype.constructor = AwardsHelper;

AwardsHelper.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechOutput = "Welcome to the Awards Helper ... Now, what can I help you with.";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechOutput, repromptText);
};

AwardsHelper.prototype.intentHandlers = {
    FactIntent: function (intent, session, response) {
        var awardName = intent.slots.Award.value.toLowerCase();
        var cardTitle = "And the oscar for " + awardName + " goes to: \n";
        var winner = awards[awardName];
        if (winner) {
			var speech = "The winner of the Oscar for " + awardName + " was " + winner;
            response.tellWithCard(speech, cardTitle, winner);
        } else {
            response.ask("I'm sorry, I currently do not know the winner of the award for " + awardName + ". What else can I help with?", "What else can I help with?");
        }
    },
    HelpIntent: function (intent, session, response) {
        var cardTitle = intent.name;
        var speechOutput = "You can ask me about who won the oscar for best actor in 2015, or, you can say exit... Now, what can I help you with?";
        var repromptText = "You can say things like, who won the Oscar for best actor, or you can say exit... Now, what can I help you with?";
        response.ask(speechOutput, repromptText);
    }
};

exports.handler = function (event, context) {
    var awardsHelper = new AwardsHelper();
    awardsHelper.execute(event, context);
};
