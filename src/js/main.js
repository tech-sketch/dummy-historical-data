/*
 * Copyright (c) 2019 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* globals MashupPlatform */

(function () {

    "use strict";

    /* *****************************************************************************/
    /* ******************************** PUBLIC *************************************/
    /* *****************************************************************************/

    var id1 = "dummyEntity01";
    var id2 = "dummyEntity02";

    var DummyHistoricalData = function DummyHistoricalData() {
    };

    DummyHistoricalData.prototype.init = function init() {
        console.log("DummyHistoricalData#init()");
        // Set preference callbacks
        MashupPlatform.prefs.registerCallback(handlerPreferences.bind(this));

        // Set wiring status callback
        MashupPlatform.wiring.registerStatusCallback(doInitialize.bind(this));

        // Set input callback
        MashupPlatform.wiring.registerCallback("poiInput", doPoIInput.bind(this));

        // Set beforeunload listener
        window.addEventListener("beforeunload", () => {
            console.log("DummyHistoricalData#beforeunload");
        });
    };

    /* *****************************************************************************/
    /* ******************************** PRIVATE ************************************/
    /* *****************************************************************************/

    var handlerPreferences = function handlerPreferences(new_values) {
        console.log("DummyHistoricalData#handlePreferences", new_values);
        doInitialize.call(this);
    };

    var doInitialize = function doInitialize() {
        console.log("DummyHistoricalData#doInitialize()");
    };

    var doPoIInput = function doPoIInput(data) {
        console.log("DummyHistoricalData#doPoIInput() id=", data.id);
        var temperatures = JSON.parse(localStorage.getItem(data.id));
        var categories = new Array();
        for (var i = 0; i < temperatures.length; i++) {
            categories.unshift(-i);
        }

        var graphData = {
            "title": {
                "text": "The temperature of " + data.id,
                "x": -20
            },
            "subtitle": {
                "text": "dummy data",
                "x": -20
            },
            "xAxis": {
                "title": {
                    "text": "time (sec)"
                },
                "categories": categories
            },
            "yAxis": {
                "title": {
                    "text": "Temperature (°C)"
                },
                "plotLines": [{
                    "value": 0,
                    "width": 1,
                    "color": "#808080"
                }]
            },
            "tooltip": {
                "valueSuffix": "°C"
            },
            "legend": {
                "layout": "vertical",
                "align": "right",
                "verticalAlign": "middle",
                "borderWidth": 0
            },
            "series": [{
                "name": data.id,
                "data": temperatures
            }]
        };
        MashupPlatform.wiring.pushEvent("graphDataOutput", graphData);
        console.log("DummyHistoricalData - graphData=", graphData);
    };

    /* *****************************************************************************/
    /* ********************************  main  *************************************/
    /* *****************************************************************************/

    var dummyHistoricalData = new DummyHistoricalData();
    window.addEventListener("DOMContentLoaded", dummyHistoricalData.init.bind(dummyHistoricalData), false);

})();
