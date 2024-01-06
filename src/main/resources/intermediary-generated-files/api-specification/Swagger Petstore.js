class OpenAPI {
    openapi: 3.0.1
    info: class Info {
        title: Swagger Petstore
        description: This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
        termsOfService: http://swagger.io/terms/
        contact: class Contact {
            name: null
            url: null
            email: apiteam@swagger.io
        }
        license: class License {
            name: Apache 2.0
            url: http://www.apache.org/licenses/LICENSE-2.0.html
        }
        version: 1.0.6
    }
    externalDocs: class ExternalDocumentation {
        description: Find out more about Swagger
        url: http://swagger.io
    }
    servers: [class Server {
        url: https://petstore.swagger.io/v2
        description: null
        variables: null
    }, class Server {
        url: http://petstore.swagger.io/v2
        description: null
        variables: null
    }]
    security: null
    tags: [class Tag {
        name: pet
        description: Everything about your Pets
        externalDocs: class ExternalDocumentation {
            description: Find out more
            url: http://swagger.io
        }
    }, class Tag {
        name: store
        description: Access to Petstore orders
        externalDocs: null
    }, class Tag {
        name: user
        description: Operations about user
        externalDocs: class ExternalDocumentation {
            description: Find out more about our store
            url: http://swagger.io
        }
    }]
    paths: class Paths {
        {/pet/{petId}/uploadImage=class PathItem {
            summary: null
            description: null
            get: null
            put: null
            post: class Operation {
                tags: [pet]
                summary: uploads an image
                description: null
                externalDocs: null
                operationId: uploadFile
                parameters: [class Parameter {
                    name: petId
                    in: path
                    description: ID of pet to update
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class IntegerSchema {
                        class Schema {
                            type: integer
                            format: int64
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
                }]
                requestBody: class RequestBody {
                    description: null
                    content: class Content {
                        {multipart/form-data=class MediaType {
                            schema: class Schema {
                                type: null
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
                                properties: {additionalMetadata=class StringSchema {
                                    class Schema {
                                        type: string
                                        format: null
                                        $ref: null
                                        description: Additional data to pass to server
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
                                }, file=class FileSchema {
                                    class Schema {
                                        type: string
                                        format: binary
                                        $ref: null
                                        description: file to upload
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
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/ApiResponse
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
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {petstore_auth=[write:pets, read:pets]}
                }]
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
        }, /pet=class PathItem {
            summary: null
            description: null
            get: null
            put: class Operation {
                tags: [pet]
                summary: Update an existing pet
                description: null
                externalDocs: null
                operationId: updatePet
                parameters: null
                requestBody: class RequestBody {
                    description: Pet object that needs to be added to the store
                    content: class Content {
                        {application/json=class MediaType {
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
                        }, application/xml=class MediaType {
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
                    required: true
                }
                responses: class ApiResponses {
                    {400=class ApiResponse {
                        description: Invalid ID supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: Pet not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 405=class ApiResponse {
                        description: Validation exception
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {petstore_auth=[write:pets, read:pets]}
                }]
                servers: null
            }
            post: class Operation {
                tags: [pet]
                summary: Add a new pet to the store
                description: null
                externalDocs: null
                operationId: addPet
                parameters: null
                requestBody: class RequestBody {
                    description: Pet object that needs to be added to the store
                    content: class Content {
                        {application/json=class MediaType {
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
                        }, application/xml=class MediaType {
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
                    required: true
                }
                responses: class ApiResponses {
                    {405=class ApiResponse {
                        description: Invalid input
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {petstore_auth=[write:pets, read:pets]}
                }]
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
        }, /pet/findByStatus=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [pet]
                summary: Finds Pets by status
                description: Multiple status values can be provided with comma separated strings
                externalDocs: null
                operationId: findPetsByStatus
                parameters: [class Parameter {
                    name: status
                    in: query
                    description: Status values that need to be considered for filter
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: form
                    explode: true
                    allowReserved: null
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
                        items: class StringSchema {
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
                    }
                    examples: null
                    example: null
                    content: null
                    $ref: null
                }]
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
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
                            }, application/xml=class MediaType {
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
                        extensions: {}
                        $ref: null
                    }, 400=class ApiResponse {
                        description: Invalid status value
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {petstore_auth=[write:pets, read:pets]}
                }]
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
        }, /pet/findByTags=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [pet]
                summary: Finds Pets by tags
                description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
                externalDocs: null
                operationId: findPetsByTags
                parameters: [class Parameter {
                    name: tags
                    in: query
                    description: Tags to filter by
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: form
                    explode: true
                    allowReserved: null
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
                        items: class StringSchema {
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
                    }
                    examples: null
                    example: null
                    content: null
                    $ref: null
                }]
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
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
                            }, application/xml=class MediaType {
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
                        extensions: {}
                        $ref: null
                    }, 400=class ApiResponse {
                        description: Invalid tag value
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: true
                security: [class SecurityRequirement {
                    {petstore_auth=[write:pets, read:pets]}
                }]
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
        }, /pet/{petId}=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [pet]
                summary: Find pet by ID
                description: Returns a single pet
                externalDocs: null
                operationId: getPetById
                parameters: [class Parameter {
                    name: petId
                    in: path
                    description: ID of pet to return
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class IntegerSchema {
                        class Schema {
                            type: integer
                            format: int64
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
                }]
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
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
                            }, application/xml=class MediaType {
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
                        extensions: {}
                        $ref: null
                    }, 400=class ApiResponse {
                        description: Invalid ID supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: Pet not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {api_key=[]}
                }]
                servers: null
            }
            put: null
            post: class Operation {
                tags: [pet]
                summary: Updates a pet in the store with form data
                description: null
                externalDocs: null
                operationId: updatePetWithForm
                parameters: [class Parameter {
                    name: petId
                    in: path
                    description: ID of pet that needs to be updated
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class IntegerSchema {
                        class Schema {
                            type: integer
                            format: int64
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
                }]
                requestBody: class RequestBody {
                    description: null
                    content: class Content {
                        {application/x-www-form-urlencoded=class MediaType {
                            schema: class Schema {
                                type: null
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
                                properties: {name=class StringSchema {
                                    class Schema {
                                        type: string
                                        format: null
                                        $ref: null
                                        description: Updated name of the pet
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
                                }, status=class StringSchema {
                                    class Schema {
                                        type: string
                                        format: null
                                        $ref: null
                                        description: Updated status of the pet
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
                    {405=class ApiResponse {
                        description: Invalid input
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {petstore_auth=[write:pets, read:pets]}
                }]
                servers: null
            }
            delete: class Operation {
                tags: [pet]
                summary: Deletes a pet
                description: null
                externalDocs: null
                operationId: deletePet
                parameters: [class Parameter {
                    name: api_key
                    in: header
                    description: null
                    required: null
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class StringSchema {
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
                }, class Parameter {
                    name: petId
                    in: path
                    description: Pet id to delete
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class IntegerSchema {
                        class Schema {
                            type: integer
                            format: int64
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
                }]
                requestBody: null
                responses: class ApiResponses {
                    {400=class ApiResponse {
                        description: Invalid ID supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: Pet not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {petstore_auth=[write:pets, read:pets]}
                }]
                servers: null
            }
            options: null
            head: null
            patch: null
            trace: null
            servers: null
            parameters: null
            $ref: null
        }, /store/order=class PathItem {
            summary: null
            description: null
            get: null
            put: null
            post: class Operation {
                tags: [store]
                summary: Place an order for a pet
                description: null
                externalDocs: null
                operationId: placeOrder
                parameters: null
                requestBody: class RequestBody {
                    description: order placed for purchasing the pet
                    content: class Content {
                        {application/json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/Order
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
                    required: true
                }
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/Order
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
                            }, application/xml=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/Order
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
                        extensions: {}
                        $ref: null
                    }, 400=class ApiResponse {
                        description: Invalid Order
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
        }, /store/order/{orderId}=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [store]
                summary: Find purchase order by ID
                description: For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
                externalDocs: null
                operationId: getOrderById
                parameters: [class Parameter {
                    name: orderId
                    in: path
                    description: ID of pet that needs to be fetched
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class IntegerSchema {
                        class Schema {
                            type: integer
                            format: int64
                            $ref: null
                            description: null
                            title: null
                            multipleOf: null
                            maximum: 10
                            exclusiveMaximum: null
                            minimum: 1
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
                }]
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/Order
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
                            }, application/xml=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/Order
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
                        extensions: {}
                        $ref: null
                    }, 400=class ApiResponse {
                        description: Invalid ID supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: Order not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
            delete: class Operation {
                tags: [store]
                summary: Delete purchase order by ID
                description: For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
                externalDocs: null
                operationId: deleteOrder
                parameters: [class Parameter {
                    name: orderId
                    in: path
                    description: ID of the order that needs to be deleted
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class IntegerSchema {
                        class Schema {
                            type: integer
                            format: int64
                            $ref: null
                            description: null
                            title: null
                            multipleOf: null
                            maximum: null
                            exclusiveMaximum: null
                            minimum: 1
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
                }]
                requestBody: null
                responses: class ApiResponses {
                    {400=class ApiResponse {
                        description: Invalid ID supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: Order not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: null
                servers: null
            }
            options: null
            head: null
            patch: null
            trace: null
            servers: null
            parameters: null
            $ref: null
        }, /store/inventory=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [store]
                summary: Returns pet inventories by status
                description: Returns a map of status codes to quantities
                externalDocs: null
                operationId: getInventory
                parameters: null
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
                                schema: class MapSchema {
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
                                        properties: null
                                        additionalProperties: class IntegerSchema {
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
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: [class SecurityRequirement {
                    {api_key=[]}
                }]
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
        }, /user/createWithArray=class PathItem {
            summary: null
            description: null
            get: null
            put: null
            post: class Operation {
                tags: [user]
                summary: Creates list of users with given input array
                description: null
                externalDocs: null
                operationId: createUsersWithArrayInput
                parameters: null
                requestBody: class RequestBody {
                    description: List of user object
                    content: class Content {
                        {application/json=class MediaType {
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
                                    $ref: #/components/schemas/User
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
                    required: true
                }
                responses: class ApiResponses {
                    {default=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
        }, /user/createWithList=class PathItem {
            summary: null
            description: null
            get: null
            put: null
            post: class Operation {
                tags: [user]
                summary: Creates list of users with given input array
                description: null
                externalDocs: null
                operationId: createUsersWithListInput
                parameters: null
                requestBody: class RequestBody {
                    description: List of user object
                    content: class Content {
                        {application/json=class MediaType {
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
                                    $ref: #/components/schemas/User
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
                    required: true
                }
                responses: class ApiResponses {
                    {default=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
        }, /user/{username}=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [user]
                summary: Get user by user name
                description: null
                externalDocs: null
                operationId: getUserByName
                parameters: [class Parameter {
                    name: username
                    in: path
                    description: The name that needs to be fetched. Use user1 for testing. 
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class StringSchema {
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
                }]
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {application/json=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/User
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
                            }, application/xml=class MediaType {
                                schema: class Schema {
                                    type: null
                                    format: null
                                    $ref: #/components/schemas/User
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
                        extensions: {}
                        $ref: null
                    }, 400=class ApiResponse {
                        description: Invalid username supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: User not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
                tags: [user]
                summary: Updated user
                description: This can only be done by the logged in user.
                externalDocs: null
                operationId: updateUser
                parameters: [class Parameter {
                    name: username
                    in: path
                    description: name that need to be updated
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class StringSchema {
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
                }]
                requestBody: class RequestBody {
                    description: Updated user object
                    content: class Content {
                        {application/json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/User
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
                    required: true
                }
                responses: class ApiResponses {
                    {400=class ApiResponse {
                        description: Invalid user supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: User not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: null
                servers: null
            }
            post: null
            delete: class Operation {
                tags: [user]
                summary: Delete user
                description: This can only be done by the logged in user.
                externalDocs: null
                operationId: deleteUser
                parameters: [class Parameter {
                    name: username
                    in: path
                    description: The name that needs to be deleted
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class StringSchema {
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
                }]
                requestBody: null
                responses: class ApiResponses {
                    {400=class ApiResponse {
                        description: Invalid username supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }, 404=class ApiResponse {
                        description: User not found
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
                        $ref: null
                    }}
                    extensions: null
                }
                callbacks: null
                deprecated: null
                security: null
                servers: null
            }
            options: null
            head: null
            patch: null
            trace: null
            servers: null
            parameters: null
            $ref: null
        }, /user/login=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [user]
                summary: Logs user into the system
                description: null
                externalDocs: null
                operationId: loginUser
                parameters: [class Parameter {
                    name: username
                    in: query
                    description: The user name for login
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class StringSchema {
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
                }, class Parameter {
                    name: password
                    in: query
                    description: The password for login in clear text
                    required: true
                    deprecated: null
                    allowEmptyValue: null
                    style: null
                    explode: null
                    allowReserved: null
                    schema: class StringSchema {
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
                }]
                requestBody: null
                responses: class ApiResponses {
                    {200=class ApiResponse {
                        description: successful operation
                        headers: {X-Rate-Limit=class Header {
                            description: calls per hour allowed by the user
                            required: null
                            deprecated: null
                            style: null
                            explode: null
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
                        }, X-Expires-After=class Header {
                            description: date in UTC when token expires
                            required: null
                            deprecated: null
                            style: null
                            explode: null
                            schema: class DateTimeSchema {
                                class Schema {
                                    type: string
                                    format: date-time
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
                        }}
                        content: class Content {
                            {application/json=class MediaType {
                                schema: class StringSchema {
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
                            }, application/xml=class MediaType {
                                schema: class StringSchema {
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
                        extensions: {}
                        $ref: null
                    }, 400=class ApiResponse {
                        description: Invalid username/password supplied
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
        }, /user/logout=class PathItem {
            summary: null
            description: null
            get: class Operation {
                tags: [user]
                summary: Logs out current logged in user session
                description: null
                externalDocs: null
                operationId: logoutUser
                parameters: null
                requestBody: null
                responses: class ApiResponses {
                    {default=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
        }, /user=class PathItem {
            summary: null
            description: null
            get: null
            put: null
            post: class Operation {
                tags: [user]
                summary: Create user
                description: This can only be done by the logged in user.
                externalDocs: null
                operationId: createUser
                parameters: null
                requestBody: class RequestBody {
                    description: Created user object
                    content: class Content {
                        {application/json=class MediaType {
                            schema: class Schema {
                                type: null
                                format: null
                                $ref: #/components/schemas/User
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
                    required: true
                }
                responses: class ApiResponses {
                    {default=class ApiResponse {
                        description: successful operation
                        headers: null
                        content: class Content {
                            {}
                        }
                        links: null
                        extensions: {}
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
        }}
    }
    components: class Components {
        schemas: {ApiResponse=class ObjectSchema {
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
                properties: {code=class IntegerSchema {
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
                }, type=class StringSchema {
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, message=class StringSchema {
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
        }, Category=class ObjectSchema {
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
                        format: int64
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
                additionalProperties: null
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: class XML {
                    name: Category
                    namespace: null
                    prefix: null
                    attribute: null
                    wrapped: null
                }
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
                required: [name, photoUrls]
                not: null
                properties: {id=class IntegerSchema {
                    class Schema {
                        type: integer
                        format: int64
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: doggie
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: class XML {
                            name: null
                            namespace: null
                            prefix: null
                            attribute: null
                            wrapped: true
                        }
                    }
                    items: class StringSchema {
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
                            nullable: null
                            readOnly: null
                            writeOnly: null
                            example: null
                            externalDocs: null
                            deprecated: null
                            discriminator: null
                            xml: class XML {
                                name: photoUrl
                                namespace: null
                                prefix: null
                                attribute: null
                                wrapped: null
                            }
                        }
                    }
                }, tags=class ArraySchema {
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
                        xml: class XML {
                            name: null
                            namespace: null
                            prefix: null
                            attribute: null
                            wrapped: true
                        }
                    }
                    items: class Schema {
                        type: null
                        format: null
                        $ref: #/components/schemas/Tag
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
                }, status=class StringSchema {
                    class Schema {
                        type: string
                        format: null
                        $ref: null
                        description: pet status in the store
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
                additionalProperties: null
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: class XML {
                    name: Pet
                    namespace: null
                    prefix: null
                    attribute: null
                    wrapped: null
                }
            }
        }, Tag=class ObjectSchema {
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
                        format: int64
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
                additionalProperties: null
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: class XML {
                    name: Tag
                    namespace: null
                    prefix: null
                    attribute: null
                    wrapped: null
                }
            }
        }, Order=class ObjectSchema {
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
                        format: int64
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
                }, petId=class IntegerSchema {
                    class Schema {
                        type: integer
                        format: int64
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
                }, quantity=class IntegerSchema {
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
                }, shipDate=class DateTimeSchema {
                    class Schema {
                        type: string
                        format: date-time
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
                }, status=class StringSchema {
                    class Schema {
                        type: string
                        format: null
                        $ref: null
                        description: Order Status
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
                }, complete=class BooleanSchema {
                    class Schema {
                        type: boolean
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
                }}
                additionalProperties: null
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: class XML {
                    name: Order
                    namespace: null
                    prefix: null
                    attribute: null
                    wrapped: null
                }
            }
        }, User=class ObjectSchema {
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
                        format: int64
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
                }, username=class StringSchema {
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, firstName=class StringSchema {
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, lastName=class StringSchema {
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, email=class StringSchema {
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, password=class StringSchema {
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, phone=class StringSchema {
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
                        nullable: null
                        readOnly: null
                        writeOnly: null
                        example: null
                        externalDocs: null
                        deprecated: null
                        discriminator: null
                        xml: null
                    }
                }, userStatus=class IntegerSchema {
                    class Schema {
                        type: integer
                        format: int32
                        $ref: null
                        description: User Status
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
                additionalProperties: null
                nullable: null
                readOnly: null
                writeOnly: null
                example: null
                externalDocs: null
                deprecated: null
                discriminator: null
                xml: class XML {
                    name: User
                    namespace: null
                    prefix: null
                    attribute: null
                    wrapped: null
                }
            }
        }}
        responses: null
        parameters: null
        examples: null
        requestBodies: null
        headers: null
        securitySchemes: {api_key=class SecurityScheme {
            type: apiKey
            description: null
            name: api_key
            in: header
            scheme: null
            bearerFormat: null
            flows: null
            openIdConnectUrl: null
            $ref: null
        }, petstore_auth=class SecurityScheme {
            type: oauth2
            description: null
            name: null
            in: null
            scheme: null
            bearerFormat: null
            flows: class OAuthFlows {
                implicit: class OAuthFlow {
                    authorizationUrl: https://petstore.swagger.io/oauth/authorize
                    tokenUrl: null
                    refreshUrl: null
                    scopes: class Scopes {
                        {read:pets=read your pets, write:pets=modify pets in your account}
                    }
                }
                password: null
                clientCredentials: null
                authorizationCode: null
            }
            openIdConnectUrl: null
            $ref: null
        }}
        links: null
        callbacks: null
    }
}