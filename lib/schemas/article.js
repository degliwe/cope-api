exports.v1 = {
    "id": "article",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "version": "1.0",
    "type": "object",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[0-9A-Za-z-_]*$"
        },
        "type": {
            "type": "string",
            "pattern": "^[0-9A-Za-z-_]*$"
        },
        "version": {
            "type": "string",
            "pattern": "^[0-9A-Za-z-_]*$"
        },
        "producer": {
            "type": "string"
        },
        "producer_content_id": {
            "type": "string"
        },
        "created": {
            "type": "string",
            "pattern": "^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))$"
        },
        "updated": {
            "type": "string",
            "pattern": "^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))$"
        },
        "default_language": {
            "type": "string",
            "pattern": "^([a-z]{2}|und)$"
        },
        "languages": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^([a-z]{2}|und)$"
            },
            "additionalProperties": false
        },
        "fields": {
            "type": "object",
            "patternProperties": {
                "^[a-z_]*$": {
                    "type": "object",
                    "patternProperties": {
                        "^([a-z]{2}|und)$": {
                            "type": "array"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    },
    "required": [
        "_id",
        "fields",
        "type",
        "version",
        "producer",
        "producer_content_id",
        "created",
        "updated",
        "default_language",
        "languages"
    ]
};