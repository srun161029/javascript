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

import { V1DeploymentCondition } from '../models/V1DeploymentCondition.js';
import { HttpFile } from '../http/http.js';

/**
* DeploymentStatus is the most recently observed status of the Deployment.
*/
export class V1DeploymentStatus {
    /**
    * Total number of available non-terminating pods (ready for at least minReadySeconds) targeted by this deployment.
    */
    'availableReplicas'?: number;
    /**
    * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
    */
    'collisionCount'?: number;
    /**
    * Represents the latest available observations of a deployment\'s current state.
    */
    'conditions'?: Array<V1DeploymentCondition>;
    /**
    * The generation observed by the deployment controller.
    */
    'observedGeneration'?: number;
    /**
    * Total number of non-terminating pods targeted by this Deployment with a Ready Condition.
    */
    'readyReplicas'?: number;
    /**
    * Total number of non-terminating pods targeted by this deployment (their labels match the selector).
    */
    'replicas'?: number;
    /**
    * Total number of terminating pods targeted by this deployment. Terminating pods have a non-null .metadata.deletionTimestamp and have not yet reached the Failed or Succeeded .status.phase.  This is an alpha field. Enable DeploymentReplicaSetTerminatingReplicas to be able to use this field.
    */
    'terminatingReplicas'?: number;
    /**
    * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
    */
    'unavailableReplicas'?: number;
    /**
    * Total number of non-terminating pods targeted by this deployment that have the desired template spec.
    */
    'updatedReplicas'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "availableReplicas",
            "baseName": "availableReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "collisionCount",
            "baseName": "collisionCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1DeploymentCondition>",
            "format": ""
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "readyReplicas",
            "baseName": "readyReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "terminatingReplicas",
            "baseName": "terminatingReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "unavailableReplicas",
            "baseName": "unavailableReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "updatedReplicas",
            "baseName": "updatedReplicas",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1DeploymentStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
