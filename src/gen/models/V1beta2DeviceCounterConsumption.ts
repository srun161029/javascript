/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.33.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1beta2Counter } from '../models/V1beta2Counter.js';
import { HttpFile } from '../http/http.js';

/**
* DeviceCounterConsumption defines a set of counters that a device will consume from a CounterSet.
*/
export class V1beta2DeviceCounterConsumption {
    /**
    * CounterSet is the name of the set from which the counters defined will be consumed.
    */
    'counterSet': string;
    /**
    * Counters defines the counters that will be consumed by the device.  The maximum number counters in a device is 32. In addition, the maximum number of all counters in all devices is 1024 (for example, 64 devices with 16 counters each).
    */
    'counters': { [key: string]: V1beta2Counter; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "counterSet",
            "baseName": "counterSet",
            "type": "string",
            "format": ""
        },
        {
            "name": "counters",
            "baseName": "counters",
            "type": "{ [key: string]: V1beta2Counter; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta2DeviceCounterConsumption.attributeTypeMap;
    }

    public constructor() {
    }
}
