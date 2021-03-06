const signupSchema = {
    type: "object",
    properties: {
      firstName: { type: "string",minLength: 1 },
      lastName: { type: "string" ,minLength: 1},
      email: { type: "string" , format: "email"},
      password: { type: "string" ,minLength: 1},
      confirmPassword: { type: "string" ,minLength: 1},
      phoneNumber: { type: "string" ,minLength:1 },
      imageUrl:{type:"string"}
    },
    required: ["firstName", "lastName", "email", "password","confirmPassword","phoneNumber"],
    additionalProperties: false,
  };
  const loginSchema = {
    type: "object",
    properties: {
      email: { type: "string" , format: "email"},
      password: { type: "string" ,minLength: 1},
    },
    required: [ "email", "password"],
    additionalProperties: false,
  };
  
  
  export {signupSchema,loginSchema};