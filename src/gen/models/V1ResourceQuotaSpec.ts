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

import { V1ScopeSelector } from '../models/V1ScopeSelector.js';
import { HttpFile } from '../http/http.js';

/**
* ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
*/
export class V1ResourceQuotaSpec {
    /**
    * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
    */
    'hard'?: { [key: string]: string; };
    'scopeSelector'?: V1ScopeSelector;
    /**
    * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
    */
    'scopes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hard",
            "baseName": "hard",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "scopeSelector",
            "baseName": "scopeSelector",
            "type": "V1ScopeSelector",
            "format": ""
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ResourceQuotaSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
