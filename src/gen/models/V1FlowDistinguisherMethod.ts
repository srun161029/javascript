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

import { HttpFile } from '../http/http.js';

/**
* FlowDistinguisherMethod specifies the method of a flow distinguisher.
*/
export class V1FlowDistinguisherMethod {
    /**
    * `type` is the type of flow distinguisher method The supported types are \"ByUser\" and \"ByNamespace\". Required.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1FlowDistinguisherMethod.attributeTypeMap;
    }

    public constructor() {
    }
}
