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

import { V1alpha1MatchCondition } from '../models/V1alpha1MatchCondition.js';
import { V1alpha1MatchResources } from '../models/V1alpha1MatchResources.js';
import { V1alpha1Mutation } from '../models/V1alpha1Mutation.js';
import { V1alpha1ParamKind } from '../models/V1alpha1ParamKind.js';
import { V1alpha1Variable } from '../models/V1alpha1Variable.js';
import { HttpFile } from '../http/http.js';

/**
* MutatingAdmissionPolicySpec is the specification of the desired behavior of the admission policy.
*/
export class V1alpha1MutatingAdmissionPolicySpec {
    /**
    * failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.  A policy is invalid if paramKind refers to a non-existent Kind. A binding is invalid if paramRef.name refers to a non-existent resource.  failurePolicy does not define how validations that evaluate to false are handled.  Allowed values are Ignore or Fail. Defaults to Fail.
    */
    'failurePolicy'?: string;
    /**
    * matchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the matchConstraints. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.  If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.  The exact matching logic is (in order):   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.   3. If any matchCondition evaluates to an error (but none are FALSE):      - If failurePolicy=Fail, reject the request      - If failurePolicy=Ignore, the policy is skipped
    */
    'matchConditions'?: Array<V1alpha1MatchCondition>;
    'matchConstraints'?: V1alpha1MatchResources;
    /**
    * mutations contain operations to perform on matching objects. mutations may not be empty; a minimum of one mutation is required. mutations are evaluated in order, and are reinvoked according to the reinvocationPolicy. The mutations of a policy are invoked for each binding of this policy and reinvocation of mutations occurs on a per binding basis.
    */
    'mutations'?: Array<V1alpha1Mutation>;
    'paramKind'?: V1alpha1ParamKind;
    /**
    * reinvocationPolicy indicates whether mutations may be called multiple times per MutatingAdmissionPolicyBinding as part of a single admission evaluation. Allowed values are \"Never\" and \"IfNeeded\".  Never: These mutations will not be called more than once per binding in a single admission evaluation.  IfNeeded: These mutations may be invoked more than once per binding for a single admission request and there is no guarantee of order with respect to other admission plugins, admission webhooks, bindings of this policy and admission policies.  Mutations are only reinvoked when mutations change the object after this mutation is invoked. Required.
    */
    'reinvocationPolicy'?: string;
    /**
    * variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except matchConditions because matchConditions are evaluated before the rest of the policy.  The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, variables must be sorted by the order of first appearance and acyclic.
    */
    'variables'?: Array<V1alpha1Variable>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "failurePolicy",
            "baseName": "failurePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchConditions",
            "baseName": "matchConditions",
            "type": "Array<V1alpha1MatchCondition>",
            "format": ""
        },
        {
            "name": "matchConstraints",
            "baseName": "matchConstraints",
            "type": "V1alpha1MatchResources",
            "format": ""
        },
        {
            "name": "mutations",
            "baseName": "mutations",
            "type": "Array<V1alpha1Mutation>",
            "format": ""
        },
        {
            "name": "paramKind",
            "baseName": "paramKind",
            "type": "V1alpha1ParamKind",
            "format": ""
        },
        {
            "name": "reinvocationPolicy",
            "baseName": "reinvocationPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "variables",
            "baseName": "variables",
            "type": "Array<V1alpha1Variable>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1MutatingAdmissionPolicySpec.attributeTypeMap;
    }

    public constructor() {
    }
}
