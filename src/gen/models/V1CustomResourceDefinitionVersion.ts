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

import { V1CustomResourceColumnDefinition } from '../models/V1CustomResourceColumnDefinition.js';
import { V1CustomResourceSubresources } from '../models/V1CustomResourceSubresources.js';
import { V1CustomResourceValidation } from '../models/V1CustomResourceValidation.js';
import { V1SelectableField } from '../models/V1SelectableField.js';
import { HttpFile } from '../http/http.js';

/**
* CustomResourceDefinitionVersion describes a version for CRD.
*/
export class V1CustomResourceDefinitionVersion {
    /**
    * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
    */
    'additionalPrinterColumns'?: Array<V1CustomResourceColumnDefinition>;
    /**
    * deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
    */
    'deprecated'?: boolean;
    /**
    * deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
    */
    'deprecationWarning'?: string;
    /**
    * name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
    */
    'name': string;
    'schema'?: V1CustomResourceValidation;
    /**
    * selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors
    */
    'selectableFields'?: Array<V1SelectableField>;
    /**
    * served is a flag enabling/disabling this version from being served via REST APIs
    */
    'served': boolean;
    /**
    * storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
    */
    'storage': boolean;
    'subresources'?: V1CustomResourceSubresources;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "additionalPrinterColumns",
            "baseName": "additionalPrinterColumns",
            "type": "Array<V1CustomResourceColumnDefinition>",
            "format": ""
        },
        {
            "name": "deprecated",
            "baseName": "deprecated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deprecationWarning",
            "baseName": "deprecationWarning",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "V1CustomResourceValidation",
            "format": ""
        },
        {
            "name": "selectableFields",
            "baseName": "selectableFields",
            "type": "Array<V1SelectableField>",
            "format": ""
        },
        {
            "name": "served",
            "baseName": "served",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subresources",
            "baseName": "subresources",
            "type": "V1CustomResourceSubresources",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceDefinitionVersion.attributeTypeMap;
    }

    public constructor() {
    }
}
