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

import { V1IngressPortStatus } from '../models/V1IngressPortStatus.js';
import { HttpFile } from '../http/http.js';

/**
* IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
*/
export class V1IngressLoadBalancerIngress {
    /**
    * hostname is set for load-balancer ingress points that are DNS based.
    */
    'hostname'?: string;
    /**
    * ip is set for load-balancer ingress points that are IP based.
    */
    'ip'?: string;
    /**
    * ports provides information about the ports exposed by this LoadBalancer.
    */
    'ports'?: Array<V1IngressPortStatus>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1IngressPortStatus>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1IngressLoadBalancerIngress.attributeTypeMap;
    }

    public constructor() {
    }
}
