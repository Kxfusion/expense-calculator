import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

export const initializeSwagger = (app: Express): void => {
  const options = {
    encoding: "utf8",
    failOnErrors: false,
    format: ".json",
    swaggerDefinition: undefined,
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Expense Calculator API",
        version: "1.0.0",
      },
    },
    apis: ["./server/dist/api/**/*.js"],
  };

  const openApiSpecification = swaggerJsDoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpecification));
}