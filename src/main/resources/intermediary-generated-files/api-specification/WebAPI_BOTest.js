class OpenAPI {
    openapi: 3.0.1
    info: class Info {
        title: WebAPI_BOTest
        description: null
        termsOfService: null
        contact: null
        license: null
        version: 1.0
    }
    externalDocs: null
    servers: [class Server {
        url: https://localhost:7166
        description: null
        variables: null
    }]
    security: null
    tags: null
    paths: class Paths {
        {/api/Category=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [Category]
                summary: null
                description: null
                externalDocs: null
                operationId: null
                parameters: null
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: Success
                        headers: null
                        content: class Content {
                            {text/plain=class MediaType {
                                schema: class ArraySchema {
                                    class Schema {
                                        type: array
                                        format: null
                                        $ref: null
                                        description: null
                                        title: null
                                        multipleOf: null
                                        maximum: null
                                        exclusiveMaximum: null
                                        minimum: null
                                        exclusiveMinimum: null
                                        maxLength: null
                                        minLength: null
                                        pattern: null
                                        maxItems: null
                                        minItems: null
                                        uniqueItems: null
                                        maxProperties: null
                                        minProperties: null
                                        required: null
                                        not: null
                                        properties: null
                                        additionalProperties: null
                                        nullable: null
                                        readOnly: null
                                        writeOnly: null
                                        example: null
                                        externalDocs: null
                                        deprecated: null
                                        discriminator: null
                                        xml: null
                                    }
                                    items: class Schema {
                                        type: null
                                        format: null
                                        $ref: #/components/schemas/Pet
                                        description: null
                                        title: null
                                        multipleOf: null
                                        maximum: null
                                        exclusiveMaximum: null
                                        minimum: null
                                        exclusiveMinimum: null
                                        maxLength: null
                                        minLength: null
                                        pattern: null
                                        maxItems: null
                                        minItems: null
                                        uniqueItems: null
                                        maxProperties: null
                                        minProperties: null
                                        required: null
                                        not: null
                                        properties: null
                                        additionalProperties: null
                                        nullable: null
                                        readOnly: null
                                        writeOnly: null
                                        example: null
                                        externalDocs: null
                                        deprecated: null
                                        discriminator: null
                                        xml: null
                                    }
                                }
                                examples: null
                                example: null
                                encoding: null
                            }, application/json=class MediaType {
                                schema: class ArraySchema {
                                    class Schema {
                                        type: array
                                        format: null
                                        $ref: null
                                        description: null
                                        title: null
                                        multipleOf: null
                                        maximum: null
                                        exclusiveMaximum: null
                                        minimum: null
                                        exclusiveMinimum: null
                                        maxLength: null
                                        minLength: null
                                        pattern: null
                                        maxItems: null
                                        minItems: null
                                        uniqueItems: null
                                        maxProperties: null
                                        minProperties: null
                                        required: null
                                        not: null
                                        properties: null
                                        additionalProperties: null
                                        nullable: null
                                        readOnly: null
                                        writeOnly: null
                                        example: null
                                        externalDocs: null
                                        deprecated: null
                                        discriminator: null
                                        xml: null
                                    }
                                    items: class Schema {
                                        type: null
                                        format: null
                                        $ref: #/components/schemas/Pet
                                        description: null
                                        title: null
                                        multipleOf: null
                                        maximum: null
                                        exclusiveMaximum: null
                                        minimum: null
                                        exclusiveMinimum: null
                                        maxLength: null
                                        minLength: null
                                        pattern: null
                                        maxItems: null
                                        minItems: null
                                        uniqueItems: null
                                        maxProperties: null
                                        minProperties: null
                                        required: null
                                        not: null
                                        properties: null
                                        additionalProperties: null
                                        nullable: null
                                        readOnly: null
                                        writeOnly: null
                                        example: null
                                        externalDocs: null
                                        deprecated: null
                                        discriminator: null
                                        xml: null
                                    }
                                }
                                examples: null
                                example: null
                                encoding: null
                            }, text/json=class MediaType {
                                schema: class ArraySchema {
                                    class Schema {
                                        type: array
                                        format: null
                                        $ref: null
                                        description: null
                                        title: null
                                        multipleOf: null
                                        maximum: null
                                        exclusiveMaximum: null
                                        minimum: null
                                        exclusiveMinimum: null
                                        maxLength: null
                                        minLength: null
                                        pattern: null
                                        maxItems: null
                                        minItems: null
                                        uniqueItems: null
                                        maxProperties: null
                                        minProperties: null
                                        required: null
                                        not: null
                                        properties: null
                                        additionalProperties: null
                                        nullable: null
                                        readOnly: null
                                        writeOnly: null
                                        example: null
                                        externalDocs: null
                                        deprecated: null
                                        discriminator: null
                                        xml: null
                                    }
                                    items: class Schema {
                                        type: null
                                        format: null
                                        $ref: #/components/schemas/Pet
                                        description: null
                                        title: null
                                        multipleOf: null
                                        maximum: null
                                        exclusiveMaximum: null
                                        minimum: null
                                        exclusiveMinimum: null
                                        maxLength: null
                                        minLength: null
                                        pattern: null
                                        maxItems: null
                                        minItems: null
                                        uniqueItems: null
                                        maxProperties: null
                                        minProperties: null
                                        required: null
                                        not: null
                                        properties: null
                                        additionalProperties: null
                                        nullable: null
                                        readOnly: null
                                        writeOnly: null
                                        example: null
                                        externalDocs: null
                                        deprecated: null
                                        discriminator: null
                                        xml: null
                                    }
                                }
                                examples: null
                                example: null
                                encoding: null
                            }}
                        }
                        links: null
                        extensions: null
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: null
                servers: null
            }
            put: class Operation {
                tags: [Category]
                summary: null
                description: null
                externalDocs: null
                operationId: null
                parameters: null
                requestBody: class RequestBody {
                    description: null
                    content: class Content {
                        {application/json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/Category
                                description: null
                                title: null
                                multipleOf: null
                                maximum: null
                                exclusiveMaximum: null
                                minimum: null
                                exclusiveMinimum: null
                                maxLength: null
                                minLength: null
                                pattern: null
                                maxItems: null
                                minItems: null
                                uniqueItems: null
                                maxProperties: null
                                minProperties: null
                                required: null
                                not: null
                                properties: null
                                additionalProperties: null
                                nullable: null
                                readOnly: null
                                writeOnly: null
                                example: null
                                externalDocs: null
                                deprecated: null
                                discriminator: null
                                xml: null
                            }
                            examples: null
                            example: null
                            encoding: null
                        }, text/json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/Category
                                description: null
                                title: null
                                multipleOf: null
                                maximum: null
                                exclusiveMaximum: null
                                minimum: null
                                exclusiveMinimum: null
                                maxLength: null
                                minLength: null
                                pattern: null
                                maxItems: null
                                minItems: null
                                uniqueItems: null
                                maxProperties: null
                                minProperties: null
                                required: null
                                not: null
                                properties: null
                                additionalProperties: null
                                nullable: null
                                readOnly: null
                                writeOnly: null
                                example: null
                                externalDocs: null
                                deprecated: null
                                discriminator: null
                                xml: null
                            }
                            examples: null
                            example: null
                            encoding: null
                        }, application/*+json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/Category
                                description: null
                                title: null
                                multipleOf: null
                                maximum: null
                                exclusiveMaximum: null
                                minimum: null
                                exclusiveMinimum: null
                                maxLength: null
                                minLength: null
                                pattern: null
                                maxItems: null
                                minItems: null
                                uniqueItems: null
                                maxProperties: null
                                minProperties: null
                                required: null
                                not: null
                                properties: null
                                additionalProperties: null
                                nullable: null
                                readOnly: null
                                writeOnly: null
                                example: null
                                externalDocs: null
                                deprecated: null
                                discriminator: null
                                xml: null
                            }
                            examples: null
                            example: null
                            encoding: null
                        }}
                    }
                    required: null
                }
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: Success
                        headers: null
                        content: null
                        links: null
                        extensions: null
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: null
                servers: null
            }
            post: class Operation {
                tags: [Category]
                summary: null
                description: null
                externalDocs: null
                operationId: null
                parameters: null
                requestBody: class RequestBody {
                    description: null
                    content: class Content {
                        {application/json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/Category
                                description: null
                                title: null
                                multipleOf: null
                                maximum: null
                                exclusiveMaximum: null
                                minimum: null
                                exclusiveMinimum: null
                                maxLength: null
                                minLength: null
                                pattern: null
                                maxItems: null
                                minItems: null
                                uniqueItems: null
                                maxProperties: null
                                minProperties: null
                                required: null
                                not: null
                                properties: null
                                additionalProperties: null
                                nullable: null
                                readOnly: null
                                writeOnly: null
                                example: null
                                externalDocs: null
                                deprecated: null
                                discriminator: null
                                xml: null
                            }
                            examples: null
                            example: null
                            encoding: null
                        }, text/json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/Category
                                description: null
                                title: null
                                multipleOf: null
                                maximum: null
                                exclusiveMaximum: null
                                minimum: null
                                exclusiveMinimum: null
                                maxLength: null
                                minLength: null
                                pattern: null
                                maxItems: null
                                minItems: null
                                uniqueItems: null
                                maxProperties: null
                                minProperties: null
                                required: null
                                not: null
                                properties: null
                                additionalProperties: null
                                nullable: null
                                readOnly: null
                                writeOnly: null
                                example: null
                                externalDocs: null
                                deprecated: null
                                discriminator: null
                                xml: null
                            }
                            examples: null
                            example: null
                            encoding: null
                        }, application/*+json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/Category
                                description: null
                                title: null
                                multipleOf: null
                                maximum: null
                                exclusiveMaximum: null
                                minimum: null
                                exclusiveMinimum: null
                                maxLength: null
                                minLength: null
                                pattern: null
                                maxItems: null
                                minItems: null
                                uniqueItems: null
                                maxProperties: null
                                minProperties: null
                                required: null
                                not: null
                                properties: null
                                additionalProperties: null
                                nullable: null
                                readOnly: null
                                writeOnly: null
                                example: null
                                externalDocs: null
                                deprecated: null
                                discriminator: null
                                xml: null
                            }
                            examples: null
                            example: null
                            encoding: null
                        }}
                    }
                    required: null
                }
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: Success
                        headers: null
                        content: null
                        links: null
                        extensions: null
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: null
                servers: null
            }
            delete: null
            options: null
            head: null
            patch: null
            trace: null
            servers: null
            parameters: null
            $ref: null
        }, /api/Category/{id}=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [Category]
                summary: null
                description: null
                externalDocs: null
                operationId: null
                parameters: [class PathParameter {
                    class Parameter {
                        name: id
                        in: null
                        description: null
                        required: null
                        deprecated: null
                        allowEmptyValue: null
                        style: simple
                        explode: false
                        allowReserved: null
                        schema: class IntegerSchema {
                            class Schema {
                                type: integer
                                format: int32
                                $ref: null
                                description: null
                                title: null
                                multipleOf: null
                                maximum: null
                                exclusiveMaximum: null
                                minimum: null
                                exclusiveMinimum: null
                                maxLength: null
                                minLength: null
                                pattern: null
                                maxItems: null
                                minItems: null
                                uniqueItems: null
                                maxProperties: null
                                minProperties: null
                                required: null
                                not: null
                                properties: null
                                additionalProperties: null
                                nullable: null
                                readOnly: null
                                writeOnly: null
                                example: null
                                externalDocs: null
                                deprecated: null
                                discriminator: null
                                xml: null
                            }
                        }
                        examples: null
                        example: null
                        content: null
                        $ref: null
                    }
                    in: path
                    required: true
                }]
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: Success
                        headers: null
                        content: class Content {
                            {text/plain=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/Pet
                                    description: null
                                    title: null
                                    multipleOf: null
                                    maximum: null
                                    exclusiveMaximum: null
                                    minimum: null
                                    exclusiveMinimum: null
                                    maxLength: null
                                    minLength: null
                                    pattern: null
                                    maxItems: null
                                    minItems: null
                                    uniqueItems: null
                                    maxProperties: null
                                    minProperties: null
                                    required: null
                                    not: null
                                    properties: null
                                    additionalProperties: null
                                    nullable: null
                                    readOnly: null
                                    writeOnly: null
                                    example: null
                                    externalDocs: null
                                    deprecated: null
                                    discriminator: null
                                    xml: null
                                }
                                examples: null
                                example: null
                                encoding: null
                            }, application/json=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/Pet
                                    description: null
                                    title: null
                                    multipleOf: null
                                    maximum: null
                                    exclusiveMaximum: null
                                    minimum: null
                                    exclusiveMinimum: null
                                    maxLength: null
                                    minLength: null
                                    pattern: null
                                    maxItems: null
                                    minItems: null
                                    uniqueItems: null
                                    maxProperties: null
                                    minProperties: null
                                    required: null
                                    not: null
                                    properties: null
                                    additionalProperties: null
                                    nullable: null
                                    readOnly: null
                                    writeOnly: null
                                    example: null
                                    externalDocs: null
                                    deprecated: null
                                    discriminator: null
                                    xml: null
                                }
                                examples: null
                                example: null
                                encoding: null
                            }, text/json=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/Pet
                                    description: null
                                    title: null
                                    multipleOf: null
                                    maximum: null
                                    exclusiveMaximum: null
                                    minimum: null
                                    exclusiveMinimum: null
                                    maxLength: null
                                    minLength: null
                                    pattern: null
                                    maxItems: null
                                    minItems: null
                                    uniqueItems: null
                                    maxProperties: null
                                    minProperties: null
                                    required: null
                                    not: null
                                    properties: null
                                    additionalProperties: null
                                    nullable: null
                                    readOnly: null
                                    writeOnly: null
                                    example: null
                                    externalDocs: null
                                    deprecated: null
                                    discriminator: null
                                    xml: null
                                }
                                examples: null
                                example: null
                                encoding: null
                            }}
                        }
                        links: null
                        extensions: null
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: null
                servers: null
            }
            put: null
            post: null
            delete: null
            options: null
            head: null
            patch: null
            trace: null
            servers: null
            parameters: null
            $ref: null
        }}
    }
    components: class Components {
        schemas: {Category=class ObjectSchema {
            class Schema {
                type: object
                format: null
                $ref: null
                description: null
                title: null
                multipleOf: null
                maximum: null
                exclusiveMaximum: null
                minimum: null
                exclusiveMinimum: null
                maxLength: null
                minLength: null
                pattern: null
                maxItems: null
                minItems: null
                uniqueItems: null
                maxProperties: null
                minProperties: null
                required: null
                not: null
                properties: {id=class IntegerSchema {
                    class Schema {
                        type: integer
                        format: int32
                        $ref: null
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, name=class StringSchema {
                    class Schema {
                        type: string
                        format: null
                        $ref: null
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: true
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }}
                additionalProperties: false
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: null
            }
        }, Pet=class ObjectSchema {
            class Schema {
                type: object
                format: null
                $ref: null
                description: null
                title: null
                multipleOf: null
                maximum: null
                exclusiveMaximum: null
                minimum: null
                exclusiveMinimum: null
                maxLength: null
                minLength: null
                pattern: null
                maxItems: null
                minItems: null
                uniqueItems: null
                maxProperties: null
                minProperties: null
                required: null
                not: null
                properties: {id=class IntegerSchema {
                    class Schema {
                        type: integer
                        format: int32
                        $ref: null
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, name=class StringSchema {
                    class Schema {
                        type: string
                        format: null
                        $ref: null
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: true
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, status=class Schema {
                    type: null
                    format: null
                    $ref: #/components/schemas/PetStatus
                    description: null
                    title: null
                    multipleOf: null
                    maximum: null
                    exclusiveMaximum: null
                    minimum: null
                    exclusiveMinimum: null
                    maxLength: null
                    minLength: null
                    pattern: null
                    maxItems: null
                    minItems: null
                    uniqueItems: null
                    maxProperties: null
                    minProperties: null
                    required: null
                    not: null
                    properties: null
                    additionalProperties: null
                    nullable: null
                    readOnly: null
                    writeOnly: null
                    example: null
                    externalDocs: null
                    deprecated: null
                    discriminator: null
                    xml: null
                }, category=class Schema {
                    type: null
                    format: null
                    $ref: #/components/schemas/Category
                    description: null
                    title: null
                    multipleOf: null
                    maximum: null
                    exclusiveMaximum: null
                    minimum: null
                    exclusiveMinimum: null
                    maxLength: null
                    minLength: null
                    pattern: null
                    maxItems: null
                    minItems: null
                    uniqueItems: null
                    maxProperties: null
                    minProperties: null
                    required: null
                    not: null
                    properties: null
                    additionalProperties: null
                    nullable: null
                    readOnly: null
                    writeOnly: null
                    example: null
                    externalDocs: null
                    deprecated: null
                    discriminator: null
                    xml: null
                }, photoUrls=class ArraySchema {
                    class Schema {
                        type: array
                        format: null
                        $ref: null
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: true
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                    items: class Schema {
                        type: null
                        format: null
                        $ref: #/components/schemas/PhotoUrl
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }}
                additionalProperties: false
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: null
            }
        }, PetStatus=class IntegerSchema {
            class Schema {
                type: integer
                format: int32
                $ref: null
                description: null
                title: null
                multipleOf: null
                maximum: null
                exclusiveMaximum: null
                minimum: null
                exclusiveMinimum: null
                maxLength: null
                minLength: null
                pattern: null
                maxItems: null
                minItems: null
                uniqueItems: null
                maxProperties: null
                minProperties: null
                required: null
                not: null
                properties: null
                additionalProperties: null
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: null
            }
        }, PhotoUrl=class ObjectSchema {
            class Schema {
                type: object
                format: null
                $ref: null
                description: null
                title: null
                multipleOf: null
                maximum: null
                exclusiveMaximum: null
                minimum: null
                exclusiveMinimum: null
                maxLength: null
                minLength: null
                pattern: null
                maxItems: null
                minItems: null
                uniqueItems: null
                maxProperties: null
                minProperties: null
                required: null
                not: null
                properties: {id=class IntegerSchema {
                    class Schema {
                        type: integer
                        format: int32
                        $ref: null
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, url=class StringSchema {
                    class Schema {
                        type: string
                        format: null
                        $ref: null
                        description: null
                        title: null
                        multipleOf: null
                        maximum: null
                        exclusiveMaximum: null
                        minimum: null
                        exclusiveMinimum: null
                        maxLength: null
                        minLength: null
                        pattern: null
                        maxItems: null
                        minItems: null
                        uniqueItems: null
                        maxProperties: null
                        minProperties: null
                        required: null
                        not: null
                        properties: null
                        additionalProperties: null
                        nullable: true
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }}
                additionalProperties: false
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: null
            }
        }}
        responses: null
        parameters: null
        examples: null
        requestBodies: null
        headers: null
        securitySchemes: null
        links: null
        callbacks: null
    }
}