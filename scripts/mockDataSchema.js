export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "username": {
            "type": "string",
            "faker": "internet.userName"
          },
        },
        "required": ["id", "username"]
      }
    }
  },
  "required": ["users"]
};
